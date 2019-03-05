'use strict';
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    };
}
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

///////////////////////////////Второй способ///////////////////////////////
/*let i = 0;
let a = 0;
while (i < 2 ) { 
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");
    if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50 ){
        console.log("done");
        appData.expenses[a] = b;
        i++;
    } else {
        break;
    }
}*/
///////////////////////////////Третий способ///////////////////////////////
/*let i = 0;
let a = 0;
switch (i) {
    case i <= 2:
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            i++;
        }else{
            break;
        }
        break;
}*/
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let dop = prompt("Статья необязательных расходов?", "");
        let num = i;
        if ((typeof (dop)) === 'string' && (typeof (dop)) != null && dop != '' && dop.length < 50){
            appData.optionalExpenses[num] = dop;
        }else{
            i--;
        }
    }
}

function checkSavings(){
    if (appData.savings ==  true){
        let save = +prompt("Каова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашнго депозита: " + appData.monthIncome);
    }
}

chooseExpenses();
chooseOptExpenses();
detectDayBudget();
detectLevel();
checkSavings();
console.log(appData);