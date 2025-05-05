// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in Animation on Scroll
const fadeInElements = document.querySelectorAll('.container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

fadeInElements.forEach(element => observer.observe(element));

// Responsive Navigation Menu (Toggle)
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.classList.add('nav-toggle');
document.querySelector('header .container').prepend(navToggle);

navToggle.addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
});