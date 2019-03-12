let menu = document.querySelector('.menu'),
    item = document.getElementsByClassName('column');
    adv = document.querySelector('.adv');
    title = document.getElementById('title');
    question = document.getElementById('prompt');

menu.insertBefore(menu.children[2], menu.children[1]);
document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";

title.textContent = 'Мы продаем только подлинную технику Apple';
item[1].removeChild(adv);

let qw = prompt("Ваше отношение к технике apple: ", "ответ" );

question.textContent = qw;