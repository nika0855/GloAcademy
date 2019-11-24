let date = new Date();

console.log('год: ' + date.getFullYear());
console.log('месяц: ' + (date.getMonth() + 1));
console.log('День месяца: ' + date.getDate());
console.log('День недели: ' + date.getDay());
console.log('час: ' + date.getHours());
console.log('минуты: ' + date.getMinutes());
console.log('секунды: ' + date.getSeconds());
console.log('миллисекунды: ' + date.getMilliseconds());

console.log( date.toTimeString());
console.log(date.toDateString());
console.log(date.toLocaleTimeString('ru'));
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString('en'));
console.log(date.toISOString());
console.log(date.toISOString().substr(0, 10));
console.log(Date.now());
console.log(Date.parse('31 dec 2019'));