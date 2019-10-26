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

let arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

annualPlan.addExpenses = arr.split(',');

annualPlan.deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function(data) {
  console.log(data, typeof (data));
}
showTypeOf(annualPlan.money);
showTypeOf(annualPlan.income);
showTypeOf(annualPlan.deposit);

let obligatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "кредит");

let howMuchIsIt1 = +prompt('Во сколько это обойдется?', 12000);

let obligatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "инет");

let howMuchIsIt2 = +prompt('Во сколько это обойдется?', 2000);

let budgetMonth = annualPlan.money - (howMuchIsIt1 + howMuchIsIt2);

let getExpensesMonth = function() {
  return howMuchIsIt1 + howMuchIsIt2;
}
console.log(`Расходы за месяц : ${getExpensesMonth()}`);

let getAccumulatedMonth = function() {
  return [annualPlan.money] - getExpensesMonth();
}
console.log(`Накопления за период : ${getAccumulatedMonth()}`);

let getTargetMonth = function() {
  return [annualPlan.mission] / getAccumulatedMonth();
}
console.log(`Cрок достижения цели в месяцах : ${Math.floor(getTargetMonth())}`);

annualPlan.period = annualPlan.mission / budgetMonth;


let budgetDay = Math.floor(budgetMonth / 30);


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

