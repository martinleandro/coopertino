

// MARKET

const selectSizeFour = document.querySelector('#four-colors');
const selectSizeSix = document.querySelector('#six-colors');
const selectSizeSixBig = document.querySelector('#six-colors-big');
const selectSizeMini = document.querySelector('#mini');
const selectWreath = document.querySelector('#wreath');
const container = document.querySelector('#marketContainer');

selectSizeFour.addEventListener('click', function () {showProducts(this)})
selectSizeSix.addEventListener('click', function () {showProducts(this)})
selectSizeSixBig.addEventListener('click', function () {showProducts(this)})
selectSizeMini.addEventListener('click', function () {showProducts(this)})
selectWreath.addEventListener('click', function () {showProducts(this)})

function showProducts(numeroColores) {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.map(item => {
    item.style.display = "none"
  });

  let selectedFour = arrayItems.filter(item => item.classList.contains('four-colors'))
  let selectedSix = arrayItems.filter(item => item.classList.contains('six-colors'))
  let selectedSixBig = arrayItems.filter(item => item.classList.contains('six-colors-big'))
  let selectedMini = arrayItems.filter(item => item.classList.contains('mini'))
  let selectedWreath = arrayItems.filter(item => item.classList.contains('wreath'))

  if (numeroColores == selectSizeFour) {
    $(selectedFour).fadeIn()
  } else if (numeroColores == selectSizeSix) {
    $(selectedSix).fadeIn()
  } else if (numeroColores == selectSizeSixBig) {
    $(selectedSixBig).fadeIn()
  } else if (numeroColores == selectWreath) {
    $(selectedWreath).fadeIn()
  } else if (numeroColores == selectSizeMini) {
    $(selectedMini).fadeIn()
  }
}


// FIN MARKET

// CARRITO

let carrito1 = [];
let carrito = document.querySelector('#carrito')
const botonAgregar = document.querySelectorAll('.button-market-item')
let carritoIcon = document.querySelector('.carrito-img')

carritoIcon.addEventListener('click', mostrarOcultarCarrito)

function mostrarOcultarCarrito() {
  if (carrito.style.display == 'none') {
    carrito.style.display = 'flex'
  } else {
    carrito.style.display = 'none'
  }
  
}

botonAgregar.forEach(() => {addEventListener('click', agregarAlCarrito)})




function agregarAlCarrito(e) {

  if (e.target.classList.contains('button-market-item')) {
    const productoSeleccionado = e.target.parentElement.parentElement
    
    const hijos = productoSeleccionado.childNodes
    const imagen = productoSeleccionado.childNodes[1].cloneNode(true)
    const nombre = productoSeleccionado.childNodes[3].cloneNode(true)
    const precio = productoSeleccionado.childNodes[5].cloneNode(true)
    // const cantidad = productoSeleccionado.childNodes[7].cloneNode(true)
    const sumaTotal = document.querySelector('.sumaTotal')
    const productoId = productoSeleccionado.getAttribute('data-id')
    // const cantidadReal = cantidad.textContent
    console.log(hijos)
    

    imagen.classList.remove('img-200')
    imagen.classList.add('img-carrito')
    nombre.classList.add('h4-carrito')
    precio.classList.add('h4-carrito')
    // cantidad.classList.remove('cantidad')
    // cantidad.classList.add('h4-carrito')

    const precios = [];
    // precios.push(precio.textContent)
    // console.log(precios)

    sumaTotal.textContent = precios;

    const newDiv = document.createElement("div");
    newDiv.classList.add('contenedorCarrito')
    newDiv.appendChild(imagen)
    newDiv.appendChild(nombre)
    newDiv.appendChild(precio)
    // newDiv.appendChild(cantidad)
    newDiv.setAttribute('data-id', productoId)
    console.log(newDiv.id)

    carrito1.push(newDiv)

    carrito.insertBefore(newDiv,document.querySelector('.total'))

    agregarPrecios();
  }

  function agregarPrecios() {
    if (e.target.classList.contains('button-market-item')) {
    const productoSeleccionado = e.target.parentElement.parentElement
    const sumaTotal = document.querySelector('.sumaTotal')
    const precio = productoSeleccionado.childNodes[5].cloneNode(true)
    let precios = Array();
    precios.push(precio.textContent)
    sumaTotal.textContent = precios;
    console.log(precios)
  }
}
  
}
