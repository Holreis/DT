// 'use strict';
//<input id = "age" value= "30"></input>
let age = document.getElementById('age');


age.apply()
function showUser(surname, name) {
         alert("Пользователь " + surname + "" + name + ", его возраст " + this.value);
}
console.log()
showUser(age, 10);































// let money = prompt("Ваш бюджет на месяц?", "");
// let time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: false
// };

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         i = 0;
//     }
// };

// appData.moneyPerDay = appData.budget / 30;

// alert("Ежедневный бюджет: " + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
//     console.log("done");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний уровень достатка");
//     console.log("done");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Высокий уровень достатка");
//     console.log("done");
// } else {
//     console.log("Произошла ошибка");
//     console.log("done");
// }