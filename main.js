const header = document.getElementById("header");

window.addEventListener("scroll", function () {
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
  },
  {
    id: 5,
    titulo: "Ensalada",
    descripcion: "Ensalada y papas fritas.",
    precio: "$25.000",
    imagen: "./img/doro.png"
  }
];

//contenedor
const cardsContainer = document.querySelector("#cardsContainer"); //con querySelector puedo cambiar fácilmente la selección 
// si algún día decido usar una clase en lugar de un id

//generar cards
platos.forEach(plato => {// se recibe como plato.... Se usa cuando quieres recorrer un array 
// y hacer algo con cada elemento (ejemplo: modificar el DOM y el Map Recorre un array igual que forEach, 
// pero devuelve un NUEVO array
  const card = document.createElement("img"); //se crea una etiqueta img
  card.src = plato.imagen;
  card.alt = plato.titulo;
  card.classList.add("card-img");//agrega la clase css card-img para los estilos
  card.onclick = () => openInfoModal(plato.id);
  cardsContainer.appendChild(card); //inserta cada tarjeta img en el contenedor
});

//abrir modal
function openInfoModal(id) {
  const plato = platos.find(plater => plater.id === id); //El metodo find() es una forma mas corta que hacer un ciclo for

  //i++ es i = i + 1
  //const dario = platos[0]//i = 0
  //const dari = platos[1]//i = 1
  //const dar2 = platos[2]//i = 2
  //const dari3 = platos[3]//i = 3
  //console.log(dario)
  //let plato
  //for(let i = 0; i <= platos.length; i++){
  //console.log(platos[i], "Hola")
  //console.log(platos[i].id, "numero")//numero
  //console.log(id === platos[i].id)//booleano
  //if(id === platos[i].id){
  //plato = platos[i]
  //}
  //}

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





