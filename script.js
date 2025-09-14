// Áp dụng chế độ tối/sáng ngay khi tải trang
document.documentElement.classList.add(localStorage.getItem('darkMode') === 'true' ? 'dark-mode' : '');

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const htmlRoot = document.getElementById('html-root');

darkModeToggle.addEventListener('click', () => {
  htmlRoot.classList.toggle('dark-mode');
  const isDarkMode = htmlRoot.classList.contains('dark-mode');
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('darkMode', isDarkMode);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Chuyển trang mượt mà
document.querySelectorAll('a[href^=".html"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location.href = this.getAttribute('href');
    }, 300);
  });
});