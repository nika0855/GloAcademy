
window.addEventListener('DOMContentLoaded', () => {
'use strict';
//Timer
  function countTimer(deadline) {
    let timerHourse = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor(timeRemaining / 60) % 60,
        hours = Math.floor((timeRemaining / 60 / 60) % 24),
        days = Math.floor(timeRemaining / 60 / 60 / 24);
        return {timeRemaining, hours, minutes, seconds};   
    }

      function updateClock() {
        let timer = getTimeRemaining();

        timerHourse.textContent = (`0${timer.hours}`).slice(-2);
        timerMinutes.textContent = (`0${timer.minutes}`).slice(-2);
        timerSeconds.textContent = (`0${timer.seconds}`).slice(-2);

        if(timer.timeRemaining > 0) {
          setTimeout(updateClock, 1000);
        }else if(timer.timeRemaining < 0){
          
        timerHourse.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';

        }
        
      }
      
      updateClock();
  }
    
    setInterval(countTimer, 1000, '27 nov 2019');

//Menu
const toggleMenu = () => {

  const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

  const handlerMenu = () => {
    if(!menu.style.transform || menu.style.transform === 'translate(-100%)') {
      menu.style.transform = 'translate(0)';
    }else {
      menu.style.transform ='translate(-100%)';
    }
    // menu.classList.toggle('active-menu');
  };

  btnMenu.addEventListener('click', handlerMenu);
  closeBtn.addEventListener('click', handlerMenu);
  // for(let i = 0; i < menuItems.length; i++) {
  //   menuItems[i].addEventListener('click', handlerMenu);
  // }
  menuItems.forEach((elem) => {
    elem.addEventListener('click', handlerMenu);
  });
};

toggleMenu();

//popup

let popupContent = document.querySelector('.popup-content'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popup = document.querySelector('.popup'),
    count = 0;
let flyInterval ;
let flyAimate = function() {
  flyInterval = requestAnimationFrame(flyAimate);
  count++;
  if(count < 100) {
    popupContent.style.top = count*2 + 'px';
    popup.style.display = 'block';
  }else if(count > 300){
    cancelAnimationFrame(flyInterval);
  }
  console.log(count);
};

flyInterval = requestAnimationFrame(flyAimate);

const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
      // popupBtn = document.querySelectorAll('.popup-btn'),   
      popUpClose = document.querySelector('.popup-close');

  

  popUpClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};

togglePopUp();

});


