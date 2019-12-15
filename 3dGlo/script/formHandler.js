const formHandler = () => {

	// event form

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
	};

	// send-ajax-form

	const sendForm = () => {
		const errorMessage = 'Что-то пошло не так...',
			successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
			loadMessage = '<img src="images/preloader.gif" alt="preloader">';

		const statusMessage = document.createElement('div');
		statusMessage.style.cssText = 'font-size: 2rem; color: white;';

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

				statusMessage.innerHTML = loadMessage;

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

	};

	sendForm();

};

export default formHandler;