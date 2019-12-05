'use strict';

class SliderCarousel{
  constructor({
    main,
     wrap,
     next,
     prev,
     infinity = false,
     slidesToShow = 3,
      position = 0,
    }) {
      if(!main || !wrap) {
        console.warn('slider-carusel: Необходимо 2 свойства "main" и "wrap"');
      }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow)
    };
    
  }

  init() {

    this.addGloClass();
    this.addStyle();

    if(this.prev && this.next) {
      this.controlSlider();
    }else {
      this.addArrow();
      this.controlSlider();
    }
  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for(const item of this.slides) {
      item.classList.add('glo-slider__item');

    }
  }

  addStyle(){
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';
    style.textContent = `
        .glo-slider {
          overflow: hidden;
        }
        .glo-slider__wrap {
          display: flex;
          transition: transform .5s;
          will-change :transform;
        }
        .glo-slider__item {
          flex: 0 0 ${this.options.widthSlide}%;
          
           margin: auto 0 !important;
        }
    `

    document.head.append(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider);
    this.next.addEventListener('click', this.nextSlider);
  }

  prevSlider = () => {
    if(this.options.infinity || this.options.position > 0) {
    --this.options.position;
    console.log(this.options.position);
    if(this.options.position < 0) {
      this.options.position = this.slides.length - this.slidesToShow;
    }
    this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    }
  }


  nextSlider = () => {
    if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
    ++this.options.position;
    console.log(this.options.position);
    if(this.options.position > this.slides.length - this.slidesToShow) {
      this.options.position = 0;
    }
    this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    }
  }

  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__pref';
    this.next.className = 'glo-slider__next';

    this.main.append(this.prev);
    this.main.append(this.next);

    const style = document.createElement('style');
    style.textContent = `
      .glo-slider__pref,
      .glo-slider__next {
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
      }
      .glo-slider__next {
        border-left-color: #19b5fe;
      }
      .glo-slider__pref {
        border-right-color: #19b5fe;
      }

      .glo-slider__pref:hover,
      .glo-slider__next:hover,
      .glo-slider__pref:focus,
      .glo-slider__next:focus {
        background: transparent;
        outline: transparent;
      }
    `;

    document.head.append(style);
    
  }
}