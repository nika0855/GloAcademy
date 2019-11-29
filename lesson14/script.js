'use strict ';

let buttons = document.querySelectorAll('.button');
 const  content = document.querySelector('.content'),
      wrapButtons = document.querySelector('.wrapper-button'),
      addButton = document.querySelector('.add__button');

const changeText = (e) => {
    console.log(e.target.textContent);
};

buttons.forEach((elem) => {
  elem.addEventListener('click',changeText);
});

// for(let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', () => {
//     changeText(buttons[i]);
//   });
// }

const getButton = () => {
  const newButton = buttons[0].cloneNode();
  let textButton = buttons.length + 1;
  if(textButton < 10) {
    textButton = `0${textButton}`;
  }
  newButton.textContent = textButton;
  newButton.addEventListener('click', changeText);
  wrapButtons.appendChild(newButton);
  buttons = document.querySelectorAll('.button');
};

addButton.addEventListener('click', getButton);

