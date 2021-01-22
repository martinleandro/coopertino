

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