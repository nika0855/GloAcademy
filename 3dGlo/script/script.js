
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
const menu = document.querySelector('menu'),
  btnMenu = document.querySelector('.menu'),
  bodyM = document.querySelector('body'),
  closeBtn = document.querySelector('.close-btn'),
  menuItems = menu.querySelectorAll('ul>li');

  const sandwichMenu = (e) => {
    let target = e.target;
    const handlerMenu = () => {
      if(!menu.style.transform || menu.style.transform === 'translate(-100%)') {
        menu.style.transform = 'translate(0)';
      }else {
        menu.style.transform ='translate(-100%)';
      }
      // menu.classList.toggle('active-menu');
    };

    console.log('target: ', target);
    if(e.target.closest('.menu')) {
      handlerMenu();
    }
    if(e.target.classList.contains('close-btn')) {
      handlerMenu();
    }
    if(e.target.matches('li > a')) {
      handlerMenu();
    }
    
  };

  bodyM.addEventListener('click', sandwichMenu);

//popup
const togglePopUp = () => {
  const popupContent = document.querySelector('.popup-content'),
    popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn');
   let count = 0;

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';

        if(document.documentElement.clientWidth > 768) {
          let popUpAnimate;

          const addLeft = () => {
            popupContent.style.left = 10 + '%';
            count++;
            popupContent.style.left = count + '%';
            if(count < 45) {
              requestAnimationFrame(addLeft, 5);
            }else{
              cancelAnimationFrame(2000);
            }
          };
          popUpAnimate = requestAnimationFrame(addLeft);
        }
      });
    });
    popup.addEventListener('click', (event) => {
      let target = event.target;

      if(target.classList.contains('popup-close')) {
        popup.style.display = 'none';
        count = 0;
      }else {
        target = target.closest('.popup-content');
        if(!target) {
          popup.style.display = 'none';
          count = 0;
        }
      }
    });
};
  togglePopUp();

// ТАБЫ
const tabs = () => {
  const tabHeader = document.querySelector('.service-header'),
    tab = tabHeader.querySelectorAll('.service-header-tab'),
    tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++) {
        if(index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        }else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      console.log('target: ', target);
      while(target !== tabHeader) {
        
        if(target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          if(item === target) {
            toggleTabContent(i);
          }
        });
        return;
        }
        target = target.parentNode;
      }
      
    });
};

tabs();

});

// Слайдер




