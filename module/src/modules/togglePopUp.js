
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

export default togglePopUp;