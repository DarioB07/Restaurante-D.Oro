const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let currentImages = [];
let slideIndex = 0;

function openModal(cardId) {
  document.getElementById("popupModal").style.display = "block";

  // Asigna imágenes dinámicas según la tarjeta
  if (cardId === 1) {
    currentImages = ["img/doro1.png", "img/doro1b.png", "img/doro1c.png"];
  } else if (cardId === 2) {
    currentImages = ["img/doro2.png", "img/doro2b.png", "img/doro2c.png", "img/doro2d.png"];
  } else if (cardId === 3) {
    currentImages = ["img/doro3.png", "img/doro3b.png"];
  }

  // Contenedor de imágenes
  const slidesContainer = document.getElementById("slidesContainer");
  slidesContainer.innerHTML = ""; // Limpia las imágenes anteriores

  // Insertar todas las imágenes dinámicamente
  currentImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("slide");
    if (index !== 0) img.style.display = "none"; // Ocultar todas menos la primera
    slidesContainer.appendChild(img);
  });

  slideIndex = 0;
}

function changeSlide(n) {
  const slides = document.querySelectorAll("#slidesContainer img");
  slides[slideIndex].style.display = "none"; // Oculta la actual
  slideIndex = (slideIndex + n + slides.length) % slides.length; // Controla el índice
  slides[slideIndex].style.display = "block"; // Muestra la nueva
}

function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}

function openInfoModal() {
  document.getElementById("infoModal").style.display = "block";
}

function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
}

// Cerrar si se hace clic fuera del modal
window.onclick = function (event) {
  const modal = document.getElementById("infoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}




