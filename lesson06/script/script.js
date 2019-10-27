'use strict'

let money;
let start = function() {
  //  annualPlan.money = +prompt('Ваш месячный доход?', 100000);
  do{
    money = prompt('Ваш месячный доход?', 100000);
  }
  while (isNaN(money) || money === "" || money === null) ;    
  
}
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 10,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "car, food");
      appData. addExpenses.toLowerCase().split(' ,');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
  getExpensesMonth: function() {
    let sum = 0;
  
    for(let i = 0; i < 2; i++){
      if(i === 0) {
        obligatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "кредит");
      }
      
      if(i === 1) {
        obligatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "инет");
      }
      sum += num();
    }    
  return sum;
},

  getAccumulatedMonth: function() {
    return  money - expensesAmount;
  },

  getTargetMonth:  function() {
    return [appData.mission] / appData.getAccumulatedMonth();
  },
  
  getStatusIncome: function(){
    if(budgetDay > 800) {
      return ('Высокий уровень дохода');
  }else if(budgetDay > 300 || budgetDay < 800) {
      return ('Средний уровень дохода');
  } else if(budgetDay > 0 || budgetDay < 300){
      return ('Низкий уровень дохода');
  }else {
      return ('Что то пошло не так');
  }
  },

};



let obligatoryExpenses1 ,
    obligatoryExpenses2 ;

  let num = function() {
    let number = 0;
   number= +prompt('Во сколько это обойдется?', 12000);
  
     while (isNaN(number) || number === '' || number === NaN || number === 0){
      number += +prompt('Во сколько это обойдется?', 12000);
      
     }
     return number;
  }

  let expensesAmount = appData.getExpensesMonth();
console.log(`Расходы за месяц : ${expensesAmount}`);


console.log(`Накопления за период : ${appData.getAccumulatedMonth()}`);


if(appData.getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
}else {
  console.log(`Cрок достижения цели в месяцах : ${Math.floor(appData.getTargetMonth())}`);
}


let budgetMonth = money - expensesAmount;
appData.period = appData.mission / budgetMonth;


let budgetDay = Math.floor(budgetMonth / 30);

console.log('getStatusIncome: ', appData.getStatusIncome());

