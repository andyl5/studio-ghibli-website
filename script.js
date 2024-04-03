// console.log(carousel.offsetHeight)

function setCarouselHeight() {
  const img = new Image()
  img.src = "images/SPIRITEDAWAY_DESKTOP_C_3.webp";
  const carousel = document.getElementById("carousel")
  aspectRatio = img.width / img.height
  console.log('ratio', aspectRatio)
  console.log(window.innerWidth)
  carouselHeight = window.innerWidth/aspectRatio
  console.log(carouselHeight)
  carousel.style.height = `${carouselHeight}px`
}

function onLoad() {
  setCarouselHeight()
}

function onResize() {
  setCarouselHeight()
}

const carouselOptions = {
  
}