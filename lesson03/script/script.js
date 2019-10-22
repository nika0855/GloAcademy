'use strict';

let annualPlan = {
    money: 0,
    income: 'фриланс', 
    addExpenses: [],
    deposit: true,
    mission: 1000000,
    period: 12
};

annualPlan.money = +prompt('Ваш месячный доход?', 100000);
// console.log(annualPlan.money);
let arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','3000');
// console.log(arr);
annualPlan.addExpenses = arr.split(',');
console.log(annualPlan.addExpenses);
annualPlan.deposit = confirm('Есть ли у вас депозит в банке?');
// console.log('annualPlan.deposit: ', annualPlan.deposit);
console.log(typeof annualPlan.money);
console.log(typeof annualPlan.income);
console.log(typeof annualPlan.deposit);

let obligatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
// console.log('obligatoryExpenses1: ', obligatoryExpenses1);
let howMuchIsIt1 = +prompt('Во сколько это обойдется?', 2000);
// console.log( howMuchIsIt1);
let obligatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');

let howMuchIsIt2 = +prompt('Во сколько это обойдется?', 2000);

let budgetMonth = annualPlan.money - (howMuchIsIt1 + howMuchIsIt2);
console.log('budgetMonth: ', budgetMonth);

annualPlan.period = annualPlan.mission / budgetMonth;
console.log('annualPlan.period: ', parseInt(annualPlan.period));

let budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

if(budgetDay > 800) {
    console.log('Высокий уровень дохода');
}else if(budgetDay > 300 || budgetDay < 800) {
    console.log('Средний уровень дохода');
} else if(budgetDay > 0 || budgetDay < 300){
    console.log('Низкий уровень дохода');
}else {
    console.log('Что то пошло не так');
}



