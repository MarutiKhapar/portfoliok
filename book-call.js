// Vercel Node.js serverless endpoint. Secrets must be stored in Vercel Environment Variables.
const ZONE = 'Asia/Kolkata';
const OWNER = process.env.BOOKING_OWNER_EMAIL || 'makhapare@gmail.com';
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary';
const SLOT_MINUTES = 30;
function json(res, status, obj){ res.status(status).setHeader('Content-Type','application/json');return res.end(JSON.stringify(obj)); }
function istIso(date,time){ return `${date}T${time}:00+05:30`; }
function istDateParts(){return new Intl.DateTimeFormat('en-CA',{timeZone:ZONE,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
async function accessToken(){
 const body=new URLSearchParams({client_id:process.env.GOOGLE_CLIENT_ID,client_secret:process.env.GOOGLE_CLIENT_SECRET,refresh_token:process.env.GOOGLE_REFRESH_TOKEN,grant_type:'refresh_token'});
 const r=await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});const d=await r.json();if(!r.ok||!d.access_token)throw Error('Calendar authorization failed');return d.access_token;
}
async function gcall(path, token, method='GET',body){const r=await fetch(`https://www.googleapis.com/calendar/v3${path}`,{method,headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{})});const d=await r.json();if(!r.ok)throw Error(d.error?.message || 'Google Calendar request failed');return d;}
module.exports=async (req,res)=>{
 if(req.method!=='POST')return json(res,405,{error:'Method not allowed'});
 if(!process.env.GOOGLE_CLIENT_ID||!process.env.GOOGLE_CLIENT_SECRET||!process.env.GOOGLE_REFRESH_TOKEN)return json(res,503,{error:'Booking is not yet connected to Google Calendar. Please email Maruti directly.'});
 try{
  const {name,email,date,time,topic='',website=''}=req.body||{};
  if(website)return json(res,400,{error:'Invalid request'});
  if(typeof name!=='string'||name.trim().length<2||name.length>90||typeof email!=='string'||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||typeof date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(date)||typeof time!=='string'||!/^\d{2}:\d{2}$/.test(time)||typeof topic!=='string'||topic.length>600)return json(res,400,{error:'Please provide a valid name, email, date and time.'});
  const localTime=Number(time.slice(0,2))*60+Number(time.slice(3));
  if(localTime<9*60||localTime>17*60+30||localTime%30!==0)return json(res,400,{error:'Choose a 30-minute slot between 9 AM and 5:30 PM IST.'});
  const start=new Date(istIso(date,time));if(isNaN(+start)||start.toISOString().slice(0,10)<'2020-01-01')return json(res,400,{error:'Invalid date'});
  const end=new Date(start.getTime()+SLOT_MINUTES*60*1000);
  if(start.getTime()<Date.now()+60*60*1000||start.getTime()>Date.now()+60*24*60*60*1000)return json(res,400,{error:'Choose a date at least one hour ahead and within 60 days.'});
  const weekday=new Intl.DateTimeFormat('en-US',{weekday:'short',timeZone:ZONE}).format(start);if(['Sat','Sun'].includes(weekday))return json(res,400,{error:'Calls are available Monday through Friday.'});
  const token=await accessToken();
  const busy=await gcall('/freeBusy',token,'POST',{timeMin:start.toISOString(),timeMax:end.toISOString(),items:[{id:CALENDAR_ID}]});
  if((busy.calendars?.[CALENDAR_ID]?.busy||[]).length)return json(res,409,{error:'That slot is taken. Please choose another time.'});
  const clean=s=>s.replace(/[<>\r\n]/g,' ').trim();
  const event={summary:`Intro call — ${clean(name)}`,description:`Booked via Maruti's portfolio.\nVisitor: ${clean(name)}\nEmail: ${clean(email)}\nTopic: ${clean(topic)}`,start:{dateTime:istIso(date,time),timeZone:ZONE},end:{dateTime:new Date(end).toISOString(),timeZone:ZONE},attendees:[{email:email.trim(),displayName:clean(name)}],conferenceData:{createRequest:{requestId:`maruti-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,conferenceSolutionKey:{type:'hangoutsMeet'}}}};
  // sendUpdates=all sends Google Calendar invitation to the guest and organizer event notifications.
  const created=await gcall(`/calendars/${encodeURIComponent(CALENDAR_ID)}/events?sendUpdates=all&conferenceDataVersion=1`,token,'POST',event);
  // Optional additional explicit owner notification via Resend.
  if(process.env.RESEND_API_KEY&&process.env.BOOKING_FROM_EMAIL){
    const message=`New portfolio booking: ${clean(name)} (${clean(email)}) for ${date} ${time} IST. Topic: ${clean(topic)}. Event: ${created.htmlLink||''}`;
    const mail=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.BOOKING_FROM_EMAIL,to:[OWNER],subject:`New portfolio call: ${clean(name)}`,text:message})});
    if(!mail.ok)console.error('Owner email notification failed',mail.status);
  }
  return json(res,200,{ok:true,eventId:created.id});
 }catch(e){console.error('Booking request failed:',e.message);return json(res,500,{error:'Could not complete booking. Please email Maruti directly.'});}
};
