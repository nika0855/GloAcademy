window.addEventListener('DOMContentLoaded', function() {

  'use strict';

const timesDay = document.querySelector('#times-day'),
    today = document.querySelector('#today'),
    currentTime = document.querySelector('#current-time'),
    newYear = document.querySelector('#new-year'),
    week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
    function getTimeRemaining() {
        let date = new Date(),
            dateStop = new Date(2020, 0, 1).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60) % 24,
            day = Math.floor(timeRemaining / 60 / 60 / 24),

            timeToString = date.toLocaleTimeString('en');

        return { timeRemaining,hours,minutes,seconds,timeToString,day,date };
 
    }

function output(){
    let timer = getTimeRemaining();
    let date = new Date();
    
    if (date.getHours() <= 23 && date.getHours() <= 6) {
        timesDay.textContent = `Доброй ночи!`;
    } else if (date.getHours() >= 6 && date.getHours() <= 12) {
        timesDay.textContent = `Доброе утро!`;
    } else if (date.getHours() >= 12 && date.getHours() <= 18) {
        timesDay.textContent = `Добрый день!`;
    } else if (date.getHours() >= 18 && date.getHours() <=22) {
        timesDay.textContent = `Добрый вечер!`;
    }

    today.textContent = 'Сегодня: ' + week[timer.date.getDay()];

    function currentDateAndTime(){
         timer = getTimeRemaining();
       currentTime.style.color = 'red';
        currentTime.textContent = `Текущее время: ${timer.timeToString}`;
        setInterval(currentDateAndTime, 1000);    
    }
    currentDateAndTime();

    if(timer.timeRemaining > 0){
       
        newYear.textContent = `До Нового года осталось ${timer.day} дней`;
       
    } else{
        newYear.textContent = 'С Новым годом!';
    }    
    
}

output();
});