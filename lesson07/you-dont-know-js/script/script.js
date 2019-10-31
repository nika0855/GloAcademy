'use strict';

let books = document.querySelector('.books');
console.log('books: ', books);
let book = document.querySelectorAll('.book');
console.log('book: ', book);
books.insertBefore(book[1], book[0]);
books.insertBefore(book[2], null);
books.insertBefore(book[4], book[3]);
console.log('books: ', books);

let img = document.querySelector('body');
console.log('img: ', img);
 img.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

 let h2 = document.querySelectorAll('h2 > a');
 console.log('h2: ', h2);
 h2[2].textContent =  "Книга 3. this и Прототипы Объектов";

 let span = document.querySelector('.adv');
 console.log('span: ', span);
 span.classList.remove('adv');
let chapter = document.querySelectorAll('ul')[1];
console.log('chapter: ', chapter);
let li = chapter.querySelectorAll('li');


chapter.insertBefore(li[6], li[4]);
chapter.insertBefore(li[8], li[4]); 
chapter.insertBefore(li[2], li[10]);





