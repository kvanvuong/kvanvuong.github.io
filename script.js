// script.js
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true
  });

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.classList.add('bg-opacity-100');
    });
    section.addEventListener('mouseleave', () => {
      section.classList.remove('bg-opacity-100');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;
  toggleButton.addEventListener('click', () => {
    console.log('Toggle button clicked. Dark mode:', body.classList.contains('dark')); // Kiểm tra sự kiện
    body.classList.toggle('dark');
    toggleButton.innerHTML = body.classList.contains('dark')
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });
});