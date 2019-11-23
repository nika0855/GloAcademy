'use strict';

const car = {
  brand: 'mazda',
  model: 3,
  year: 2015,
  get fullTitle() {
        return `${this.brand} ${this.model}`;
      },
       set fullTitle(val) {
        this.brand = val;
      }
};

// mazda['color'] = 'blue';
// mazda.color = 'blue';

// Object.defineProperty(mazda, 'color', {
//   value: 'blue',
//   writable: true,
//   configurable: true,
//   enumerable: true
// })

// Object.defineProperty(car, 'fullTitle', {

//   get: function() {
//     return this.brand + ' ' + this.model;
//   },
//   set: function(val) {
//     this.brand = val;
//   }
// } );

car.fullTitle = 'BMW';
console.log(car.fullTitle);