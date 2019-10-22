/*jshint esversion: 8 */
/*jslint node: true */

'use strict';
let money = +prompt('Ваш ежемесячный доход?'),
    addExpenses = [prompt('Перечислите возможные расходы за рассчитываемый период через запятую')],
    deposit = confirm('У вас есть депозит в банке?'),
    spending1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    howMutch1 = +prompt('Во сколько это обойдется?'),
    spending2 = prompt('Какие еще расходы у вас есть?'),
    howMutch2 = +prompt('Во сколько это обойдется?'),
    budgetMonth = +money - +howMutch1 - +howMutch2,
    budgetDay = Math.round(+budgetMonth / 30),
    mission = 3000000 / budgetMonth;




console.log('Доход: ', money);
console.log('Возможные расходы:  ', addExpenses);

//Типы данных
let showTypeof = function(data) {
  console.log(data, typeof(data));
};

showTypeof(money);
showTypeof(addExpenses);
showTypeof(deposit);

if (mission > 0) {
console.log('Вы достигнете свою цель через: ', Math.ceil(mission), ' месяцев');
} else {
  console.log('Вы никогда не достигните своей цели!');
}

let getStatusIncome = function () { 
  if (budgetDay > 800) {
    return ('У вас высокий уровень дохода!');
  } else if (budgetDay > 300 && budgetDay <= 800) {
    return ('У вас средний уровень дохода!');
  } else if (budgetDay <= 300 && budgetDay > 0) {
    return ('У вас низкий уровень дохода!');
  } else if (budgetDay < 0) {
    return ('Соболезную!');
  }
 };

console.log(getStatusIncome());



function getExpensesMont(){
  return Number(spending1 + spending2);
}

function getAccumulatedMonth() {
  return money - getExpensesMont();
}

let accumulatedMonth = getAccumulatedMonth();

console.log('остаток суммы ', accumulatedMonth);



