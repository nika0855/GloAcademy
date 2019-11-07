 'use strict';  

let money,
    start = function () {
        do {
            money = +prompt('Ваш ежемесячный доход?', 33800);
        } while (isNaN(money) || money === '' || money === null || money === 0);
    };

start();

let monthlyRequiredCosts1,
    monthlyRequiredCosts2;

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 300000,
    period: 3,
    asking: function () {

        if (confirm('Есть ли у Вас дополнительный заработок?')) {
            let itemIncome,
                cashIncome;

            do {
                itemIncome = prompt('Какой у Вас дополнительный заработок?');
            } while (itemIncome === '' || itemIncome === null || isMatch(itemIncome) === false);

            do {
                cashIncome = +prompt('Сколько вы зарабатываете на этом в месяц?');
            } while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null || cashIncome === 0);

        }

        let addExpenses;

        do {
            addExpenses = prompt('Перичислите возможные расходы через запятую');
        } while (addExpenses === '' || addExpenses === null || isMatch(addExpenses) === false);

        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let itemExpenses;
            let cashExpenses;

            do {
                itemExpenses = prompt('Введите обязательную статью расходов?');
            } while (itemExpenses === '' || itemExpenses === null || isMatch(itemExpenses) === false);

            do {
                cashExpenses = prompt('Во сколько это обойдётся?', 2500);
            } while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);

            appData.expenses[itemExpenses] = cashExpenses;
        }
    },
    getExpensesMonth: function () {
        for (let item in appData.expenses) {
            appData.expensesMonth += +appData.expenses[item];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth;
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низний уровень дохода');
        } else {
            return ('Что-то пошло не так!');
        }
    },
    getInfoDeposit: function () {
        if (appData.deposit) {

            do {
                appData.percentDeposit = +prompt('Какой годовой процент?', 10);
            } while (isNaN(appData.percentDeposit) ||
                appData.percentDeposit === '' ||
                appData.percentDeposit === null ||
                appData.percentDeposit === 0);

            do {
                appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            } while (isNaN(appData.moneyDeposit) ||
                appData.moneyDeposit === '' ||
                appData.moneyDeposit === null ||
                appData.moneyDeposit === 0);
        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    },
    budget: +money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

appData.addExpenses = appData.addExpenses.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
console.log(String(appData.addExpenses.join(',')));

