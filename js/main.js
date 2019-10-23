/*jshint esversion: 8 */
/*jslint node: true */

'use strict';
let money,
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы'),
    deposit = confirm('У вас есть депозит в банке?'),
    mission = 3000000,
    period = 3;

let start = function() {
  money = prompt('Ваш месячный доход?', 60000);

  while(isNaN(money) || money === '' || money === null) {
    money = prompt('Ваш месячный доход?', 60000);
  }
};

start();

let showTypeof = function(item) {
  console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let expenses1,
    expenses2;

console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses1 = prompt('Введите обязательную статью расходов', 'Кварплата');
    }
    if (i === 1) {
      expenses2 = prompt('Введите обязательную статью расходов', 'Бензин');
    }
    sum += +prompt('Во сколько это обойдется?', 2500);
  }
  while(isNaN(sum) || sum === '' || sum === null || sum === 0) {
    sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        expenses1 = prompt('Введите обязательную статью расходов', 'Кварплата');
      }
      if (i === 1) {
        expenses2 = prompt('Введите обязательную статью расходов', 'Бензин');
      }
      sum += +prompt('Во сколько это обойдется?', 2500);
    }
  } 
  return sum;
};

let exepensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + exepensesAmount);

let getAccumulatedMonth = function(){
  return money - exepensesAmount;

};

let getTargetMonth = function(){
  
    return mission / exepensesAmount;
  
};

let budgetDay = getAccumulatedMonth() / 30;

if (getTargetMonth > 0) {
console.log("Цель будет достигнута за " + Math.ceil(getTargetMonth()) + ' месяцев');
} if (getTargetMonth == 0 || isNaN(getTargetMonth)) {
  console.log('Цель не будет достигнута!');
}

let getStatusIncome = function(){
  if (budgetDay < 0) {
    return ('Вы что то делаете не так в своей жизни');
  }
  else if (budgetDay < 300){
    return ('Низкий уровень дохода');
  }
  else if(budgetDay <= 800){
    return ('Средний уровень дохода');
  }
  else {
    return('Высокий уровень дохода');
  }
};

console.log(getStatusIncome());







