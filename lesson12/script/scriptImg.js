
let worm = document.querySelector('.worm'),
    airplane = document.querySelector('.airplane'),
    button = document.querySelector('.button'),
    count = 0;
//setTimeout
/*let wormDown = function() {
  count++;
  worm.style.top = count + 'px';
  worm.style.left = count + 'px';
  airplane.style.left = count + 'px';
  if(count < 400) {
    setTimeout(wormDown, 50);
  }
};

setTimeout(wormDown, 50);
*/
//setInterval
/*let wormDown = function() {
  count++;
  if(count < 400) {
    worm.style.top = count + 'px';
    worm.style.left = count + 'px';
    airplane.style.left = count*2 + 'px';
  }else if(count < 700) {
    airplane.style.left = count*2 + 'px';
  }else {
    clearInterval(idInterval);
  }
  console.log(count);
};

let idInterval = setInterval(wormDown, 50);
*/

//requestAnimationFrame

let flyInterval;

let flyAnimate = function() {
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  if(count < 400) {
    worm.style.top = count + 'px';
    worm.style.left = count + 'px';
    airplane.style.left = count*2 + 'px';
  }else if(count < 700) {
    airplane.style.left = count*2 + 'px';
  }else {
    cancelAnimationFrame(flyInterval);
  }
  
};
let animate = false;
button.addEventListener('click', () => {
  if(animate) {
    flyInterval = requestAnimationFrame(flyAnimate);
    animate = false;
  } else {
    animate = true;
    cancelAnimationFrame(flyInterval);
  }
  
});
