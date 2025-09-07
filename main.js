const platos = [
  {
    id: 1,
    titulo: "Golden Deluxe",
    descripcion: "Cortes de carne seleccionados con vegetales frescos y salsas artesanales.",
    precio: "$28.900",
    imagen: "./img/doro.png"
  },
  {
    id: 2,
    titulo: "Parrilla Mixta",
    descripcion: "Variedad de carnes a la parrilla con papas criollas y guacamole casero.",
    precio: "$32.500",
    imagen: "./img/doro.png"
  },
  {
    id: 3,
    titulo: "Pollo BBQ",
    descripcion: "Jugoso pollo en salsa BBQ acompañado de ensalada fresca y papas fritas.",
    precio: "$25.000",
    imagen: "./img/doro.png"
  }
];

//Contenedor
const cardsContainer = document.getElementById("cardsContainer");

//Generar cards
platos.forEach(plato => {
  const card = document.createElement("img");
  card.src = plato.imagen;
  card.alt = plato.titulo;
  card.classList.add("card-img");
  card.onclick = () => openInfoModal(plato.id);
  cardsContainer.appendChild(card);
});

//Abrir modal con datos dinámicos
function openInfoModal(id) {
  const plato = platos.find(p => p.id === id);

  document.getElementById("modal-img").src = plato.imagen;
  document.getElementById("modal-titulo").textContent = plato.titulo;
  document.getElementById("modal-descripcion").textContent = plato.descripcion;
  document.getElementById("modal-precio").textContent = plato.precio;

  document.getElementById("infoModal").style.display = "block";
}

//Cerrar modal
function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
}




