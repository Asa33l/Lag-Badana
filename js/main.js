// Mobile nav toggle
document.addEventListener('click', function (e) {
  if (e.target.closest('.menu-btn')) {
    document.querySelector('.nav-links').classList.toggle('open');
  }
});

// Highlight active nav link + site-wide content fixes
document.addEventListener('DOMContentLoaded', function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Update Instagram handle site-wide
  document.querySelectorAll('a[href*="instagram.com"]').forEach(function (a) {
    a.setAttribute('href', 'https://instagram.com/lagabadana_cc_trust');
    if (/@?Laga+_?Badana/i.test(a.textContent)) {
      a.textContent = '@lagabadana_cc_trust';
    }
  });
});
