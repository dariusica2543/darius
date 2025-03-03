// Animații la scroll: adaugă clasa "visible" când elementele intră în vizor
const fadeElements = document.querySelectorAll('.fadeInSection');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

// Buton "Scroll To Top": apare când derulezi mai mult de 200px
const scrollToTopBtn = document.querySelector('.scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll la secțiuni când se face click pe link-urile de navigație
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Carusel de recenzii
let reviewIndex = 0;
const reviews = document.querySelectorAll('.review');
function showNextReview() {
  reviews[reviewIndex].style.display = 'none';
  reviewIndex = (reviewIndex + 1) % reviews.length;
  reviews[reviewIndex].style.display = 'block';
}
if (reviews.length > 0) {
  reviews.forEach((r, i) => {
    r.style.display = i === 0 ? 'block' : 'none';
  });
  setInterval(showNextReview, 4000);
}

// FAQ: Toggle răspunsuri
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Toggle Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Modal Newsletter: deschide modalul după 5 secunde
const modal = document.getElementById('newsletterModal');
const modalClose = document.querySelector('.modal-close');
window.addEventListener('load', () => {
  setTimeout(() => {
    modal.style.display = 'block';
  }, 5000);
});
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
