window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  //Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),//конечная дата     
        dateNow = new Date().getTime(),//текущая дата
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      return {hours, minutes, seconds, timeRemaining};  
    }
     function updateClock() {
       let timer = getTimeRemaining();

      timerHours.textContent = (`0${timer.hours}`).slice(-2);
      timerMinutes.textContent = (`0${timer.minutes}`).slice(-2);
      timerSeconds.textContent = (`0${timer.seconds}`).slice(-2);

      if(timer.timeRemaining > 0) {      
        setTimeout(updateClock, 1000);   
      } 
     }
      updateClock();  
  }
  countTimer('19 nov 2019');
  
}) ;

// hours = Math.floor(timeRemaining / 60 / 60) %24, - для days
      // days = Math.floor((timeRemaining / 60 / 60) / 24);
