
window.addEventListener('DOMContentLoaded', () => {
'use strict';
//Timer
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

        }
        
      }
      
      updateClock();
  }
    
    setInterval(countTimer, 1000, '31 dec 2019');

//Menu
const menu = document.querySelector('menu'),
  btnMenu = document.querySelector('.menu'),
  bodyM = document.querySelector('body'),
  closeBtn = document.querySelector('.close-btn'),
  menuItems = menu.querySelectorAll('ul>li');

  const sandwichMenu = (e) => {
    let target = e.target;
    const handlerMenu = () => {
      if(!menu.style.transform || menu.style.transform === 'translate(-100%)') {
        menu.style.transform = 'translate(0)';
      }else {
        menu.style.transform ='translate(-100%)';
      }
      // menu.classList.toggle('active-menu');
    };

    
    if(e.target.closest('.menu')) {
      handlerMenu();
    }
    if(e.target.classList.contains('close-btn')) {
      handlerMenu();
    }
    if(e.target.matches('li > a')) {
      handlerMenu();
    }
    
  };

  bodyM.addEventListener('click', sandwichMenu);

//popup
const togglePopUp = () => {
  const popupContent = document.querySelector('.popup-content'),
    popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn');
   let count = 0;

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';

        if(document.documentElement.clientWidth > 768) {
          let popUpAnimate;

          const addLeft = () => {
            popupContent.style.left = 10 + '%';
            count++;
            popupContent.style.left = count + '%';
            if(count < 45) {
              requestAnimationFrame(addLeft, 5);
            }else{
              cancelAnimationFrame(2000);
            }
          };
          popUpAnimate = requestAnimationFrame(addLeft);
        }
      });
    });
    popup.addEventListener('click', (event) => {
      let target = event.target;

      if(target.classList.contains('popup-close')) {
        popup.style.display = 'none';
        count = 0;
      }else {
        target = target.closest('.popup-content');
        if(!target) {
          popup.style.display = 'none';
          count = 0;
        }
      }
    });
};
  togglePopUp();

// ТАБЫ
const tabs = () => {
  const tabHeader = document.querySelector('.service-header'),
    tab = tabHeader.querySelectorAll('.service-header-tab'),
    tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++) {
        if(index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        }else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      
      while(target !== tabHeader) {
        
        if(target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          if(item === target) {
            toggleTabContent(i);
          }
        });
        return;
        }
        target = target.parentNode;
      }
      
    });
};

tabs();

// Слайдер

const slider = () => {
  
  const slides = document.querySelectorAll('.portfolio-item'),
  portfolioDots = document.querySelector('.portfolio-dots');

const addDots = () => {
  for (let i = 0; i < slides.length; i++) {
      let newDot = document.createElement('li');
      if (i === 0) {
          newDot.classList.add('dot');
          newDot.classList.add('dot-active');
      } else {
          newDot.classList.add('dot');
      }

      portfolioDots.append(newDot);
  }
};

addDots();

const dot = document.querySelectorAll('.dot'),
  slider = document.querySelector('.portfolio-content');

let currentSlide = 0,
  interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
 
  const autoPlaySlide = () => {

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    
    prevSlide(dot, currentSlide, 'dot-active');
    
    currentSlide++;
    if(currentSlide >= slides.length){
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
   interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;
    if(!target.matches('.portfolio-btn, .dot')){
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if(target.matches('#arrow-right')){
      currentSlide++;
    }else if(target.matches('#arrow-left')) {
      currentSlide--;
    }else if(target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if(elem === target) {
          currentSlide = index;
        }
      });
    }

    if(currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if(currentSlide < 0) {
      currentSlide = slides.length -1;
    }
    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
    
  });

  slider.addEventListener('mouseover', (e) => {
    if(e.target.matches('.portfolio-btn') ||
    e.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (e) => {
    if(e.target.matches('.portfolio-btn') ||
    e.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(1500);


};

slider();

//Наша команда

const replaceImg = () => {
  const allImg = document.querySelectorAll("img[data-img]");
  let src;
  allImg.forEach(item => {
      item.addEventListener("mouseover", event => {
          src = event.target.getAttribute("src");
          event.target.src = event.target.dataset.img;
      });
      item.addEventListener("mouseout", event => {
          event.target.src = src;
      });
  });
};
replaceImg () ;

//регулярка

const validation = (item) => {
  let itemAttrName = item.getAttribute('name');
  item.addEventListener('input', () => {
   
    if (item.classList.contains('calc-item')) {
      item.value = item.value.replace(/[^\d.]/, '');
    }
    if (itemAttrName === 'user_name' || itemAttrName === 'user_message') {
      item.value = item.value.replace(/[^А-Яа-яЁё\s]/, '');
    }
    if (itemAttrName === 'user_phone') {
      item.value = item.value.replace(/[^0-9+]/, '');
    }
  });
};

//калькулятор

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcCount = document.querySelector('.calc-count'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;

      const typeValue = calcType.options[calcType.selectedIndex].value,
           squareValue = +calcSquare.value;

      if(calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if(calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      }else if(calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
           
      if(typeValue && squareValue) {
         total = price * typeValue * squareValue * countValue * dayValue;    
      }      

      totalValue.textContent = total;
    };

  calcBlock.addEventListener('change', (e) => {
    const target = e.target;

  //   if(target === calcType || target === calcSquare ||
  //     target === calcDay || target === calcCount) {
  //       console.log(2);
  //     }
  // });
  if(target.matches('select') || target.matches('input')) {
    countSum();
  }

});
};
calc(100);

//--------------------
const checkForm = form => {
  const valid = [];
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      valid.push(input.name);
    }
  });
  return valid;
};

const formEvent = (form, event) => {
  const target = event.target;

  if (event.type === 'input') {
    if (target.matches('input')) {
      const itemAttrName = target.getAttribute('name');
      if (itemAttrName === "user_name" || itemAttrName === "user_message") {
        target.value = target.value.replace(/[^А-Яа-яёЁ\s]/, "");
      }
      if (itemAttrName === "user_email") {
        target.value = target.value.replace(/[А-Яа-яёЁ\s]/, "");
      }
      if (itemAttrName === "user_phone") {
        target.value = target.value.replace(/[^0-9+]/, "");
      }
    }
  } else if (event.type === 'submit') {
    checkForm(form);
  }

// send-ajax-form
const sendForm = () => {

  const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
        imgMessage = '<img src="images/preloader.gif" alt="preloader">'; 

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem; margin: 1rem 0;';

  const postData = formData => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData
  });

  const hideMessage = () => {
    setTimeout(() => {
      statusMessage.textContent = '';
    }, 5000);
  };

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {

    form.addEventListener('submit', event => {
      event.preventDefault();
      const target = event.target,
        inputs = target.querySelectorAll('input'),
        formData = new FormData(form);

      inputs.forEach(item => {
        item.removeAttribute('style');
      });

      form.appendChild(statusMessage);

      statusMessage.innerHTML = imgMessage;

      const getCheckForm = checkForm(event.target);

      if (getCheckForm.length !== 0) {
        getCheckForm.forEach(elem => {
          form.querySelector(`input[name="${elem}"]`).style.boxShadow = '0 0 20px #f74949';
          statusMessage.textContent = 'Форма заполненна некорректно!';
        });
      } else {
        postData(formData)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('status network not 200');
            }
            form.reset();
            statusMessage.textContent = successMessage;
            hideMessage();
          })
          .catch(error => {
            statusMessage.textContent = errorMessage;
            hideMessage();
            console.error(error);
          });
      }

      clearTimeout(hideMessage);

    });

    form.addEventListener('input', event => {
      formEvent(form, event);
    });
  });
  sendForm();
};

};
//   for(let i = 0; i < form.length; i++) {
    
//     form[i].addEventListener('submit', function(e) {
//       e.preventDefault();
//       //  form.appendChild(statusMessage);
//      console.log(form[i]);   
//       let formData = new FormData(this);
//       formData = Object.fromEntries(formData);

      
//       postData(formData);
//       // this.reset();
//   });
    
// }  
      
    
//       statusMessage.textContent = loadMessage;
    
    
      // postData(formData)
      // .then((response) => {
      //   if(response.status !== 200) {
      //       throw new Error('status network not 200');
      //   }
      //   console.log(response);
      //   statusMessage.textContent = successMessage;
      // })
      // .catch((error) => {
      //   statusMessage.textContent = errorMessage;
      //   console.error(error);
      // });
    // });

  //   const postData = (formData) => {
  //      fetch('./server.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     })
  //     .then((response) => {
  //       if(response.status !== 200) {
  //           throw new Error('status network not 200');
  //       }
  //       console.log(response);
  //       statusMessage.textContent = successMessage;
  //     })
  //     .catch((error) => {
  //       statusMessage.textContent = errorMessage;
  //       console.error(error);
  //     });
  // };


// const isValidUserPhone = number => {
  //   const pattern = /^((8|\+7))((\d{3}))[\d]{7}$/;
  //   return pattern.test(number);
  // };

});