// Mobile nav toggle
document.addEventListener('click', function (e) {
  if (e.target.closest('.menu-btn')) {
    document.querySelector('.nav-links').classList.toggle('open');
  }
});

// Highlight active nav link based on filename
document.addEventListener('DOMContentLoaded', function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
  });
});
