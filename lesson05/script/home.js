'use strict'

let num = function() {
  let number = 0;
 number= +prompt('Во сколько это обойдется?', 12000);

   while (isNaN(number) || number === '' || number === NaN || number === 0){
    number= +prompt('Во сколько это обойдется?', 12000);
    console.log('number: ', number);
   }
   
}
num();

