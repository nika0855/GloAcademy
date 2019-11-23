'use strict';

class CarWash {
  constructor(brand, modal = CarWash.noCarBaseModel(), services = [] ){
    this.brand = brand;
    this.modal = modal;
    this.washed = false;
    this._services = services;
  }

  static noCarBaseModel() {
    return 'none';
  }

  washReady() {
    this.washed = true;
    CarWash.counter ++;
    this.report();
  }

  report() {
    console.log(this.brand, this.modal, this.washed);
  }

  get services() {
    console.log(this._services);
    return this._services.length > 0 ? 'Есть доп услуга' : 'Нет доп услуги';
  }

  set services(addServices) {
    return this._services.push(addServices);
  }
  
}

class PassCar extends CarWash {

}

const car1 = new CarWash('mazda', 3 , ['black tires', 'wax']);
const car2 = new PassCar('BMW', 6);
const car3 = new CarWash('Honda', 4);
const car4 = new CarWash('ZAZ');

car1.services = 'Протирка стекол';
CarWash.counter = 0;

car1.washReady();
car2.washReady();
car3.washReady();
car4.washReady();
console.log(car1);

console.log(car2);
