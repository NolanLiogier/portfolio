const toggleButtons = document.querySelectorAll('.project-toggle-button');
const cards = document.querySelectorAll('.project-card-inner');

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener('click', () => {
    cards[index].classList.toggle('active');
    toggleButton.textContent = cards[index].classList.contains('active') ? 'X' : '?';
  });
});