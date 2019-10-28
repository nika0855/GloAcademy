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
  expenses: {
    obligatoryExpenses1: number,
    obligatoryExpenses1: number
  },
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
      function expenses() {
    
    for(let i = 0; i < 2; i++){
      if(i === 0) {
        obligatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "кредит");
        number= +prompt('Во сколько это обойдется?', 12000);
      }
      
      if(i === 1) {
        obligatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "инет");
      }
     
    } 
    for(let item in appData.expenses){
      if(valid(appData.expenses[item]) === false){
          expenses();   
  
}
  expenses();
  };
  appData.asking();
   

  appData.getExpensesMonth = function () {
    for(let item in appData.expenses){
        appData.expensesMonth += appData.expenses[item];
    }
    return appData.expensesMonth;
};
appData.getExpensesMonth();

appData.getBudget = function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
};

appData.getBudget();

let getTargetMonth = function(){
    appData.period = appData.mission / appData.budgetMonth;
};

getTargetMonth();

  
  let getStatusIncome: function(){
    if(budgetDay > 800) {
      return ('Высокий уровень дохода');
  }else if(budgetDay > 300 || budgetDay < 800) {
      return ('Средний уровень дохода');
  } else if(budgetDay > 0 || budgetDay < 300){
      return ('Низкий уровень дохода');
  }else {
      return ('Что то пошло не так');
  }
  };

  getStatusIncome();
  console.log('Расходы за месяц: ' + appData.expensesMonth);
  console.log('За какой период будет достигнута цель (в месяцах) - ' + Math.ceil(appData.period));
  console.log('Уровень дохода: ' + appData.income);
  
  for(let item in appData){
      console.log("Наша программа включает в себя данные: " + item + " " + appData[item]);
  }






