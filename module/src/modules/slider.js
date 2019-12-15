

const slider = () => {
  
  const slides = document.querySelectorAll('.portfolio-item'),
  portfolioDots = document.querySelector('.portfolio-dots');

const addDots = () => {
  for (let i = 0; i < slides.length; i++) {
      let newDot = document.createElement('li');
      if (i === 0) {
          newDot.classList.add('dot');
          newDot.classList.add('dot-active');
      } else {
          newDot.classList.add('dot');
      }

      portfolioDots.append(newDot);
  }
};

addDots();

const dot = document.querySelectorAll('.dot'),
  slider = document.querySelector('.portfolio-content');

let currentSlide = 0,
  interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
 
  const autoPlaySlide = () => {

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    
    prevSlide(dot, currentSlide, 'dot-active');
    
    currentSlide++;
    if(currentSlide >= slides.length){
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
   interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;
    if(!target.matches('.portfolio-btn, .dot')){
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if(target.matches('#arrow-right')){
      currentSlide++;
    }else if(target.matches('#arrow-left')) {
      currentSlide--;
    }else if(target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if(elem === target) {
          currentSlide = index;
        }
      });
    }

    if(currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if(currentSlide < 0) {
      currentSlide = slides.length -1;
    }
    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
    
  });

  slider.addEventListener('mouseover', (e) => {
    if(e.target.matches('.portfolio-btn') ||
    e.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (e) => {
    if(e.target.matches('.portfolio-btn') ||
    e.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(1500);


};

export default slider;