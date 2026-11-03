
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QXFKK6510X');
  

    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "weoox0x23r");


  (function(e,c){if(!c.__SV){var l,h;window.mixpanel=c;c._i=[];c.init=function(q,r,f){function t(d,a){var g=a.split(".");2==g.length&&(d=d[g[0]],a=g[1]);d[a]=function(){d.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";b.people=b.people||[];b.toString=function(d){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);d||(a+=" (stub)");return a};b.people.toString=function(){return b.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
  for(h=0;h<l.length;h++)t(b,l[h]);var n="set set_once union unset remove delete".split(" ");b.get_group=function(){function d(p){a[p]=function(){b.push([g,[p].concat(Array.prototype.slice.call(arguments,0))])}}for(var a={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<n.length;m++)d(n[m]);return a};c._i.push([q,r,f])};c.__SV=1.2;var k=e.createElement("script");k.type="text/javascript";k.async=!0;k.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===
  e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=e.getElementsByTagName("script")[0];e.parentNode.insertBefore(k,e)}})(document,window.mixpanel||[])

  
  mixpanel.init('916923605ccf9f5c2bbbc70b56b70b96', {
    // Capture useful browser behaviour without capturing element text content.
    autocapture: {
      pageview: 'url-with-path-and-query-string',
      click: true,
      dead_click: true,
      input: true,
      rage_click: true,
      scroll: true,
      submit: true,
      capture_text_content: false
    },
    // Record sessions for this low-traffic portfolio site.
    record_sessions_percent: 100,
    record_heatmap_data: true,
    // Recommended modern UTM behaviour.
    stop_utm_persistence: true,
    // Your Mixpanel project uses EU data residency.
    api_host: 'https://api-eu.mixpanel.com'
  });



  (function () {
    if (!window.mixpanel || typeof window.mixpanel.track !== 'function') return;

    const SITE_NAME = 'Maruti Khapare Portfolio';

    // Properties automatically attached to every manual event below.
    mixpanel.register({
      site_name: SITE_NAME,
      hosting_platform: 'Vercel',
      site_type: 'Portfolio',
      site_version: '2026-08-mixpanel'
    });

    // A clear business-friendly event in addition to Mixpanel's automatic pageview.
    mixpanel.track('Portfolio Viewed', {
      page_title: document.title,
      page_path: window.location.pathname,
      page_url: window.location.href,
      referrer: document.referrer || 'Direct'
    });

    // Track meaningful sections only once per page load when they are actually viewed.
    const sectionEvents = {
      'about': 'About Viewed',
      'work': 'Case Studies Viewed',
      'services': 'Expertise Viewed',
      'experience': 'Experience Viewed',
      'credentials': 'Credentials Viewed',
      'contact': 'Contact Viewed'
    };

    const viewedSections = new Set();

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;
          const eventName = sectionEvents[sectionId];

          if (!eventName || viewedSections.has(sectionId)) return;

          viewedSections.add(sectionId);
          mixpanel.track(eventName, {
            section_id: sectionId,
            page_path: window.location.pathname
          });

          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.35
      });

      Object.keys(sectionEvents).forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.observe(section);
      });
    }

    function getClickLocation(element) {
      if (!element) return 'Unknown';

      const section = element.closest('section');
      if (section) return section.id || 'Section';

      if (element.closest('nav')) return 'Navigation';
      if (element.closest('#maruti-chatbot')) return 'Chatbot';
      if (element.closest('footer')) return 'Footer';

      return 'Other';
    }

    // Event delegation also catches links that the chatbot creates dynamically.
    document.addEventListener('click', function (event) {
      const clicked = event.target.closest('a, button');
      if (!clicked) return;

      const location = getClickLocation(clicked);

      // Chatbot interactions.
      if (clicked.id === 'chatbotToggle') {
        mixpanel.track('Chatbot Opened', { location });
        return;
      }

      if (clicked.id === 'chatbotClose') {
        mixpanel.track('Chatbot Closed', { location });
        return;
      }

      if (clicked.matches('#maruti-chatbot .chip')) {
        mixpanel.track('Chatbot Suggestion Clicked', {
          suggestion: clicked.textContent.trim(),
          location
        });
        return;
      }

      // Navigation / internal-section clicks.
      if (clicked.tagName === 'A') {
        const rawHref = clicked.getAttribute('href') || '';
        const href = clicked.href || rawHref;

        if (rawHref.startsWith('#')) {
          mixpanel.track('Navigation Clicked', {
            target_section: rawHref.replace('#', '') || 'top',
            link_text: clicked.textContent.trim(),
            location
          });
          return;
        }

        // High-intent portfolio actions.
        if (href.includes('linkedin.com/in/maruti-khapare')) {
          mixpanel.track('LinkedIn Clicked', { location });
          return;
        }

        if (href.includes('behance.net/NovaNest')) {
          mixpanel.track('Behance Clicked', { location });
          return;
        }

        if (rawHref.startsWith('mailto:')) {
          mixpanel.track('Email Clicked', { location });
          return;
        }

        if (rawHref.startsWith('tel:')) {
          mixpanel.track('Phone Clicked', { location });
          return;
        }

        if (href.includes('drive.google.com/file/')) {
          mixpanel.track('Resume Clicked', { location });
          return;
        }
      }
    });

    // Do not send the user's chatbot question text to Mixpanel.
    document.addEventListener('submit', function (event) {
      if (event.target.id !== 'chatForm') return;

      const input = document.getElementById('chatInput');
      const questionLength = input && input.value ? input.value.trim().length : 0;

      mixpanel.track('Chatbot Question Asked', {
        question_length: questionLength,
        has_question: questionLength > 0
      });
    });
  })();
