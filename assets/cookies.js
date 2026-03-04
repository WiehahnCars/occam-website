var GA_ID = 'G-52W0F5S3TM';

function applyGaOptOut() {
  window['ga-disable-' + GA_ID] = true;
}

// On every page load, enforce opt-out if previously declined
if (localStorage.getItem('cookieConsent') === 'declined') {
  applyGaOptOut();
}

(function () {
  if (localStorage.getItem('cookieConsent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.cssText = [
    'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:9999',
    'background:#000', 'color:#f3f4f6', 'padding:16px 24px',
    'display:flex', 'align-items:center', 'justify-content:space-between',
    'flex-wrap:wrap', 'gap:12px',
    'font-family:Montserrat,sans-serif', 'font-size:14px',
    'border-top:1px solid rgba(255,255,255,0.1)'
  ].join(';');

  banner.innerHTML = `
    <span>
      We use cookies to improve your experience. See our
      <a href="/privacy-policy" style="color:#fff;text-decoration:underline;">Privacy Policy</a>.
    </span>
    <div style="display:flex;gap:8px;flex-shrink:0;">
      <button id="cookie-decline" style="padding:8px 18px;border-radius:6px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#f3f4f6;font-size:13px;cursor:pointer;">
        Decline
      </button>
      <button id="cookie-accept" style="padding:8px 18px;border-radius:6px;border:none;background:#fff;color:#111;font-size:13px;font-weight:600;cursor:pointer;">
        Accept
      </button>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('cookie-accept').addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.remove();
  });

  document.getElementById('cookie-decline').addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'declined');
    applyGaOptOut();
    banner.remove();
  });
})();
