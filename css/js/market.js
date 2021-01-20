

// MARKET

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
    item.style.display = "none"
  })

  let selected = arrayItems.filter(item => item.classList.contains('four-colors'))
 
  selected.forEach(item => {
    $(item).fadeIn()
  });

}

function showSixColors() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);
  console.log(marketItems)
  console.log(arrayItems)

  arrayItems.forEach(item => {
    item.style.display = "none"
  })

  let selected = arrayItems.filter(item => item.classList.contains('six-colors'))
 
  selected.forEach(item => {
    $(item).fadeIn()
  });

}

function showSixColorsBig() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.forEach(item => {
    item.style.display = "none"
  })

  let selected = arrayItems.filter(item => item.classList.contains('six-colors-big'))
 
  selected.forEach(item => {
    $(item).fadeIn()
  });

}

function showMini() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.forEach(item => {
    $(item).css("display", "none")
  })

  let selected = arrayItems.filter(item => item.classList.contains('mini'))
 
  selected.forEach(item => {
    $(item).fadeIn()
  });

}

function showWreath() {

  let marketItems = document.querySelectorAll('.market-items')
  let arrayItems = Array.from(marketItems);

  arrayItems.forEach(item => {
    $(item).css("display", "none")
  })

  let selected = arrayItems.filter(item => item.classList.contains('wreath'))
 
  selected.forEach(item => {
    $(item).fadeIn()
  });

}

// FIN MARKET