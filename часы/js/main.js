'use strict';

var nova = document.querySelector('.nova');

function qwe() {
  var date = new Date();

  let appData = {
    Hours: date.getHours(),
    Minutes: date.getMinutes(),
    Seconds: date.getSeconds()
  };
    if(appData.Hours < 10){
      appData.Hours = '0' + appData.Hours;
    }
    if(appData.Minutes < 10){
      appData.Minutes = '0' + appData.Minutes;
    }
    if(appData.Seconds < 10){
      appData.Seconds = '0' + appData.Seconds;
    }
  nova.textContent = appData.Hours + ':' + appData.Minutes + ':' + appData.Seconds;
}

let timerId = setInterval(qwe, 1000);

