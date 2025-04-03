const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
let current = 1;

// Create array of image paths
const images = Array.from(
  { length: 15 },
  (_, i) => `assets/cover/bg${i + 1}.jpg`
);

// Fisher-Yates Shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle(images); // Shuffle images once

let index = 0;

setInterval(() => {
  const next = (index + 1) % images.length;
  const nextImage = images[next];

  if (current === 1) {
    bg2.style.backgroundImage = `url('${nextImage}')`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
    current = 2;
  } else {
    bg1.style.backgroundImage = `url('${nextImage}')`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
    current = 1;
  }

  index = next;
}, 3000);
