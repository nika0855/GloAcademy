/*let str = ' Hello my Friends! ';

console.log(str.length);

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

console.log(str[2]);

console.log(str.substring(7));
console.log(str.substring(10, 16));
console.log(str.slice(7));
console.log(str.slice(-9));
console.log(str.substr(7, 10));

console.log(str.indexOf('Friends'));
console.log(str.replace('Friends', 'Word'));

console.log(str.split(' '));

 let str2 = 'apple, kivi, orange';

 console.log(str2.split(', '));
*/

let num = 266219;

let arr = num.toString().split('');
//  console.log(arr);


let sum = 1;
for(let i = 0; i < arr.length; i++){    
 sum *= arr[i] ; 
}
console.log(sum);

let cube = sum ** 3;

//  console.log(cube);

let arr2 = cube.toString().split('');


console.log(`"${arr2[0]}${arr2[1]}"`);

//multiplication.reduce()

let numbers = [2, 6, 6, 2, 1, 9];
let multiplication = numbers.reduce(muFunc);

function muFunc(total, valuo, index, arr) {
  return total * valuo;
  //total + valuo
}

console.log(`multiplication : '${ multiplication}'`);