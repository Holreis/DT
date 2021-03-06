window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = '2019-03-25';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime = '2019-03-25') {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
      if (hours.textContent < 10) {
        hours.textContent = '0' + t.hours;
      }
      if (minutes.textContent < 10) {
        minutes.textContent = '0' + t.minutes;
      }
      if (seconds.textContent < 10) {
        seconds.textContent = '0' + t.seconds;
      }
      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  let mor = document.querySelectorAll('.description-btn');

  mor.forEach((item, i, mor) => {
    item.addEventListener('click', () => {
      overlay.style.display = "block";
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  });
  setClock('timer', deadline);


  //modal

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = "block";
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    overlay.style.display = "none ";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  // Form

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!!!',
    failure: 'Что-то пошло не так...'
  };
  let mainForm = document.querySelector('.main-form'),
      contactForm = document.querySelector('#form'),
      input = mainForm.getElementsByTagName('input'),
      inputs = contactForm.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  
  function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode) 
    }

    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which) 
    }

    return null;
  }
  inputs[1].onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr == '+') {
      return true;
    }
    if (chr < '0' || chr > '9') {
      return false;
    }
  }
  input[0].onkeypress = function(e) {
      e = e || event;  
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      var chr = getChar(e);
      if (chr == null) return;
      if (chr == '+') {
        return true;
      }
      if (chr < '0' || chr > '9') {
        return false;
      }
    }


  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      function postForm(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              statusMessage.innerHTML = message.loading;
              resolve();
            } else if (request.readyState == 4 && request.status == 200) {
              statusMessage.innerHTML = message.success;
              resolve();
            } else {
              statusMessage.innerHTML = message.failure;
              reject();
            }
          };
          let obj = {};
          data.forEach(function (value, key) {
            obj[key] = value;
          });
          let json = JSON.stringify(obj);
          request.send(json);
        });
      }
      function clearInput() {
        for (let i = 0; i < document.querySelectorAll('input').length; i++) {
          document.querySelectorAll('input')[i].value = '';
        }
      }
      postForm(formData)
        .then(() => {
          statusMessage.removeAttribute('class');
          statusMessage.classList.add('loadstatus');
        })
        .then(() => {
          statusMessage.removeAttribute('class');
          statusMessage.classList.add('goodstatus');
        })
        .catch(() => {
          statusMessage.removeAttribute('class');
          statusMessage.classList.add('failstatus');
          statusMessage.innerHTML = message.failure;
        })
        .then(clearInput);
    });
  } 
  sendForm(mainForm);
  sendForm(contactForm);
});
