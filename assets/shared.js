/* ===== CONTACT MODAL ===== */
(function(){
  // Inject modal HTML
  var modalHTML = '<div id="contactModal" style="display:none;position:fixed;inset:0;z-index:10000;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px)">'
    + '<div id="modalContent" style="background:#1a1a22;border:1px solid rgba(245,243,238,0.1);padding:3rem 2.5rem;max-width:480px;width:90%;max-height:90vh;overflow-y:auto;position:relative;transform:scale(0.95);opacity:0;transition:transform 0.3s,opacity 0.3s">'
    + '<button onclick="closeContactModal()" style="position:absolute;top:1rem;right:1.2rem;background:none;border:none;color:rgba(245,243,238,0.4);font-size:1.5rem;cursor:pointer;line-height:1" aria-label="Close">&times;</button>'
    + '<h3 style="font-family:\'Playfair Display\',Georgia,serif;font-size:1.6rem;font-weight:400;color:#f5f3ee;margin-bottom:0.5rem">Start a conversation</h3>'
    + '<p style="font-family:\'Jost\',sans-serif;font-size:0.85rem;color:rgba(245,243,238,0.4);margin-bottom:2rem;line-height:1.6">Tell us a little about your business and what you are looking to solve. We will get back to you.</p>'
    + '<form id="contactForm" action="https://formspree.io/f/xblypvkb" method="POST" style="display:flex;flex-direction:column;gap:1rem">'
    + '<input type="text" name="name" placeholder="Your name" required style="background:rgba(245,243,238,0.05);border:1px solid rgba(245,243,238,0.1);color:#f5f3ee;padding:0.75rem 1rem;font-family:\'Jost\',sans-serif;font-size:0.85rem;outline:none;transition:border 0.2s" onfocus="this.style.borderColor=\'rgba(212,185,122,0.4)\'" onblur="this.style.borderColor=\'rgba(245,243,238,0.1)\'">'
    + '<input type="email" name="email" placeholder="Your email" required style="background:rgba(245,243,238,0.05);border:1px solid rgba(245,243,238,0.1);color:#f5f3ee;padding:0.75rem 1rem;font-family:\'Jost\',sans-serif;font-size:0.85rem;outline:none;transition:border 0.2s" onfocus="this.style.borderColor=\'rgba(212,185,122,0.4)\'" onblur="this.style.borderColor=\'rgba(245,243,238,0.1)\'">'
    + '<select name="role" required style="background:rgba(245,243,238,0.05);border:1px solid rgba(245,243,238,0.1);color:#f5f3ee;padding:0.75rem 1rem;font-family:\'Jost\',sans-serif;font-size:0.85rem;outline:none;transition:border 0.2s;appearance:none;-webkit-appearance:none;background-image:url(\'data:image/svg+xml;utf8,<svg fill=\"rgba(245,243,238,0.3)\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>\');background-repeat:no-repeat;background-position:right 0.8rem center;background-size:1.2rem" onfocus="this.style.borderColor=\'rgba(212,185,122,0.4)\'" onblur="this.style.borderColor=\'rgba(245,243,238,0.1)\'">'
    + '<option value="" disabled selected style="color:rgba(245,243,238,0.35)">Your role</option>'
    + '<option value="CEO / Founder">CEO / Founder</option>'
    + '<option value="COO / Operations">COO / Operations</option>'
    + '<option value="CFO / Finance">CFO / Finance</option>'
    + '<option value="CTO / Technology">CTO / Technology</option>'
    + '<option value="MD / General Manager">MD / General Manager</option>'
    + '<option value="VP / Director">VP / Director</option>'
    + '<option value="Head of Department">Head of Department</option>'
    + '<option value="Other">Other</option>'
    + '</select>'
    + '<select name="company_size" required style="background:rgba(245,243,238,0.05);border:1px solid rgba(245,243,238,0.1);color:#f5f3ee;padding:0.75rem 1rem;font-family:\'Jost\',sans-serif;font-size:0.85rem;outline:none;transition:border 0.2s;appearance:none;-webkit-appearance:none;background-image:url(\'data:image/svg+xml;utf8,<svg fill=\"rgba(245,243,238,0.3)\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>\');background-repeat:no-repeat;background-position:right 0.8rem center;background-size:1.2rem" onfocus="this.style.borderColor=\'rgba(212,185,122,0.4)\'" onblur="this.style.borderColor=\'rgba(245,243,238,0.1)\'">'
    + '<option value="" disabled selected style="color:rgba(245,243,238,0.35)">Number of employees</option>'
    + '<option value="1-10">1 – 10</option>'
    + '<option value="11-50">11 – 50</option>'
    + '<option value="51-200">51 – 200</option>'
    + '<option value="201-500">201 – 500</option>'
    + '<option value="501-1000">501 – 1,000</option>'
    + '<option value="1000+">1,000+</option>'
    + '</select>'
    + '<select name="industry" required style="background:rgba(245,243,238,0.05);border:1px solid rgba(245,243,238,0.1);color:#f5f3ee;padding:0.75rem 1rem;font-family:\'Jost\',sans-serif;font-size:0.85rem;outline:none;transition:border 0.2s;appearance:none;-webkit-appearance:none;background-image:url(\'data:image/svg+xml;utf8,<svg fill=\"rgba(245,243,238,0.3)\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>\');background-repeat:no-repeat;background-position:right 0.8rem center;background-size:1.2rem" onfocus="this.style.borderColor=\'rgba(212,185,122,0.4)\'" onblur="this.style.borderColor=\'rgba(245,243,238,0.1)\'">'
    + '<option value="" disabled selected style="color:rgba(245,243,238,0.35)">Industry</option>'
    + '<option value="Financial Services">Financial Services</option>'
    + '<option value="Insurance">Insurance</option>'
    + '<option value="Technology / SaaS">Technology / SaaS</option>'
    + '<option value="Retail / E-commerce">Retail / E-commerce</option>'
    + '<option value="Manufacturing">Manufacturing</option>'
    + '<option value="Agriculture">Agriculture</option>'
    + '<option value="Healthcare">Healthcare</option>'
    + '<option value="Education">Education</option>'
    + '<option value="Professional Services">Professional Services</option>'
    + '<option value="Logistics / Supply Chain">Logistics / Supply Chain</option>'
    + '<option value="Real Estate / Property">Real Estate / Property</option>'
    + '<option value="Other">Other</option>'
    + '</select>'
    + '<textarea name="message" placeholder="What are you looking to solve?" rows="3" style="background:rgba(245,243,238,0.05);border:1px solid rgba(245,243,238,0.1);color:#f5f3ee;padding:0.75rem 1rem;font-family:\'Jost\',sans-serif;font-size:0.85rem;outline:none;resize:vertical;transition:border 0.2s" onfocus="this.style.borderColor=\'rgba(212,185,122,0.4)\'" onblur="this.style.borderColor=\'rgba(245,243,238,0.1)\'">'
    + '</textarea>'
    + '<button type="submit" style="background:#d4b97a;color:#0a0a0c;border:none;padding:0.85rem;font-family:\'Jost\',sans-serif;font-size:0.8rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;transition:background 0.2s,transform 0.2s" onmouseover="this.style.background=\'#d4bb8a\';this.style.transform=\'translateY(-1px)\'" onmouseout="this.style.background=\'#d4b97a\';this.style.transform=\'none\'">Send</button>'
    + '</form>'
    + '</div></div>';

  // Thank you modal
  var thankHTML = '<div id="thankYouModal" style="display:none;position:fixed;inset:0;z-index:10001;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px)">'
    + '<div style="background:#1a1a22;border:1px solid rgba(245,243,238,0.1);padding:3rem 2.5rem;max-width:380px;width:90%;text-align:center">'
    + '<h3 style="font-family:\'Playfair Display\',Georgia,serif;font-size:1.6rem;font-weight:400;color:#f5f3ee;margin-bottom:0.8rem">Thank you</h3>'
    + '<p style="font-family:\'Jost\',sans-serif;font-size:0.9rem;color:rgba(245,243,238,0.5);line-height:1.6">We will be in touch shortly.</p>'
    + '</div></div>';

  document.body.insertAdjacentHTML('beforeend', modalHTML + thankHTML);

  var modal = document.getElementById('contactModal');
  var content = document.getElementById('modalContent');

  window.openContactModal = function(e) {
    if (e) e.preventDefault();
    modal.style.display = 'flex';
    requestAnimationFrame(function(){
      content.style.transform = 'scale(1)';
      content.style.opacity = '1';
    });
  };

  window.closeContactModal = function() {
    content.style.transform = 'scale(0.95)';
    content.style.opacity = '0';
    setTimeout(function(){ modal.style.display = 'none'; }, 300);
  };

  // Close on backdrop click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeContactModal();
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeContactModal();
  });

  // Hook up all mailto CTA links
  document.querySelectorAll('a[href="mailto:hello@occamco.com"]').forEach(function(el) {
    el.href = '#';
    el.addEventListener('click', openContactModal);
  });

  // Form submission
  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function(res) {
      if (res.ok) {
        closeContactModal();
        form.reset();
        var ty = document.getElementById('thankYouModal');
        ty.style.display = 'flex';
        setTimeout(function(){ ty.style.display = 'none'; }, 3000);
      }
    });
  });
})();


/* ===== COOKIE BANNER ===== */
(function(){
  if (localStorage.getItem('occam_cookies_accepted')) return;

  var banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#1a1a22;border-top:1px solid rgba(245,243,238,0.08);padding:1.2rem 2rem;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap;font-family:"Jost",sans-serif';

  banner.innerHTML = '<p style="font-size:0.82rem;color:rgba(245,243,238,0.5);line-height:1.6;margin:0;flex:1;min-width:200px">'
    + 'We use cookies to improve your experience. By continuing to use this site you agree to our <a href="/privacy-policy" style="color:#d4b97a;text-decoration:none">privacy policy</a>.'
    + '</p>'
    + '<div style="display:flex;gap:0.8rem;flex-shrink:0">'
    + '<button id="cookieAccept" style="background:#d4b97a;color:#0a0a0c;border:none;padding:0.55rem 1.4rem;font-family:\'Jost\',sans-serif;font-size:0.75rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:background 0.2s">Accept</button>'
    + '<button id="cookieDecline" style="background:none;border:1px solid rgba(245,243,238,0.15);color:rgba(245,243,238,0.4);padding:0.55rem 1.4rem;font-family:\'Jost\',sans-serif;font-size:0.75rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:border-color 0.2s,color 0.2s">Decline</button>'
    + '</div>';

  document.body.appendChild(banner);

  document.getElementById('cookieAccept').addEventListener('click', function() {
    localStorage.setItem('occam_cookies_accepted', 'true');
    banner.remove();
  });

  document.getElementById('cookieDecline').addEventListener('click', function() {
    localStorage.setItem('occam_cookies_accepted', 'declined');
    banner.remove();
  });
})();
