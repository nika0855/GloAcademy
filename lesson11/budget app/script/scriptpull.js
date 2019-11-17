'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('start'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    budgetMonthValue = document.querySelector('budget_month-value'),
    budgetDayValue = document.querySelector('budget_day-value'),
    expensesMonthValue = document.querySelector('expenses_month-value'),
    addIncomeValue = document.querySelector('additional_income-value'),
    incomePeriodValue = document.querySelector('income_period-value'),
    targetMonthValue = document.querySelector('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalExpItem = document.querySelector('.additional_expenses-item'),
    additionalExpValue = document.querySelector('additional_expenses-value'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    cancel = document.getElementById('cancel');

    // depositCheck = document.querySelector('#deposit-check'),
    // accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],  
    // incomeAmount = document.querySelector('.income-amount'),
    // expensesTitle = document.querySelector('.expenses-title'),
    // expensesItems = document.querySelectorAll('.expenses-items'),
    // depositCalc = document.querySelector('.deposit-calc'),
    // depositAmount = document.querySelector('.deposit-amount'),
    // depositPercent = document.querySelector('.deposit-percent'),
    // incomeItems = document.querySelectorAll('.income-items'),
    // amountItems = document.querySelectorAll('.data input[class$="-amount"]'),
    // data = document.querySelector('.data'),
    // dataInputs = data.querySelectorAll('input'),
    // control = document.querySelectorAll('.control')[0],
    // depositBank = document.querySelector('.deposit-bank'),
    periodSelect.setAttribute('disabled', true);

    let expensesItems = document.querySelectorAll('.expenses-items'),
        incomeItems = document.querySelectorAll('.income-items');

    const AppData = function () {
        this.income = {};
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.incomeMonth = 0;
        this.moneyDeposit = 0;
        this.budget = 0;
        this.expensesMonth = 0;
        this.budgetMonth = 0;
        this.budgetDay = 0;

        this.deposit = false;
        this.percentDeposit = 0;

    };

    AppData.prototype.isNum = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
      };
    
      AppData.prototype.showResult = function() {
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpValue.value = this.addExpenses.join(', ');
        addIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input', function () {
        incomePeriodValue.value = _this.calcPeriod();
        });
      };

      AppData.prototype.addExpensesBlock = function() {
        
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        for(let i = 0; i < cloneExpensesItem.childNodes.length; i++) {
            cloneExpensesItem.childNodes[i].value = '';
        }
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
          expensesPlus.style.display = 'none';
        }
        this.validate();
      };

      AppData.prototype.addIncomeBlock = function() {
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        for(let i = 0; i < cloneIncomeItem.childNodes.length; i++) {
            cloneIncomeItem.childNodes[i].value = '';
        }
        if(incomeItems.length === 3) {
          incomePlus.style.display = 'none';
        }
        this.validate();
      };

      AppData.prototype.getExpInc = function() {
        const count = item => {
          const startStr = item.className.split('-')[0];
          
          const itemTitle = item.querySelector(`.${startStr}-title`).value;
          const itemAmount = item.querySelector(`.${startStr}-amount`).value;
          if(itemTitle !== '' && itemAmount !== '') {
            this[startStr][itemTitle] = itemAmount;
          }
        };


        incomeItems.forEach(count);
        expensesItems.forEach(count);

        for(let key in this.income) {
          this.incomeMonth += +this.income[key];
        }
        
      };

      AppData.prototype.getExpensesMonth = function () {
          let result = 0;
        for(const key in this.expenses){
            result += +this.expenses[key];  
        }
        this.expensesMonth = result; 
    };

    AppData.prototype.getBudget = function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(Math.floor(this.budgetMonth / 30));
    };

    AppData.prototype.getTargetMonth  = function(){
        const result = Math.ceil(targetAmount.value / this.budgetMonth);
        if(result <= 0) {
            return 'Цель не будет достигнута';
        }else {
          return `Цель будет достигнута через ${result} месяцев` ;  
        }  
     };

     AppData.prototype.getStatusIncome  = function(){
        if(this.budgetDay >= 800) {
          return ('Высокий уровень дохода');
      }else if(this.budgetDay >= 300 || this.budgetDay <= 800) {
          return ('Средний уровень дохода');
      } else if(this.budgetDay >= 0 || this.budgetDay <= 300){
          return ('Низкий уровень дохода');
      }else {
          return ('Что то пошло не так');
      }
      };

      AppData.prototype.getAddExpenses = function() {
        let addExpenses = additionalExpItem.value.split(',');
        const _this = this;
        addExpenses.forEach(function(item) {
          item = item.trim();
          if(item !== '') {
            _this.addExpenses.push(item);
          }
        });
      };

      AppData.prototype.getAddIncome = function() {
        const _this = this;
        additionalIncomeItem.forEach(function(item) {
          let itemValue = item.value.trim();
          if(itemValue !== '') {
            _this.addIncome.push(itemValue);
          }
        });
      };
      AppData.prototype.calcPeriod = function () {
        periodAmount.textContent = periodSelect.value;
        incomePeriodValue.value = this.budgetMonth * periodSelect.value; 
    };

    AppData.prototype.changePeriod = function() {
        periodAmount.textContent = periodSelect.value;
    };
    AppData.prototype.reset = function() {
        const inputs = document.querySelectorAll('input[type=text]');
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute("disabled", false);
            inputs[i].value = '';
        }
        cancel.style.display = 'none';
        startBtn.style.display = 'block';
        addIncomeValue.value = '';
        this.addIncome = [];
        this.income = {};
        this.incomeMonth = 0;
        periodSelect.setAttribute('disabled', true);
    };
    AppData.prototype.submit = function() {
        if(isNaN(parseFloat(salaryAmount.value)) || parseFloat(salaryAmount.value)){
            salaryAmount.value = 'Введите месячный доход';
            setTimeout(() => {
                salaryAmount.value = '';
            }, 2000);
            return;
        }
        if(+salaryAmount.value > 0 || salaryAmount.value !== '') {
            this.start();
            const inputs = document.querySelectorAll('input[type=text]');
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].setAttribute("disabled", true);
            }
            periodSelect.removeAttribute('disabled');
            cancel.style.display = 'block';
            startBtn.style.display = 'none';
        }
        periodSelect.addEventListener('change', this.calcPeriod.bind(this));
    };

    AppData.prototype.start = function() {

        this.budget = parseFloat(salaryAmount.value);
        this.validate();
        this.getExpInc();
        this.getBudget();
        this.getExpensesMonth();
         this.getAddExpenses();
        this.getAddIncome();
        this.calcPeriod();
        this.getStatusIncome();
        this.showResult();

        this.getReset(); 
      };
      AppData.prototype.eventListeners = function() {
          startBtn.addEventListener('click', this.submit.bind(this));
          cancel.addEventListener('click', this.reset);
          expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
          incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));
      };
      
    AppData.prototype.getReset = () => {
        start.style.display = 'none';
        cancel.style.display = 'block';
    }
    // AppData.prototype.getCancel = () => {
    //     const dataChildren = data.querySelectorAll('*');

    //     for (let i = 0; i < dataChildren.length; i++) {
    //         if (dataChildren[i].type == 'text' ||
    //             dataChildren[i].type == 'submit' ||
    //             dataChildren[i].type == 'checkbox') {
    //             dataChildren[i].setAttribute('disabled', '');
    //         }
    //     }
    // }

// AppData.prototype.validate = function()  {
//         // inputs.forEach(this.getCheckPlaceholder);
//         this.checkSalaryAmount();
//         salaryAmount.addEventListener('input', this.checkSalaryAmount);
//         btnIncAdd.addEventListener('click', this.addBlock.bind(this));
//         btnExpAdd.addEventListener('click', this.addBlock.bind(this));
//         checkbox.addEventListener('change', this.checkDeposit.bind(this));
//         periodSelect.addEventListener('input', this.periodSelect);
//         start.addEventListener('click', this.start.bind(this));
//         cancel.addEventListener('click', this.reset.bind(this));
//     }


const appData = new AppData();
// appData.validate();
});


   



