const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderItems = document.querySelectorAll(".slider-item");
let currentIndex = 0;

function updateSliderPosition() {
  const offset = -currentIndex * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  updateSliderPosition();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  updateSliderPosition();
});