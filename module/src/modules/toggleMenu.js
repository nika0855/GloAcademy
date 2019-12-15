
const toggleMenu = () => {
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
};

export default toggleMenu;