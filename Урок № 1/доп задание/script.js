'use strict';

// let num = 33721;
// while(num > 10){
//     num = (num / 10).toFixed(1);
//     console.log(num);
// }

var num = 33721;
var arr = [];
for (var temp = num; Math.round(temp) != 0; temp /= 10, temp = Math.floor(temp)) {
    arr.unshift(temp % 10);
}

let b;
for(let i = 0; i < 5; i++){
    while(i < 1){
        b = arr[i] * arr[++i];
        i++;
    }
    b = b * arr[i];
}
console.log('Произведение (умножение) цифр этого числа: ' + b);
let i = 1;
let c = b;
while(i < 3) {
    c = c * b;
    i++; 
}
var num = c; // 2000376
var arr2 = [];
c /= 100000;
c = Math.floor(c);
alert("первые 2 цифры полученного числа: " + c);