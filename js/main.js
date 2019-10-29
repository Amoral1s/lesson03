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
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    mission: 500000,
    period: 3,
    asking: function() {
      if (confirm('Есть ли у вас допльнительный источник заработка?')) {
        let itemIncome;
        let cashIncome;

        do{
          itemIncome = prompt('Какой допльнительный заработок?', 'Таксую');
        } 
        while(Number(itemIncome) || itemIncome === '' || itemIncome === null);

        do {
          cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 15000);
        }
        while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
        appData.income[itemIncome] = cashIncome;
      }
      let addExpenses;
          do {
            addExpenses = prompt('Перечислите возможные расходы');
          } 
          while (addExpenses === '' || addExpenses === null);

          appData.addExpenses = addExpenses[0].toUpperCase() + addExpenses.slice(1).toLowerCase();

          appData.deposit = confirm('У вас есть депозит в банке?');
          
          for (let i = 0; i < 2; i++) {
            let itemExpenses;
            let CashExpenses;
            do {
              itemExpenses = prompt('Введите обязательную статью расходов', 'Кварплата');
            } 
            while(Number(itemExpenses) || itemExpenses === '' || itemExpenses === null);
            
            do {
              CashExpenses = prompt('Во сколько это обойдется?', 2500);
            } 
            while (isNaN(CashExpenses) || CashExpenses === '' || CashExpenses === null);

            appData.expenses[itemExpenses] = CashExpenses;
          }
    },
    getExpensesMonth: function() {
      for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
      }
    },
    getBudget: function(){
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function(){
      return appData.mission / appData.budgetMonth;
    },
    getStatusIncome: function(){
      if (appData.budgetDay > 800) {
        return ('Высокий уровень дохода');
      }
      else if (appData.budgetDay > 300){
        return ('Средний уровень дохода');
      }
      else if(appData.budgetDay > 0){
        return ('Низкий уровень дохода');
      }
      else {
        return('Вы что то делаете не так в своей жизни');
      }
    },
    getInfoDeposit: function(){
      if (appData.deposit) {
        do {
        appData.percentDeposit = prompt('Какой годовой процент?', 10);
        } while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
        do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
      }
    },
    calcSavedMoney: function () {
      return appData.budgetMonth * appData.period;
      }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();  
appData.getInfoDeposit();

console.log('Расходы за месяц: ' + appData.expensesMonth);
if (appData.getTargetMonth() > 0) {
console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + ' месяцев');
} else {
  console.log('Цель не будет достигнута!');
}

console.log(appData.getStatusIncome());

/* for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
} */

console.log(appData.addExpenses.split(', '));
