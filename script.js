// Typewriter Effect
const roles = ['BCA Student', 'Web Developer', 'Problem Solver'];
let currentRoleIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 1500;

function typeWriter() {
  const typingElement = document.querySelector('.typing-text');
  const currentRole = roles[currentRoleIndex];

  if (!isDeleting) {
    currentText = currentRole.substring(0, currentText.length + 1);
    typingElement.textContent = currentText;

    if (currentText === currentRole) {
      isDeleting = true;
      setTimeout(typeWriter, delayBetweenRoles);
      return;
    }
  } else {
    currentText = currentRole.substring(0, currentText.length - 1);
    typingElement.textContent = currentText;

    if (currentText === '') {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(typeWriter, 500);
      return;
    }
  }

  setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
}

// Scroll Fade-In Animation
function observeScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => observer.observe(element));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Start typewriter effect
  typeWriter();
  
  // Start scroll animations
  observeScrollAnimations();

  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Update button icon based on current theme
  if (currentTheme === 'dark') {
    themeToggle.textContent = '☀️';
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    html.classList.toggle('dark-mode');
    
    // Update button icon and save preference
    if (html.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
});