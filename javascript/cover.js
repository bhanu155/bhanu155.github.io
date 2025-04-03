// Define image sets
const mobileImages = [
  'assets/cover/bg1.jpg',
  'assets/cover/bg2.jpg',
  'assets/cover/bg4.jpg',
  'assets/cover/bg7.jpg',
  'assets/cover/bg8.jpg',
  'assets/cover/bg9.jpg',
  'assets/cover/bg10.jpg',
  'assets/cover/bg11.jpg',
  'assets/cover/bg12.jpg',
  'assets/cover/bg13.jpg',
];

const desktopImages = [
  'assets/cover/bg1.jpg',
  'assets/cover/bg2.jpg',
  'assets/cover/bg3.jpg',
  'assets/cover/bg4.jpg',
  'assets/cover/bg5.jpg',
  'assets/cover/bg6.jpg',
  'assets/cover/bg7.jpg',
  'assets/cover/bg8.jpg',
  'assets/cover/bg9.jpg',
  'assets/cover/bg10.jpg',
  'assets/cover/bg11.jpg',
  'assets/cover/bg12.jpg',
  'assets/cover/bg13.jpg',
  'assets/cover/bg14.jpg',
  'assets/cover/bg15.jpg',
];

// Shuffle function (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Detect screen width
const isMobile = window.innerWidth < 768;

// Select and shuffle the appropriate set
const images = shuffleArray(isMobile ? mobileImages : desktopImages);

let index = 0;
const bgImg = document.getElementById('bg-image');

// Initial image
bgImg.src = images[index];

// Slideshow every 2.5 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  bgImg.src = images[index];
}, 2500);
