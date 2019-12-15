'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import replaceImg from './modules/replaceImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
//Timer
countTimer('30 dec 2019');
//Menu
toggleMenu();
//popup
togglePopUp();
// ТАБЫ
tabs();
// Слайдер
slider();
//Наша команда
replaceImg () ;
//калькулятор
calc(100);
// send-ajax-form
sendForm();