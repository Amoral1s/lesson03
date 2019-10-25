'use strict';

let money,
    start = function() {
      money = prompt('Ваш месячный доход?', 60000);

      while(isNaN(money) || money === '' || money === null) {
        money = prompt('Ваш месячный доход?', 60000);
      }
    };
  start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
      let sum = 0, question;
      for (let i = 0; i < 2; i++) {
        if (i === 0) {
          expenses1 = prompt('Введите обязательную статью расходов', 'Кварплата');
        } else {
          expenses2 = prompt('Введите обязательную статью расходов', 'Бензин');
        } do {
          question = prompt('Во сколько это обойдется?', 2500);
        }
        while(isNaN(question) || question === '' || question === null); 
        sum += +question;
      } 
      return sum;
    },
    getBudget: function(){
      return appData.budget - appData.expensesMonth;
    },
    getTargetMonth: function(){
      return appData.mission / appData.getBudget();
    },
    getStatusIncome: function(){
      
      if (budgetDay > 800) {
        return ('Высокий уровень дохода');
      }
      else if (budgetDay > 300){
        return ('Средний уровень дохода');
      }
      else if(budgetDay > 0){
        return ('Низкий уровень дохода');
      }
      else {
        return('Вы что то делаете не так в своей жизни');
      }
    },
      asking: function() {
      let addExpenses = prompt('Перечислите возможные расходы');
          appData.addExpenses = addExpenses.toLowerCase().split(',');
          appData.deposit = confirm('У вас есть депозит в банке?');
    }
};


let expenses1,
    expenses2;

let exepensesMonth = appData.getExpensesMonth();
appData.expenses = String(expenses2 + ', ' + expenses1);

console.log(appData.expenses);

console.log('Расходы за месяц: ' + exepensesMonth);


let budgetDay = appData.getBudget() / 30;

if (appData.getTargetMonth() > 0) {
console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + ' месяцев');
} else {
  console.log('Цель не будет достигнута!');
}

console.log(appData.getStatusIncome());

for (let data in appData) {
  console.log('Наша программа включает в себя данные: ' + data);
}





