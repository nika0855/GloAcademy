'use strict';
document.addEventListener('DOMContentLoaded', () => {



let start = document.getElementById('start'),
    
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
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
    control = document.querySelectorAll('.control')[0],
    depositBank = document.querySelector('.deposit-bank'),
    periodSelect = document.querySelector('.period-select');


    
    class AppData {
      constructor() {
        this.income = {};
      this.addIncome = [];
      this.expenses = {}; 
      this.incomeMonth = 0;
      this.addExpenses = [];
      this.deposit = false;
      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.expensesMonth = 0;
      }
      

    
    isNum(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    showResult() {
      const _this = this;
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = Math.ceil(this.budgetDay);
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(', ');
      additionalIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcPeriod();
      periodSelect.addEventListener('input', function () {
      incomePeriodValue.value = _this.calcPeriod();
      });
    }

    start() {

        this.budget = +salaryAmount.value;

        this.getExpInc();
        // this.getIncome();
        this.getExpensesMonth(); 
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.getReset();
        this.showResult();
        
      }
      
     addExpensesBlock() {
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
          expensesPlus.style.display = 'none';
        }
      }
      addIncomeBlock() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
          incomePlus.style.display = 'none';
        }
      }

      // AppData.prototype.getExpenses = function() {
      //   const _this = this;
      //   expensesItems.forEach(function(item) {
      //    let itemExpenses = item.querySelector('.expenses-title').value;
      //    let cashExpenses = item.querySelector('.expenses-amount').value;
      //    if(itemExpenses !== '' && cashExpenses !== "") {
      //      _this.expenses[itemExpenses] = cashExpenses;
      //    }
      //   });
        
      // };

      // AppData.prototype.getIncome = function() {
      //   const _this = this;
      //   incomeItems.forEach(function(item) {
      //     let itemIncome = item.querySelector('.income-title').value;
      //     let cashIncome = item.querySelector('.income-amount').value;
      //       if(itemIncome !== '' && cashIncome !== '') {
      //         _this.income[itemIncome] = cashIncome;
      //       }
          
      //   });

      //   for(let key in this.income) {
      //     this.incomeMonth += +this.income[key];
      //   }
      // };

      getExpInc() {
        const count = item => {
          const startStr = item.className.split('-')[0];
          
          const itemTitle = item.querySelector(`.${startStr}-title`).value;
          const itemAmount = item.querySelector(`.${startStr}-amount`).value;
          if(itemTitle !== '' && itemAmount !== '') {
            this[startStr][itemTitle] = itemAmount;
          }
        }


        incomeItems.forEach(count);
        expensesItems.forEach(count);

        for(let key in this.income) {
          this.incomeMonth += +this.income[key];
        }
        
      }

      getAddExpenses() {
        let addExpenses = additionalExpensesItem.value.split(',');
        const _this = this;
        addExpenses.forEach(function(item) {
          item = item.trim();
          if(item !== '') {
            _this.addExpenses.push(item);
          }
        });
      }

      getAddIncome() {
        const _this = this;
        additionalIncomeItem.forEach(function(item) {
          let itemValue = item.value.trim();
          if(itemValue !== '') {
            _this.addIncome.push(itemValue);
          }
        });
      }

       getExpensesMonth() {
        for(let item in this.expenses){

            this.expensesMonth += +this.expenses[item];
            
        }
       
    }

     getBudget() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
    }

     getTargetMonth  = function(){
       return targetAmount.value / this.budgetMonth;
    }
  
    calcPeriod() {
      
      return appData.budgetMonth * periodSelect.value;
      
  }

  getReset() {
    start.style.display = 'none';
    cancel.style.display = 'block';
}
  stopInput() {
    start.style.display = 'none';
    cancel.style.display = 'block';
    dataInputs = data.querySelectorAll('input');
    dataInputs.forEach(function (item) {
        item.setAttribute('disabled', 'disabled',true);
    });
    periodSelect.removeAttribute('disabled');
}
  checkSalaryAmount() {
    if (salaryAmount.value == '') {
        start.setAttribute('disabled', 'disabled',true);
        start.style.pointerEvents = 'none';
    } else {
        start.removeAttribute('disabled');
        start.style.pointerEvents = null;
    }
}

    inputAmount() {
    amountItems.forEach(function (item) {
        item.addEventListener('focus', appData.intputNumValidation);
    });
}

     getStatusIncome() {
      if(this.budgetDay > 800) {
        return ('Высокий уровень дохода');
    }else if(this.budgetDay > 300 || this.budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if(this.budgetDay > 0 || this.budgetDay < 300){
        return ('Низкий уровень дохода');
    }else {
        return ('Что то пошло не так');
    }
    }

    fullReset() {
      start.style.display = 'block';
      cancel.style.display = 'none';

      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.income = {};
      this.addIncome = [];
      this.incomeMonth = 0;
      this.expenses = {};
      this. addExpenses = [];
      this.expensesMonth = 0;
      this.deposit = false;
      this.percentDeposit = 0;
      this.moneyDeposit = 0;
      
      for(let i = 1; incomeItems.length > i; i++){
          incomeItems[i].parentNode.removeChild(incomeItems[i]);
      }
      incomePlus.style.display = 'block';
      
      for(let i = 1; expensesItems.length > i; i++){
          expensesItems[i].parentNode.removeChild(expensesItems[i]);
      }
      expensesPlus.style.display = 'block';

      let dataChildren = document.querySelectorAll('input, button');
      dataChildren.forEach(function(elem){
          elem.removeAttribute('disabled');
          elem.value = null;
      });
      periodSelect.value = 1;
      periodAmount.textContent = periodSelect.value;
      depositCheck.checked = false;
      
  }
    
  
 
      eventFull() {
        
        expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
        incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));
        salaryAmount.addEventListener('input', this.checkSalaryAmount);
        periodSelect.addEventListener('input', function () {
        periodAmount.innerHTML = periodSelect.value;  
         start.addEventListener('click', this.stopInput.bind(this));
         cancel.addEventListener('click', this.fullReset.bind(this));

      });

      depositCheck.addEventListener('change', function() {
        if(depositCheck.checked){
          depositBank.style.display = 'inline-block';
          depositAmount.style.display = 'inline-block';
          appData.deposit = 'true';
          depositBank.addEventListener('change', function() {
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other') {
              depositPercent.style.display = 'inline-block';
              depositPercent.value = '';
            }else {
              depositPercent.style.display = 'none';
              depositPercent.value = selectIndex;
            }
          });
        }else {
          depositBank.style.display = 'none';
          depositAmount.style.display = 'none';
          depositAmount.value = '';
          appData.deposit = 'false';
        }
      });
      
   }
    
    
 const appData = new AppData();
     appData.eventFull();

    });
      //  appData.getTargetMonth();
      //  appData.getStatusIncome();

       
    
      // console.log('Расходы за месяц: ' + appData.expensesMonth);
      // console.log('За какой период будет достигнута цель (в месяцах) - ' + Math.ceil(appData.period));
      // console.log('Уровень дохода: ' + appData.income);
   
    
    
    
    
    
      
      
    
      
      
      
      







