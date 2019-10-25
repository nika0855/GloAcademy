'use strict'


let justString = function (str) {
  if (typeof str !== 'string' || str === " "){
    return alert("Not a string");   
  } 
  if (str){
    return str.trim().substring(0, 30) + '...' ; 
  }
  
}

console.log(justString('     hello friends hello friends hello friends hello friends ' ));
  

// == === => !== >= <= 