document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".appreciation-carousel");

  // Prevent double cloning
  if (!carousel.classList.contains("cloned")) {
    const cards = Array.from(carousel.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });
    carousel.classList.add("cloned");
  }
});
