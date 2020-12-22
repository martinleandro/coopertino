// // SELECTORES
// // const nombre = prompt("Bienvenido, como es tu nombre?");
// let nombre1 = document.querySelector('#userName')
// const colors = ["red", "white", "blue", "black", "yellow", "green", "orange", "grey", "brown"];

// console.log(nombre)

// agregarNombre();

// function agregarNombre() {
//   userName.innerHTML = nombre;
// }


// const selectedColors = [];

// let userRainbow = {
//   size: "20x25cm",
//   color: selectedColors,
//   pendants: "borlas",
// }

// // console.log(userRainbow);
// // console.log(colors);
// // console.log(selectedColors);


// function multiply(a, b) {
//  return a*b;
// }

// let resultado = multiply(2,3);

// console.log(resultado)


let selectSizeFour = document.querySelector('#four-colors');
let selectSizeSix = document.querySelector('#six-colors');
let selectSizeSixBig = document.querySelector('#six-colors-big');
let selectSizeMini = document.querySelector('#mini');
let selectWreath = document.querySelector('#wreath');
let container = document.querySelector('#marketContainer');
selectSizeFour.addEventListener('click', showFourColors)
selectSizeSix.addEventListener('click', showSixColors)
selectSizeSixBig.addEventListener('click', showSixColorsBig)
selectSizeMini.addEventListener('click', showMini)
selectWreath.addEventListener('click', showWreath)


function showFourColors() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.forEach(item => {
    item.style.display = 'none'
  })

  let selected = arrayItems.filter(item => item.classList.contains('four-colors'))
 
  selected.forEach(item => {
    item.style.display = 'flex'
  });

}

function showSixColors() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);
  console.log(marketItems)
  console.log(arrayItems)

  arrayItems.forEach(item => {
    item.style.display = 'none'
  })

  let selected = arrayItems.filter(item => item.classList.contains('six-colors'))
 
  selected.forEach(item => {
    item.style.display = 'flex'
  });

}

function showSixColorsBig() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.forEach(item => {
    item.style.display = 'none'
  })

  let selected = arrayItems.filter(item => item.classList.contains('six-colors-big'))
 
  selected.forEach(item => {
    item.style.display = 'flex'
  });

}

function showMini() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.forEach(item => {
    item.style.display = 'none'
  })

  let selected = arrayItems.filter(item => item.classList.contains('mini'))
 
  selected.forEach(item => {
    item.style.display = 'flex'
  });

}

function showWreath() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.forEach(item => {
    item.style.display = 'none'
  })

  let selected = arrayItems.filter(item => item.classList.contains('wreath'))
 
  selected.forEach(item => {
    item.style.display = 'flex'
  });

}


