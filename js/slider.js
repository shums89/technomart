const slider = document.querySelector('.pre-catalog-slider');
const prevBtn = slider.querySelector('.btn-prev');
const nextBtn = slider.querySelector('.btn-next');
const container = slider.querySelector('.container');
const slideList = slider.querySelector('.pre-catalog-slider__list');
const slides = slideList.querySelectorAll('li');
const slidesCount = slideList.querySelectorAll('li').length;
const controls = slider.querySelector('.pre-catalog-slider__controls').querySelectorAll('button');

prevBtn.addEventListener('click', () => {
  changeSlide('prev');
});

nextBtn.addEventListener('click', () => {
  changeSlide('next');
});

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    setCurrentSlide(index);
  });
});

function changeSlide(direction) {
  let activeSlideIndex = getCurrentControl();

  if (direction === 'next') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'prev') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  setCurrentSlide(activeSlideIndex);
}

function setCurrentSlide(index) {
  clearCurrentSlide();
  clearCurrentControl();

  slides[index].classList.add('pre-catalog-slider__item--current');
  controls[index].classList.add('pre-catalog-slider__control--current');

  if (slides[index].classList.contains('perforators')) {
    slider.classList.remove('pre-catalog-drills');
    slider.classList.add('pre-catalog-perforators');
  } else if (slides[index].classList.contains('drills')) {
    slider.classList.remove('pre-catalog-perforators');
    slider.classList.add('pre-catalog-drills');
  }
}

function clearCurrentSlide() {
  slides.forEach(slide => {
    slide.classList.remove('pre-catalog-slider__item--current');
  });
}

function getCurrentControl() {
  let activeSlideIndex = 0;

  controls.forEach((control, index) => {
    if (control.classList.contains('pre-catalog-slider__control--current')) {
      activeSlideIndex = index;
    }
  });

  return activeSlideIndex;
}

function clearCurrentControl() {
  controls.forEach(control => {
    control.classList.remove('pre-catalog-slider__control--current');
  });
}

