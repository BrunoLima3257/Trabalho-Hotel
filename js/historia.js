let carouselContainer = document.querySelector(".carousel-container");
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselContainer.children.length;
  updateCarousel();
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselContainer.children.length) %
    carouselContainer.children.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Atualizar a classe 'active' para a bolinha correta
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Configurar os eventos das bolinhas
let dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

setInterval(nextSlide, 3500); // Alterar o slide a cada 2,5 segundos
