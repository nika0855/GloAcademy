'use strict ';

let buttons = document.querySelectorAll('.button');
 const  content = document.querySelector('.content'),
      wrapButtons = document.querySelector('.wrapper-button'),
      addButton = document.querySelector('.add__button');

const changeText = (e) => {
    content.textContent = event.target.textContent;
};

// buttons.forEach((elem) => {
//   elem.addEventListener('click',changeText);
// });



const getButton = () => {
  const newButton = buttons[0].cloneNode();
  let textButton = buttons.length + 1;
  if(textButton < 10) {
    textButton = `0${textButton}`;
  }
  newButton.textContent = textButton;
  wrapButtons.appendChild(newButton);
  buttons = document.querySelectorAll('.button');
};

addButton.addEventListener('click', getButton);

// По тегу tagName
// wrapButtons.addEventListener('click', () => {
//   if(event.target.tagName !== 'BUTTON') {    
//     return; 
//   }
//    changeText(event);
// });
//----------------------------------------------------------
// Проверка есть ли класс button при клике
// wrapButtons.addEventListener('click', () => {
//   if(!event.target.classList.contains('button')) {
//     return; 
//   }
//    changeText(event);
// });
//----------------------------------------------------------
//Метод matches позволяет проверить удовлетворяет ли элемент указанному CSS селектору:
// button , .button, #button

wrapButtons.addEventListener('click', () => {
  if(!event.target.matches('.button')) {
    return; 
  }
   changeText(event);
});
