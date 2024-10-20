const radios = document.querySelectorAll('input[type="radio"]');
let currentIndex = 0;

function changeSlide(index) {
  radios[index].checked = true;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % radios.length;
    changeSlide(currentIndex);
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + radios.length) % radios.length;
    changeSlide(currentIndex);
  }
});

// Flèches gauche et droite
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + radios.length) % radios.length;
  changeSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % radios.length;
  changeSlide(currentIndex);
});
