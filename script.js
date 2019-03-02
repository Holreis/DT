'use strict';
let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let expenses = {};
let appData = {
    budjet: money,
    vremy: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};
let necessaryExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost = prompt("Во сколько обойдется?", "");
appData.expenses[necessaryExpenses] = cost;
console.log(appData);
alert('бюджет на 1 день: ' + appData.budjet/30 + ' рублей');