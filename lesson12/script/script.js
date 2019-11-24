'use strict';


setTimeout(() => {
  console.log('Сообщение в консоль');
}, 3000);

// let count = 0;
// let idInterval = setInterval(() => {
//   count++;
//   console.log('Отсчет пошел:' + count);
// }, 2000);

setTimeout(() => {
  clearInterval(idInterval);
}, 10000);

let getMessage = (name) => {
  console.log(`Прювет ${name}!`);
};

let count = 0;
let idInterval = setInterval(getMessage, 2000, 'Vasilui');
  
  
let idTimeout = setTimeout(getMessage, 5000 , 'Ivan');

