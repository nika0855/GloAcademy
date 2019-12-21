
const togglePopUp = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
      popup = document.querySelector('.popup');
      
  

callBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
    popup.style.display = 'block';
  });
});

popup.addEventListener('click', (event) => {
  let target = event.target;
  
  if(target.classList.contains('popup-close')) {
    popup.style.display = 'none';
  
  }else {
    target = target.closest('.popup-content');
    if(!target) {
      popup.style.display = 'none';
     
    }
  }
  
});

};

export default togglePopUp;
