'use strict';
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i = 0;
    }
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
        switch (a){
            case a < i:
                a = i;
                break;
            case a == i:
                break;
            case a > i:
                i = a;
                break;
        }
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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
    console.log("done");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
    console.log("done");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
    console.log("done");
} else {
    console.log("Произошла ошибка");
    console.log("done");
}