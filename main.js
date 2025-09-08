 const header = document.getElementById("header");

    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

// creacion array
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
  },
  {
    id: 4,
    titulo: "Pollo Broaster",
    descripcion: "Jugoso pollo acompañado de ensalada y papas fritas.",
    precio: "$25.000",
    imagen: "./img/doro.png"
  }
];

//contenedor
const cardsContainer = document.getElementById("cardsContainer");

//generar cards
platos.forEach(plato => {// se recibe como plato
  const card = document.createElement("img"); //se crea una etiqueta img
  card.src = plato.imagen;
  card.alt = plato.titulo;
  card.classList.add("card-img");//agrega la clase css card-img para los estilos
  card.onclick = () => openInfoModal(plato.id);
  cardsContainer.appendChild(card); //inserta cada tarjeta img en el contenedor
});

//abrir modal
function openInfoModal(id) {
  const plato = platos.find(plater => plater.id === id);

  document.getElementById("modal-img").src = plato.imagen;
  document.getElementById("modal-titulo").textContent = plato.titulo; //textContent cambia el texto interno del elemento
  document.getElementById("modal-descripcion").textContent = plato.descripcion;
  document.getElementById("modal-precio").textContent = plato.precio;

  document.getElementById("infoModal").style.display = "block";
}

//Cerrar modal
function closeInfoModal() {
  document.getElementById("infoModal").style.display = "none";
}




