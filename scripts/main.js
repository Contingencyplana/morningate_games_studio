// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const list = document.getElementById('nav-list');
if (toggle && list) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    list.setAttribute('aria-expanded', String(!expanded));
  });
}

// Optionally reveal admin panel when URL has ?admin=1
try {
  const params = new URLSearchParams(window.location.search);
  const adminBtn = document.getElementById('adminPanelOpen');
  if (adminBtn && params.get('admin') === '1') {
    adminBtn.hidden = false;
  }
} catch {}
