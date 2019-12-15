

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
      hours = Math.floor((timeRemaining / 60 / 60) );
      // days = Math.floor(timeRemaining / 60 / 60 / 24);
      return {timeRemaining, hours, minutes, seconds};   
  }

    function updateClock() {
      let timer = getTimeRemaining();

      timerHourse.textContent = (`0${timer.hours}`).slice(-3);
      timerMinutes.textContent = (`0${timer.minutes}`).slice(-2);
      timerSeconds.textContent = (`0${timer.seconds}`).slice(-2);

      if(timer.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
      }else if(timer.timeRemaining < 0){
        
      timerHourse.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';

      }else{
        countTimer(new Date());
      }
      
    }
    
    updateClock();
}
// setInterval(countTimer, 1000, '31 dec 2019');

export default countTimer;