// console.log(carousel.offsetHeight)

function setCarouselHeight() {
  const img = new Image()
  if (window.innerWidth <= 768) {
    img.src = "images/HOME-HERO-BUNDLES-MOB_3.webp"
  } else {
    img.src = "images/SPIRITEDAWAY_DESKTOP_C_3.webp";
  }
  const carousel = document.getElementById("carousel")
  aspectRatio = img.width / img.height
  carouselHeight = window.innerWidth/aspectRatio
  carousel.style.height = `${carouselHeight}px`
}

function onLoad() {
  setCarouselHeight()
}

function onResize() {
  setCarouselHeight()
}