'use strict';

let annualPlan = {
    money: 5000,
    income: 'фриланс', 
    addExpenses: [],
    deposit: true,
    mission: 1000000,
    period: 12
};
  
let start = function() {
  //  annualPlan.money = +prompt('Ваш месячный доход?', 100000);
  do{
    annualPlan.money = +prompt('Ваш месячный доход?', 100000);
  }
  while (isNaN(annualPlan.money) || annualPlan.money === "" || annualPlan.money === null) ;    
  
}
start();

let arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "car, food");

annualPlan.addExpenses = arr.split(',');

annualPlan.deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function(data) {
  console.log(data, typeof (data));
}
showTypeOf(annualPlan.money);
showTypeOf(annualPlan.income);
showTypeOf(annualPlan.deposit);

let obligatoryExpenses1 ,
 obligatoryExpenses2 ;


let getExpensesMonth = function() {
  let sum = 0;

  for(let i = 0; i < 2; i++){
    if(i === 0) {
      obligatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "кредит");
    }
    
    if(i === 1) {
      obligatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "инет");
    }
     sum += +prompt('Во сколько это обойдется?', 12000);
  
  }
  
 
  return sum;
}

let expensesAmount = getExpensesMonth();
console.log(`Расходы за месяц : ${expensesAmount}`);

let getAccumulatedMonth = function() {
  return [annualPlan.money] - expensesAmount;
}
console.log(`Накопления за период : ${getAccumulatedMonth()}`);

let getTargetMonth = function() {
  return [annualPlan.mission] / getAccumulatedMonth();
}
if(getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
}else {
  console.log(`Cрок достижения цели в месяцах : ${Math.floor(getTargetMonth())}`);
}


let budgetMonth = annualPlan.money - (expensesAmount);
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

