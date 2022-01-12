/*
Tutorial: https://youtu.be/JkeyKeK3V24
GitHub user: https://github.com/bradtraversy/
*/

const sliderContainer = document.querySelector(".sliderContainer");
const slideRight = document.querySelector(".rightSlide");
const slideLeft = document.querySelector(".leftSlide");
const upButton = document.querySelector(".upButton");
const downButton = document.querySelector(".downButton");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength-1)*100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if(direction === 'up'){
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1){
      activeSlideIndex = 0;
    }
  } else if(direction === 'down'){
    activeSlideIndex--;
    if(activeSlideIndex < 0){
      activeSlideIndex = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`;
}