import { readFileSync, writeFileSync } from 'node:fs';
let html = readFileSync('index.html', 'utf8');
const originalCard = /<article class="project" data-cat="seo"><div class="project-top"><span class="eyetag">Scale · E-commerce SEO<\/span>[\s\S]*?<h3>Olraa<\/h3>[\s\S]*?<\/article>/;
if (!originalCard.test(html)) throw new Error('Expected Olraa project card not found');
html = html.replace(originalCard, `<article class="project" data-cat="seo"><div class="project-top"><span class="eyetag">International · E-commerce SEO</span><span class="pr-icon">⌕</span></div><h3><a href="/work/olraa">Olraa</a></h3><p>International ecommerce SEO, catalogue organisation and content leadership. Explore the strategy behind a reported 300,000+ indexed pages and a 12-person execution team.</p><div class="project-bottom"><strong>~3M impressions · ~20k search clicks</strong><div class="project-links"><a href="/work/olraa">Read case study <span aria-hidden="true">↗</span></a><a href="https://olraa.com/us" target="_blank" rel="noopener noreferrer">Visit Olraa <span aria-hidden="true">↗</span></a></div></div></article>`);
// Preserve portfolio functionality while ensuring visitor questions render as text.
html = html.replace('el.innerHTML = text;', 'if (sender === "user") el.textContent = text; else el.innerHTML = text;');
writeFileSync('index.html', html);
// Next's Pages API adapter preserves the existing endpoint contract and env names.
let booking = readFileSync('book-call.js', 'utf8');
booking = booking.replace('module.exports=async (req,res)=>{', 'export default async function handler(req,res){');
writeFileSync('pages/api/book-call.js', booking);
console.log('Updated homepage Olraa links and preserved booking endpoint in Next.js.');
