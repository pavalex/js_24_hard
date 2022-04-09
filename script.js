"use strict";

const time = document.querySelector('#time');
const time1 = document.querySelector('#time1');
const delay = 1000;
let hour,
    zeroMonth,
    zeroDate,
    zeroHours,
    zeroMinutes,
    zeroSeconds = '';

const timer = function () {
    let nowDate = new Date();
    
    if ((nowDate.getHours() >= 2 && nowDate.getHours() <= 4) || (nowDate.getHours() > 21 && nowDate.getHours() <= 24)) {
        hour = 'часа';
    } else if (nowDate.getHours() > 4 && nowDate.getHours() <= 20) {
        hour = 'часов';
    } else {
        hour = 'час';
    }

    time.innerHTML = `Сегодня ${nowDate.toLocaleDateString('ru', {weekday: 'long'})}, ${nowDate.getDate()} ${nowDate.toLocaleDateString('ru', {month: 'long'})} ${nowDate.getFullYear()} года, ${nowDate.getHours()} ${hour} ${nowDate.getMinutes()} минут ${nowDate.getSeconds()} секунды `;
    time1.innerHTML = `${nowDate.toLocaleDateString()} - ${nowDate.toLocaleTimeString()}`;
};

timer();
setInterval(timer, delay);