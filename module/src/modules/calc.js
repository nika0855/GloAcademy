

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

export default calc;