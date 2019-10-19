let annualPlan = {
    money: 125000,
    income: 'фриланс', 
    addExpenses: ['Учеба', 'Кошки', 'Строительство'],
    deposit: true,
    mission: 1000000,
    period: 12
};
let strArr = annualPlan.addExpenses;
console.log(typeof annualPlan.money);
console.log(typeof annualPlan.income);
console.log(typeof annualPlan.deposit);
console.log(annualPlan.income.length);
console.log(`"Период ${annualPlan.period} месяцев"`);
console.log(`"Цель заработать ${annualPlan.mission} рублей ${'/'} долларов"`);
for( let i = 0; i < strArr.length; i++) {
    console.log(strArr[i].toLowerCase());
};

let budgetDay = parseInt(annualPlan.money / 30);


console.log(`результат: ${budgetDay} руб. и остаток ${budgetDay % 30} от деления`);