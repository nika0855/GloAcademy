'use strict';

const string = `Привет друг, добро пожаловать, прошу проходите
мой номер телефона 8-999-123-45-67`;

const string2 = `Hello friend, welcome, please come through`;

const result = string.match(/\d/gi);
const result2 = string2.match(/[a-z]/gi);

console.log(result);
console.log(result2);