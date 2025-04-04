document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.appreciation-carousel');
    const cards = carousel.children;

    // Clone all cards to simulate infinite loop
    Array.from(cards).forEach(card => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });
  });