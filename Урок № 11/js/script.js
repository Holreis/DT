// 'use strict';
// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font:{
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open(method, url, async, login, pass);
})