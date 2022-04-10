"use strict";

const time = document.querySelector('#time');
const time1 = document.querySelector('#time1');
const delay = 1000;
let timeText = '';

const timer = function () {
    let nowDate = new Date();

    const words = function (number, arr) {
        if ((number >= 2 && number <= 4) || (number > 21 && number <= 24) || (number > 31 && number <= 34) || (number > 41 && number <= 44) || (number > 51 && number <= 54)) {
            timeText = arr[1];
        } else if ((number > 4 && number <= 20) || (number > 24 && number <= 30) || (number > 34 && number <= 40) || (number > 44 && number <= 50) || number > 54 || number === 0) {
            timeText = arr[2];
        } else {
            timeText = arr[0];
        }

        return `${number} ${timeText}`;
    };

    const hours = words(nowDate.getHours(), ['час', 'часа', 'часов']);
    const minutes = words(nowDate.getMinutes(), ['минута', 'минуты', 'минут']);
    const seconds = words(nowDate.getSeconds(), ['секунда', 'секунды', 'секунд']);

    time.innerHTML = `Сегодня ${nowDate.toLocaleDateString('ru', {weekday: 'long'})}, ${nowDate.getDate()} ${nowDate.toLocaleDateString('ru', {month: 'long'})} ${nowDate.getFullYear()} года, ${hours} ${minutes} ${seconds}`;
    time1.innerHTML = `${nowDate.toLocaleDateString()} - ${nowDate.toLocaleTimeString()}`;
};

timer();
setInterval(timer, delay);