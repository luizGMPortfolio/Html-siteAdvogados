
function Rehome() {
  location.href = 'index.html'
}
function ReGaleria() {
  location.href = 'galeria.html'
}
function ReInscri() {
  location.href = 'inscrição.html'
}
function ReApoiar() {
  location.href = 'apoiar.html'
}


function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  return result;
}

function setUpCarousel(carousel) {
  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    carousel.style.setProperty('--current-slide', slideNumber);
  }

  // get elements
  const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
  const buttonNext = carousel.querySelector('[data-carousel-button-next]');
  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

  // carousel state we need to remember
  let currentSlide = 0;
  const numSlides = slidesContainer.children.length;

  // set up events
  buttonPrevious.addEventListener('click', handlePrevious);
  buttonNext.addEventListener('click', handleNext);
}

const carouseis = document.querySelectorAll('[data-carousel]');
carouseis.forEach(setUpCarousel);
class Carousel {
  constructor(carousel) {
    // find elements
    this.carousel = carousel;
    this.buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    this.buttonNext = carousel.querySelector('[data-carousel-button-next]');
    this.slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

    // state
    this.currentSlide = 0;
    this.numSlides = this.slidesContainer.children.length;

    // add events
    this.buttonPrevious.addEventListener('click', this.handlePrevious.bind(this));
    this.buttonNext.addEventListener('click', this.handleNext.bind(this));
  }

  handleNext() {
    this.currentSlide = modulo(this.currentSlide + 1, this.numSlides);
    this.carousel.style.setProperty('--current-slide', this.currentSlide);
  }

  handlePrevious() {
    this.currentSlide = modulo(this.currentSlide - 1, this.numSlides);
    this.carousel.style.setProperty('--current-slide', this.currentSlide);
  }
}


carouseis.forEach(carousel => new Carousel(carousel));






/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu() {
  var x = document.getElementById("body");

  let html = `    <nav class="menu-bar" id="bar">
  <ul class="list-bar">
      <label for="checkbox_toggle" class="hamburger1" onclick="menuFecha()">&#9776;</label>
      <li  onclick="Rehome()" class="l1">Home</li>
      <li  onclick="ReGaleria()" class="l2">Galeria</li>
      <li  onclick="ReInscri()" class="l3">Incrições</li>
      <li  onclick="ReApoiar()" class="l4">Apoiar</li>
  </ul>
</nav>`

  x.innerHTML += html

}
function menuFecha() {
  document.getElementById('bar').remove()
}





