'use strict';
let age = document.getElementById('age');
showUser.apply(age, ['Shayazdanov', 'Artem']);
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}