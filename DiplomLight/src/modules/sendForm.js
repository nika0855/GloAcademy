
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
     
      if (itemAttrName === "user_phone") {
        target.value = target.value.replace(/[^0-9+]/, "");
      }
    }
  } else if (event.type === 'submit') {
    checkForm(form);
  }
};
//ajax - form

const sendForm = () => {
  const errorMessage = 'Ошибка',
  successMessage = 'Отправлено',
  loadMessage = 'Загрузка';

 const forms = document.querySelectorAll('form');

  const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';

    forms.forEach(form => {

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.append(statusMessage);

      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        statusMessage.textContent = loadMessage;

        if(request.readyState !== 4) {
          return;
        }

        if(request.status === 200) {
          statusMessage.textContent = successMessage;
        }else {
          statusMessage.textContent = errorMessage;
        }
      });
      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'application/json');
      let formData = new FormData(form);
      let body = {};

      for (let val of formData.entries()) {
        body[val[0]] = val[1];
      }
      
      request.send(JSON.stringify(body));
       
        });
   
});
};
export default sendForm;