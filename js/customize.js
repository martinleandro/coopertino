
// CUSTOMIZE

// CUATRO COLORES

let chiquito = document.querySelector('.semi-circulo-blanco')
let chiquito6 = document.querySelector('.semi-circulo-blanco-6')
let chiquito8 = document.querySelector('.semi-circulo-blanco-8')
let oneFour = document.querySelector('.semi-circulo')
let twoFour = document.querySelector('.semi-circulo2')
let threeFour = document.querySelector('.semi-circulo3')
let fourFour = document.querySelector('.semi-circulo4')

// oneFour.addEventListener('mouseover', sobre)
// oneFour.addEventListener('mouseout', fuera)
// twoFour.addEventListener('mouseover', sobre)
// twoFour.addEventListener('mouseout', fuera)
// threeFour.addEventListener('mouseover', sobre)
// threeFour.addEventListener('mouseout', fuera)
// fourFour.addEventListener('mouseover', sobre)
// fourFour.addEventListener('mouseout', fuera)

oneFour.addEventListener('click', seleccionar)
twoFour.addEventListener('click', seleccionar)
threeFour.addEventListener('click', seleccionar)
fourFour.addEventListener('click', seleccionar)

// function sobre () {
//   this.style.filter = 'brightness(1.5)'
// }

// function fuera () {
//   this.style.filter = 'brightness(1)'
// }

function seleccionar() {
  let arcos = Array.from(document.querySelectorAll('.arco'))
  arcos.map(item => {
    item.classList.remove('seleccionado')
    item.classList.remove('bordeRestante')
    chiquito.classList.remove('bordeRestante')
    chiquito6.classList.remove('bordeRestante')
    chiquito8.classList.remove('bordeRestante')
  });
  this.classList.add('seleccionado');
  if ((this == oneFour) || (this == oneSix) || (this == one)) {
    chiquito.classList.add('bordeRestante')
    chiquito6.classList.add('bordeRestante')
    chiquito8.classList.add('bordeRestante')
  } else if ((this == twoFour) || (this == twoSix) || (this == two)) {
    oneFour.classList.add('bordeRestante')
    oneSix.classList.add('bordeRestante')
    one.classList.add('bordeRestante')
  } else if ((this == threeFour) || (this == threeSix) || (this == three)) {
    twoFour.classList.add('bordeRestante')
    twoSix.classList.add('bordeRestante')
    two.classList.add('bordeRestante')
  } else if ((this == fourFour) || (this == fourSix) || (this == four)) {
    threeFour.classList.add('bordeRestante')
    threeSix.classList.add('bordeRestante')
    three.classList.add('bordeRestante')
  } else if ((this == fiveSix) || (this == five)) {
    fourSix.classList.add('bordeRestante')
    four.classList.add('bordeRestante')
  } else if ((this == sixSix) || (this == six)) {
    fiveSix.classList.add('bordeRestante')
    five.classList.add('bordeRestante')
  } else if (this == seven) {
    six.classList.add('bordeRestante')
  } else if (this == eight) {
    seven.classList.add('bordeRestante')
  }
}

// SEIS COLORES

let oneSix = document.querySelector('.semi-circulo-six')
let twoSix = document.querySelector('.semi-circulo2-six')
let threeSix = document.querySelector('.semi-circulo3-six')
let fourSix = document.querySelector('.semi-circulo4-six')
let fiveSix = document.querySelector('.semi-circulo5-six')
let sixSix = document.querySelector('.semi-circulo6-six')


// oneSix.addEventListener('mouseover', sobre)
// oneSix.addEventListener('mouseout', fuera)
// twoSix.addEventListener('mouseover', sobre)
// twoSix.addEventListener('mouseout', fuera)
// threeSix.addEventListener('mouseover', sobre)
// threeSix.addEventListener('mouseout', fuera)
// fourSix.addEventListener('mouseover', sobre)
// fourSix.addEventListener('mouseout', fuera)
// fiveSix.addEventListener('mouseover', sobre)
// fiveSix.addEventListener('mouseout', fuera)
// sixSix.addEventListener('mouseover', sobre)
// sixSix.addEventListener('mouseout', fuera)

oneSix.addEventListener('click', seleccionar)
twoSix.addEventListener('click', seleccionar)
threeSix.addEventListener('click', seleccionar)
fourSix.addEventListener('click', seleccionar)
fiveSix.addEventListener('click', seleccionar)
sixSix.addEventListener('click', seleccionar)


// OCHO COLORES

let one = document.querySelector('.semi-circulo-eight')
let two = document.querySelector('.semi-circulo2-eight')
let three = document.querySelector('.semi-circulo3-eight')
let four = document.querySelector('.semi-circulo4-eight')
let five = document.querySelector('.semi-circulo5-eight')
let six = document.querySelector('.semi-circulo6-eight')
let seven = document.querySelector('.semi-circulo7-eight')
let eight = document.querySelector('.semi-circulo8-eight')


// one.addEventListener('mouseover', sobre)
// one.addEventListener('mouseout', fuera)
// two.addEventListener('mouseover', sobre)
// two.addEventListener('mouseout', fuera)
// three.addEventListener('mouseover', sobre)
// three.addEventListener('mouseout', fuera)
// four.addEventListener('mouseover', sobre)
// four.addEventListener('mouseout', fuera)
// five.addEventListener('mouseover', sobre)
// five.addEventListener('mouseout', fuera)
// six.addEventListener('mouseover', sobre)
// six.addEventListener('mouseout', fuera)
// seven.addEventListener('mouseover', sobre)
// seven.addEventListener('mouseout', fuera)
// eight.addEventListener('mouseover', sobre)
// eight.addEventListener('mouseout', fuera)

one.addEventListener('click', seleccionar)
two.addEventListener('click', seleccionar)
three.addEventListener('click', seleccionar)
four.addEventListener('click', seleccionar)
five.addEventListener('click', seleccionar)
six.addEventListener('click', seleccionar)
seven.addEventListener('click', seleccionar)
eight.addEventListener('click', seleccionar)

// SELECCION DE COLORES

const color1 = document.querySelector('.div1')
const color2 = document.querySelector('.div2')
const color3 = document.querySelector('.div3')
const color4 = document.querySelector('.div4')
const color5 = document.querySelector('.div5')
const color6 = document.querySelector('.div6')
const color7 = document.querySelector('.div7')
const color8 = document.querySelector('.div8')
const color9 = document.querySelector('.div9')
const color10 = document.querySelector('.div10')
const color11= document.querySelector('.div11')
const color12 = document.querySelector('.div12')
const color13 = document.querySelector('.div13')
const color14 = document.querySelector('.div14')
const color15 = document.querySelector('.div15')
const color16 = document.querySelector('.div16')
const color17 = document.querySelector('.div17')
const color18 = document.querySelector('.div18')
const color19 = document.querySelector('.div19')
const color20 = document.querySelector('.div20')
const color21 = document.querySelector('.div21')
const color22 = document.querySelector('.div22')
const color23 = document.querySelector('.div23')
const color24 = document.querySelector('.div24')
const color25 = document.querySelector('.div25')
const color26 = document.querySelector('.div26')
const color27 = document.querySelector('.div27')
const color28 = document.querySelector('.div28')
const color29 = document.querySelector('.div29')
const color30 = document.querySelector('.div30')



function cambiarColor(elementColor) {
  let arcos = Array.from(document.querySelectorAll('.arco'))
  let arcoSeleccionado = arcos.filter(item => item.classList.contains('seleccionado'))
  [0].style.background = elementColor
}

function cambioDeColor(color) {
let obtenerEstilos = window.getComputedStyle(color);
let backgroundColor = obtenerEstilos.getPropertyValue('background-color');
cambiarColor(backgroundColor)
}

color1.addEventListener('click', function(){cambioDeColor(this)})
color2.addEventListener('click', function(){cambioDeColor(this)})
color3.addEventListener('click', function(){cambioDeColor(this)})
color4.addEventListener('click', function(){cambioDeColor(this)})
color5.addEventListener('click', function(){cambioDeColor(this)})
color6.addEventListener('click', function(){cambioDeColor(this)})
color7.addEventListener('click', function(){cambioDeColor(this)})
color8.addEventListener('click', function(){cambioDeColor(this)})
color9.addEventListener('click', function(){cambioDeColor(this)})
color10.addEventListener('click', function(){cambioDeColor(this)})
color11.addEventListener('click', function(){cambioDeColor(this)})
color12.addEventListener('click', function(){cambioDeColor(this)})
color13.addEventListener('click', function(){cambioDeColor(this)})
color14.addEventListener('click', function(){cambioDeColor(this)})
color15.addEventListener('click', function(){cambioDeColor(this)})
color16.addEventListener('click', function(){cambioDeColor(this)})
color17.addEventListener('click', function(){cambioDeColor(this)})
color18.addEventListener('click', function(){cambioDeColor(this)})
color19.addEventListener('click', function(){cambioDeColor(this)})
color20.addEventListener('click', function(){cambioDeColor(this)})
color21.addEventListener('click', function(){cambioDeColor(this)})
color22.addEventListener('click', function(){cambioDeColor(this)})
color23.addEventListener('click', function(){cambioDeColor(this)})
color24.addEventListener('click', function(){cambioDeColor(this)})
color25.addEventListener('click', function(){cambioDeColor(this)})
color26.addEventListener('click', function(){cambioDeColor(this)})
color27.addEventListener('click', function(){cambioDeColor(this)})
color28.addEventListener('click', function(){cambioDeColor(this)})
color29.addEventListener('click', function(){cambioDeColor(this)})
color30.addEventListener('click', function(){cambioDeColor(this)})

// MOSTRAR ARCOIRIS SELECCIONADO

let botonCuatroColores = document.querySelector('#boton-cuatroColores')
let botonSeisColores = document.querySelector('#boton-seisColores')
let botonOchoColores = document.querySelector('#boton-ochoColores')
let elDeCuatroColores = document.querySelector('.four-colors')
let elDeSeisColores = document.querySelector('.six-colors')
let elDeOchoColores = document.querySelector('.eight-colors')
let modal = document.querySelector('.modalContainer')

botonCuatroColores.addEventListener('click', function(){mostrar(this)})
botonSeisColores.addEventListener('click', function(){mostrar(this)})
botonOchoColores.addEventListener('click', function(){mostrar(this)})


function mostrar(cantidadDeColores) {
  if (cantidadDeColores == botonCuatroColores) {
    elDeCuatroColores.style.display = 'flex'
    modal.style.display = 'none'
  } else if (cantidadDeColores == botonSeisColores) {
    elDeSeisColores.style.display = 'flex'
    modal.style.display = 'none'
  } else if (cantidadDeColores == botonOchoColores) {
    elDeOchoColores.style.display = 'flex'
    modal.style.display = 'none'
  }
}

