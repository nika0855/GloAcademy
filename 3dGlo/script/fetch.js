"use strict";
window.addEventListener("DOMContentLoaded", () => {

	//timer

	const date = new Date();
	const year = date.getFullYear(),
		month = date.getMonth(),
		nextDay = date.getDate() + 1;

	function countTimer(dedline) {
		const timerHours = document.querySelector("#timer-hours"),
			timerMinutes = document.querySelector("#timer-minutes"),
			timerSeconds = document.querySelector("#timer-seconds");

		function getTimeRemaining() {
			const dateStop = new Date(dedline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);

			return {
				timeRemaining,
				hours,
				minutes,
				seconds
			};
		}

		function updateClock() {
			const timer = getTimeRemaining();

			if (timer.hours <= 9) {
				timer.hours = "0" + timer.hours;
			}
			if (timer.minutes <= 9) {
				timer.minutes = "0" + timer.minutes;
			}
			if (timer.seconds <= 9) {
				timer.seconds = "0" + timer.seconds;
			}

			timerHours.textContent = timer.hours;
			timerMinutes.textContent = timer.minutes;
			timerSeconds.textContent = timer.seconds;

			if (timer.timeRemaining > 0) {
				setTimeout(updateClock, 1000);
			} else {
				countTimer(new Date(year, month, nextDay));
			}
		}

		updateClock();
	}

	countTimer(new Date(year, month, nextDay));

	// menu

	{
		const menu = document.querySelector("menu");

		const handlerMenu = () => {
			if (screen.width > 768) {
				menu.classList.toggle("active-menu");
			} else {
				if (
					!menu.style.transform ||
					menu.style.transform === `translate(-100%)`
				) {
					menu.style.transform = `translate(0)`;
				} else {
					menu.style.transform = `translate(-100%)`;
				}
			}
		};

		document.body.addEventListener("click", () => {
			const target = event.target;
			if (target.closest("div .menu")) {
				handlerMenu();
			} else if (
				target.classList.contains("close-btn") ||
				target.closest(".active-menu li a")
			) {
				handlerMenu();
			} else if (
				menu.classList.contains("active-menu") &&
				!target.classList.contains("active-menu")
			) {
				handlerMenu();
			}
		});
	}
	/**
	 * smooth scrolling
	 */
	{
		const menu = document.querySelector("menu"),
			menuItems = [].slice.call(menu.querySelectorAll('a[href*="#"]')),
			main = document.querySelector("main"),
			btnServiseBlock = main.querySelector('a[href*="#"]'),
			animationTime = 500,
			framesCount = 40;

		const smoothScrolling = item => {
			const coordY =
				document.querySelector(item.getAttribute("href")).getBoundingClientRect().top + window.pageYOffset;

			const scroller = setInterval(() => {
				const scrollBy = coordY / framesCount;

				if (
					scrollBy > window.pageYOffset - coordY &&
					window.innerHeight + window.pageYOffset < document.body.offsetHeight
				) {
					window.scrollBy(0, scrollBy);
				} else {
					window.scrollTo(0, coordY);
					clearInterval(scroller);
				}
			}, animationTime / framesCount);
		};

		menuItems.forEach(item => {
			item.addEventListener("click", event => {
				event.preventDefault();

				smoothScrolling(item);
			});
		});

		btnServiseBlock.addEventListener("click", event => {
			event.preventDefault();
			smoothScrolling(btnServiseBlock);
		});
	}

	//popup

	{
		const popup = document.querySelector(".popup"),
			popupBtn = document.querySelectorAll(".popup-btn"),
			popupContent = document.querySelector(".popup-content");

		const showPopup = () => {
			popup.style.display = "block";

			if (screen.width > 768) {
				const start = Date.now();

				const draw = timePassed => {
					let wContent = +getComputedStyle(popupContent).width.split("px")[0];
					wContent = -wContent / 2 + 50 + "px";
					popupContent.style.left = timePassed / 16 + "%";
					popupContent.style.marginLeft = wContent;
				};

				const timer = setInterval(() => {
					const timePassed = Date.now() - start;
					if (timePassed >= 800) {
						clearInterval(timer);
						return;
					}

					draw(timePassed);
				});
			}
		};

		popupBtn.forEach(elem => {
			elem.addEventListener("click", showPopup);
		});

		popup.addEventListener("click", event => {
			let target = event.target;

			if (target.classList.contains("popup-close")) {
				popup.style.display = "none";
			} else {
				target = target.closest(".popup-content");
				if (!target) {
					popup.style.display = "none";
				}
			}
		});
	}

	/**
	 * tabs
	 */

	{
		const tabHeader = document.querySelector(".service-header"),
			tabs = tabHeader.querySelectorAll(".service-header-tab"),
			tabContent = document.querySelectorAll(".service-tab");

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tabs[i].classList.add("active");
					tabContent[i].classList.remove("d-none");
				} else {
					tabs[i].classList.remove("active");
					tabContent[i].classList.add("d-none");
				}
			}
		};

		tabHeader.addEventListener("click", event => {
			let target = event.target;
			target = target.closest(".service-header-tab");
			if (target) {
				tabs.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	}

	/**
	 * slider
	 */

	{
		const slides = document.querySelectorAll(".portfolio-item"),
			portfolioDots = document.querySelector(".portfolio-dots");

		const getDots = () => {
			for (let i = 0; i < slides.length; i++) {
				const newDot = document.createElement("li");
				if (i === 0) {
					newDot.classList.add("dot");
					newDot.classList.add("dot-active");
				} else {
					newDot.classList.add("dot");
				}

				portfolioDots.appendChild(newDot);
			}
		};

		getDots();

		const dot = document.querySelectorAll(".dot"),
			slider = document.querySelector(".portfolio-content");

		let currentSlide = 0,
			interval;

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {
			prevSlide(slides, currentSlide, "portfolio-item-active");
			prevSlide(dot, currentSlide, "dot-active");
			currentSlide++;
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			nextSlide(slides, currentSlide, "portfolio-item-active");
			nextSlide(dot, currentSlide, "dot-active");
		};

		const startSlide = (time = 5000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener("click", event => {
			event.preventDefault();

			const target = event.target;

			if (!target.matches(".portfolio-btn, .dot")) {
				return;
			}

			prevSlide(slides, currentSlide, "portfolio-item-active");
			prevSlide(dot, currentSlide, "dot-active");

			if (target.matches("#arrow-right")) {
				currentSlide++;
			} else if (target.matches("#arrow-left")) {
				currentSlide--;
			} else if (target.matches(".dot")) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}
			nextSlide(slides, currentSlide, "portfolio-item-active");
			nextSlide(dot, currentSlide, "dot-active");
		});

		slider.addEventListener("mouseover", event => {
			if (
				event.target.matches(".portfolio-btn") ||
				event.target.matches(".dot")
			) {
				stopSlide();
			}
		});

		slider.addEventListener("mouseout", event => {
			if (
				event.target.matches(".portfolio-btn") ||
				event.target.matches(".dot")
			) {
				startSlide();
			}
		});

		startSlide();
	}

	// Calculate
	const calc = (price = 100) => {
		const calcBlock = document.querySelector(".calc-block"),
			calcType = calcBlock.querySelector("select.calc-type"),
			totalValue = document.getElementById("total"),
			inputCalcItem = calcBlock.querySelectorAll("input.calc-item"),
			calcSquare = document.querySelector(".calc-square"),
			calcCount = document.querySelector(".calc-count"),
			calcDay = document.querySelector(".calc-day");

		// calcValid

		const calcValid = item => {
			item.addEventListener("input", () => {
				if (item.classList.contains("calc-item")) {
					item.value = item.value.replace(/[^\d.]/, "");
				}
			});
		};

		inputCalcItem.forEach(item => {
			calcValid(item);
		});

		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1,
				count = 0;

			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
				const interval = setInterval(() => {
					count += 10;
					totalValue.textContent = count;
					if (count === total) {
						clearInterval(interval);
					}
				}, 1);
			}
		};

		calcBlock.addEventListener("change", event => {
			const target = event.target;
			if (target.matches("select") || target.matches("input")) {
				countSum();
			}
		});
	};

	calc(100);

	// replace img

	{
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
	}

	// forms

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
			statusMessage.style.cssText = 'font-size: 2rem';

			let body = {};

			const postData = formData => fetch('./server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body)
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
						
						formData.forEach((val, key) => {
							body[key] = val;
						});

					inputs.forEach(item => {
						item.style = '';
					});

					form.appendChild(statusMessage);
					statusMessage.style = `font-size: 2rem; color: white`;

					statusMessage.innerHTML = loadMessage;

					const getCheckForm = checkForm(event.target);

					if (getCheckForm.length !== 0) {
						getCheckForm.forEach(elem => {
							form.querySelector(`input[name="${elem}"]`).style = 'box-shadow: 0 0 20px #f74949;';
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



});
