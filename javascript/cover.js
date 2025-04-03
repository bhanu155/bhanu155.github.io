const mobileImages = [
  "assets/cover/bg1.jpg",
  "assets/cover/bg2.jpg",
  "assets/cover/bg4.jpg",
  "assets/cover/bg7.jpg",
  "assets/cover/bg8.jpg",
  "assets/cover/bg9.jpg",
  "assets/cover/bg10.jpg",
  "assets/cover/bg11.jpg",
  "assets/cover/bg13.jpg",
];

const desktopImages = [
  "assets/cover/bg1.jpg",
  "assets/cover/bg2.jpg",
  "assets/cover/bg3.jpg",
  "assets/cover/bg4.jpg",
  "assets/cover/bg5.jpg",
  "assets/cover/bg6.jpg",
  "assets/cover/bg7.jpg",
  "assets/cover/bg8.jpg",
  "assets/cover/bg9.jpg",
  "assets/cover/bg10.jpg",
  "assets/cover/bg11.jpg",
  "assets/cover/bg13.jpg",
  "assets/cover/bg14.jpg",
  "assets/cover/bg15.jpg",
];

// Shuffle utility
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const isMobile = window.innerWidth < 768;
const baseImages = isMobile ? mobileImages : desktopImages;
const filtered = baseImages.filter((img) => img !== "assets/cover/bg12.jpg");
const images = ["assets/cover/bg12.jpg", ...shuffleArray(filtered)];

let index = 0;
const img1 = document.getElementById("bg-image1");
const img2 = document.getElementById("bg-image2");
let showingFirst = true;

setInterval(() => {
  index = (index + 1) % images.length;
  const nextImg = images[index];

  if (showingFirst) {
    img2.src = nextImg;
    img2.style.opacity = 1;
    img1.style.opacity = 0;
  } else {
    img1.src = nextImg;
    img1.style.opacity = 1;
    img2.style.opacity = 0;
  }

  showingFirst = !showingFirst;
}, 2500);