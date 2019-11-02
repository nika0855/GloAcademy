'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonth = document.querySelector('.budget_month-value'),
    budgetDay = document.querySelector('.budget_day-value'),
    expensesMonth = document.querySelector('.expenses_month-value'),
    additionalInCome = document.querySelector('.additional_income-value'),
    additionalExpenses = document.querySelector('.additional_expenses-value'),
    incomePeriod = document.querySelector('.income_period-value'),
    targetMonth = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    additionalIncome1 = document.querySelector('.additional_income-item'),
    additionalIncome2 = document.querySelector('.additional_income-item'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositCalc = document.querySelector('.deposit-calc'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');


    const isNum = function(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    
    let appData = {
      income: {},
      addIncome: [],
      expenses: {}, 
      addExpenses: [],
      deposit: false,
      mission: 500000,
      period: 10,
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      start: function() {
        
        if(salaryAmount.value === '') {
          alert('Ошибка, поле"Месячный доход" должно быть заполнено!');
          return;
        }

        appData.budget = salaryAmount.value;
        console.log('salaryAmount.value: ', salaryAmount.value);
        appData.getExpenses();

        // appData.asking(); 
        // appData.getExpensesMonth();
        // appData.getBudget();
        
      },
      addExpensesBlock: function() {
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
          expensesPlus.style.display = 'none';
        }
      },

      getExpenses: function() {
        expensesItems.forEach(function(item) {
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !== "") {
           appData.expenses[itemExpenses] = cashExpenses;
         }
        });
      },
      asking: function(){
        let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "car, food");
           addExpenses.toLowerCase().split(' ,');
          appData.deposit = confirm('Есть ли у вас депозит в банке?');
          function expenses() {
        
        for(let i = 0; i < 2; i++){
          
           let ask = prompt('Какие обязательные ежемесячные расходы у вас есть?', "кредит");
           let askTwo = +prompt('Во сколько это обойдется?', 12000);
           if(isNum(askTwo)){
             appData.expenses[ask] = askTwo;
           }else {
             i -= 1;
            
          }
         
        } 
        for(let item in appData.expenses){
          if(isNum(appData.expenses[item]) === false){
              expenses();   
    }
        }
      }
      expenses();
      }
          
      };

      start.addEventListener('click', appData.start);

      expensesPlus.addEventListener('click', appData.addExpensesBlock);
    
      let getExpensesMonth = function () {
        for(let item in appData.expenses){
            appData.expensesMonth += appData.expenses[item];
        }
        return appData.expensesMonth;
    };
      
    
    appData.getBudget = function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    };
    
   
    
    let getTargetMonth = function(){
        appData.period = appData.mission / appData.budgetMonth;
    };
    
    getTargetMonth();
    
      
      let getStatusIncome = function(){
        if(appData.budgetDay > 800) {
          return ('Высокий уровень дохода');
      }else if(appData.budgetDay > 300 || appData.budgetDay < 800) {
          return ('Средний уровень дохода');
      } else if(appData.budgetDay > 0 || appData.budgetDay < 300){
          return ('Низкий уровень дохода');
      }else {
          return ('Что то пошло не так');
      }
      };
    
      getStatusIncome();
      console.log('Расходы за месяц: ' + appData.expensesMonth);
      console.log('За какой период будет достигнута цель (в месяцах) - ' + Math.ceil(appData.period));
      console.log('Уровень дохода: ' + appData.income);
      
      // for(let item in appData){
      //     console.log("Наша программа включает в себя данные: " + item + " " + appData[item]);
      // };







