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
console.log('Типы данных "money": ', typeof money);
console.log('Типы данных: "возможные расходы": ' , typeof addExpenses);
console.log('Типы данных: "депозит": ', typeof deposit);

if (mission > 0) {
console.log('Вы достигнете свою цель через: ', Math.ceil(mission), ' месяцев');
} else {
  console.log('Вы никогда не достигните своей цели!');
}


if (budgetDay > 800) {
  console.log('У вас высокий уровень дохода!');
} else if (budgetDay > 300 && budgetDay <= 800) {
  console.log('У вас средний уровень дохода!');
} else if (budgetDay <= 300 && budgetDay > 0) {
  console.log('У вас низкий уровень дохода!');
} else if (budgetDay < 0) {
  console.log('Соболезную!');
}




