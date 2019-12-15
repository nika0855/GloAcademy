

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
    loadMessage2 = '<img src="images/preloader.gif" alt="preloader">';

  const forms = document.querySelectorAll('form');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem';

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.target.querySelector('input[name="user_phone"]').style = '';
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      if (isValidUserPhone(body.userPhone)) {
        statusMessage.innerHTML = loadMessage2;

        postData(body, () => {
          statusMessage.textContent = successMessage;

        }, (error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
        form.reset();
      } else {
        event.target.querySelector('input[name="user_phone"]').style = 'box-shadow: 0 0 20px #f74949;';
        // statusMessage.textContent = `Поле "Номер телефона" заполненно некорректно!`;
      }
    });
  });

  const isValidUserPhone = number => {
    const pattern = /^((8|\+7))((\d{3}))[\d]{7}$/;
    return pattern.test(number);
  };

  const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        outputData();
      } else {
        errorData(request.status);
      }

    });

    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');

    request.send(JSON.stringify(body));
  };
};

export default sendForm;