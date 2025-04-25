
let currentIndex = 0;
const cards = document.querySelector('.testimonial-cards');
const dots = document.querySelectorAll('.dots span');

function updateCarousel() {
  cards.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => 
    dot.classList.toggle('active', index === currentIndex)
  );
}

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < 2) currentIndex++;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});
