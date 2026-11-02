// Toulouse Construction - Script d'optimisation et interactions
document.addEventListener('DOMContentLoaded', () => {
  // Défilement fluide vers les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Légère ombre dynamique sur la navbar lors du scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.06)';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Configuration dynamique de la page de redirection du formulaire FormSubmit
  const contactForm = document.getElementById('contact-form');
  const nextInput = document.getElementById('form-next-url');
  if (contactForm && nextInput) {
    // Calcul de l'URL absolue de confirmation.html selon l'hébergement (GitHub Pages ou Domaine personnalisé)
    const currentOrigin = window.location.origin;
    const currentPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    const confirmationUrl = currentOrigin + currentPath + '/confirmation.html';
    nextInput.value = confirmationUrl;
  }
});
