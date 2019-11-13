'use strict';

class DomElement {
  constructor(selector, height, width, background, fontSize) {
    this.selector = selector;
    this.height =height;
    this.width = width;
    this.bg = background;
    this.fontSize = fontSize;
  
  this.newElem = function() {
    let newElement,
    selector; 
    if(this.selector[0] == '.'){
      newElement = document.createElement('div');
      newElement.setAttribute('class', 'block');
      newElement.style = `height: ${this.height};
                width: ${this.width};
                background: ${this.bg};
                font-size: ${this.fontSize};`;
     
    }else if(selector == '#'){
      newElement = document.createElement('p');
      newElement.setAttribute('id', 'best');
     
    }
  };
  point() {
    let point;
    point = document.createElement('div');
     point.style.cssText = `height: 50px;
     width: 50px;
     background: red;
     font-size: 16px;
     `;

  }
}
}

let blok = new DomElement('.block',"50px", '50px', 'red','16px');
console.log('blok: ', blok);

blok.point();
console.log(blok);
 blok.newElem();
 console.log(blok);