'use strict';

let books = document.querySelector('.books');

let book = document.querySelectorAll('.book');

books.insertBefore(book[1], book[0]);
books.insertBefore(book[2], null);
books.insertBefore(book[4], book[3]);


let img = document.querySelector('body');

 img.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

 let h2 = document.querySelectorAll('h2 > a');
 
 h2[2].textContent =  "Книга 3. this и Прототипы Объектов";

 let span = document.querySelector('.adv');

 span.classList.remove('adv');
let chapter2 = document.querySelectorAll('ul')[1];

let li = chapter2.querySelectorAll('li');

chapter2.insertBefore(li[6], li[4]);
chapter2.insertBefore(li[8], li[4]); 
chapter2.insertBefore(li[2], li[10]);

let chapter4 = document.querySelectorAll('ul')[4];
let li4 = chapter4.querySelectorAll('li');


chapter4.insertBefore(li4[9], li4[2]);
chapter4.insertBefore(li4[2], li4[5]);
chapter4.insertBefore(li4[5], li4[8]);

let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
let chapter6 = document.querySelectorAll('ul')[5];
console.log('chapter6: ', chapter6);

chapter6.appendChild(newElem);
let li6 = chapter6.querySelectorAll('li');
chapter6.insertBefore(li6[10], li6[9]);


