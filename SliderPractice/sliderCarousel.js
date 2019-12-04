'use strict';

class SliderCarousel{
  constructor({main, wrap}) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
  }

  init() {
    console.log(this.slides);
  }
}