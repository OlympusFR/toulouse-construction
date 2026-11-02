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

  // Initialisation sécurisée de l'URL absolue de redirection pour FormSubmit
  const nextInput = document.getElementById('form-next-url');
  if (nextInput) {
    const currentOrigin = window.location.origin;
    if (currentOrigin && currentOrigin.startsWith('http')) {
      nextInput.value = currentOrigin + '/confirmation.html';
    }
  }
});
