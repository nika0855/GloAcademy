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
let arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// console.log(arr);
annualPlan.addExpenses = arr.split(',');
// console.log(annualPlan.addExpenses);
annualPlan.deposit = confirm('Есть ли у вас депозит в банке?');
// console.log('annualPlan.deposit: ', annualPlan.deposit);
let showTypeOf = function(data) {
  console.log(data, typeof (data));
}
showTypeOf(annualPlan.money);
showTypeOf(annualPlan.income);
showTypeOf(annualPlan.deposit);

let obligatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
// console.log('obligatoryExpenses1: ', obligatoryExpenses1);
let howMuchIsIt1 = +prompt('Во сколько это обойдется?', 2000);
// console.log( howMuchIsIt1);
let obligatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');

let howMuchIsIt2 = +prompt('Во сколько это обойдется?', 2000);

let budgetMonth = annualPlan.money - (howMuchIsIt1 + howMuchIsIt2);
// console.log('budgetMonth: ', budgetMonth);

annualPlan.period = annualPlan.mission / budgetMonth;
// console.log('annualPlan.period: ', parseInt(annualPlan.period));

let budgetDay = Math.floor(budgetMonth / 30);
// console.log('budgetDay: ', budgetDay);

let getStatusIncome = function(){
  if(budgetDay > 800) {
    return ('Высокий уровень дохода');
}else if(budgetDay > 300 || budgetDay < 800) {
    return ('Средний уровень дохода');
} else if(budgetDay > 0 || budgetDay < 300){
    return ('Низкий уровень дохода');
}else {
    return ('Что то пошло не так');
}
}

console.log('getStatusIncome: ', getStatusIncome());

function getExpensesMonth (a, b) {
  return a + b; 
}
let sum = getExpensesMonth(howMuchIsIt1, howMuchIsIt2);
// console.log(sum);

function getAccumulatedMonth(c, d){
  return c - d;
}
let accumulatedMonth = getAccumulatedMonth([annualPlan.money], sum);
console.log('Накопления за период : ', accumulatedMonth);

function getTargetMonth(e, f) {
  return e / f
}

let numMonth = getTargetMonth([annualPlan.mission], accumulatedMonth);
console.log('Cрок достижения цели в месяцах : ', Math.floor(numMonth));
