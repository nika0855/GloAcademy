'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],  
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositCalc = document.querySelector('.deposit-calc'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    cancel = document.getElementById('cancel'),
    amountItems = document.querySelectorAll('.data input[class$="-amount"]'),
    data = document.querySelector('.data'),
    dataInputs = data.querySelectorAll('input'),
    periodSelect = document.querySelector('.period-select');


    const isNum = function(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    
    let appData = {
      income: {},
      addIncome: [],
      expenses: {}, 
      incomeMonth: 0,
      addExpenses: [],
      deposit: false,
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      start: function() {
        
        if(salaryAmount.value === '') {
          alert('Ошибка, поле"Месячный доход" должно быть заполнено!');
          return;
        }

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth(); 
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
        
      },
      showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.ceil(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        // incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', function () {
        incomePeriodValue.value = appData.calcPeriod();
        });
      },
      addExpensesBlock: function() {
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
          expensesPlus.style.display = 'none';
        }
      },
      addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
          incomePlus.style.display = 'none';
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

      getIncome: function() {
        incomeItems.forEach(function(item) {
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
              appData.income[itemIncome] = cashIncome;
            }
          
        });

        for(let key in appData.income) {
          appData.incomeMonth += +appData.income[key];
        }
      },

      getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
          item = item.trim();
          if(item !== '') {
            appData.addExpenses.push(item);
          }
        });
      },

      getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
          let itemValue = item.value.trim();
          if(itemValue !== '') {
            appData.addIncome.push(itemValue);
          }
        });
      },

       getExpensesMonth : function () {
        for(let item in appData.expenses){

            appData.expensesMonth += +appData.expenses[item];
            
        }
        return appData.expensesMonth;
    },

     getBudget : function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },

     getTargetMonth : function(){
       return targetAmount.value / appData.budgetMonth;
    },
  
    calcPeriod: function () {
      
      return appData.budgetMonth * periodSelect.value;
      
  },
  stopInput: function () {
    start.style.display = 'none';
    cancel.style.display = 'block';
    dataInputs = data.querySelectorAll('input');
    dataInputs.forEach(function (item) {
        item.setAttribute('disabled', 'disabled');
    });
    periodSelect.removeAttribute('disabled');
},
  checkSalaryAmount: function () {
    if (salaryAmount.value == '') {
        start.setAttribute('disabled', 'disabled');
        start.style.pointerEvents = 'none';
    } else {
        start.removeAttribute('disabled');
        start.style.pointerEvents = null;
    }
},

    inputAmount: function () {
    amountItems.forEach(function (item) {
        item.addEventListener('focus', appData.intputNumValidation);
    });
},

     getStatusIncome : function(){
      if(appData.budgetDay > 800) {
        return ('Высокий уровень дохода');
    }else if(appData.budgetDay > 300 || appData.budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if(appData.budgetDay > 0 || appData.budgetDay < 300){
        return ('Низкий уровень дохода');
    }else {
        return ('Что то пошло не так');
    }
    }
    
          
      };

      start.addEventListener('click', appData.start);

      expensesPlus.addEventListener('click', appData.addExpensesBlock);

      incomePlus.addEventListener('click', appData.addIncomeBlock);

      salaryAmount.addEventListener('input', appData.checkSalaryAmount);
      
      periodSelect.addEventListener('input', function () {
      periodAmount.innerHTML = periodSelect.value;  
   }) ;
      start.addEventListener('click', appData.start);
      start.addEventListener('click', appData.stopInput);
    
      appData.getTargetMonth();
      appData.getStatusIncome();
    
      console.log('Расходы за месяц: ' + appData.expensesMonth);
      console.log('За какой период будет достигнута цель (в месяцах) - ' + Math.ceil(appData.period));
      console.log('Уровень дохода: ' + appData.income);
   
    
    
    
    
    
      
      
    
      
      
      
      







