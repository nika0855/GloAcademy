
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
    // popupBtn = document.querySelectorAll('.popup-btn'),
    button = document.querySelector('button'),
    popUp = document.querySelector('.popup'),
    count = 0;
let flyInterval ;
let flyAnimate = function() {
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  if(count < 100) {
    popupContent.style.top = count*2 + 'px';
    popUp.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }else if(count > 150){
    cancelAnimationFrame(flyInterval);
    document.body.style.overflow = 'hidden';
  }
  console.log(count);
};

let animate = false,
    popUpBtn = document.querySelectorAll('.popup-btn');
    for(let i = 0; i < popUpBtn.length; i++) {
      popUpBtn[i].addEventListener('click', () => {
        console.log('popUpBtn[i]: ', popUpBtn[i]);

  if(!animate) {
    flyInterval = requestAnimationFrame(flyAnimate);
    
  } else {
    animate = false;
    cancelAnimationFrame(flyInterval);
  }
  
});
    }
  

const togglePopUp = () => {
  const popUp = document.querySelector('.popup'),
  popUpBtn = document.querySelectorAll('.popup-btn'),   
      popUpClose = document.querySelector('.popup-close');
  // popUpBtn.forEach((elem) => {
  //   elem.addEventListener('click', () => {
  //     popUp.style.display = 'block';
  //   });
  // });
 
  // popUpClose.addEventListener('click', () => {
  //   popUp.style.display = 'none';
  //   count = 0;
  // });

  popUp.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('popup-close')) {
      popUp.style.display = 'none';
      document.body.style.overflow = '';
      count= 0;
    }else {
      target = target.closest('.popup-content');

    if(!target) {
      popUp.style.display = 'none';
      document.body.style.overflow = '';
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


