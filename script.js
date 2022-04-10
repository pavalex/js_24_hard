"use strict";

const time = document.querySelector('#time');
const time1 = document.querySelector('#time1');
const delay = 1000;
let timeText = '';

const timer = function () {
    let nowDate = new Date();

    const words = function (number, arr) {
        let count = Math.abs(number) % 100;
        let count1 = count % 10;

        switch (true) {
            case (count > 10 && count < 20):
                return `${number} ${arr[2]}`;
            
            case (count1 > 1 && count1 < 5):
                return `${number} ${arr[1]}`;

            case (count1 === 1):
                return `${number} ${arr[0]}`;
                
            default:
                return `${number} ${arr[2]}`;
        }
    };

    const hours = words(nowDate.getHours(), ['час', 'часа', 'часов']);
    const minutes = words(nowDate.getMinutes(), ['минута', 'минуты', 'минут']);
    const seconds = words(nowDate.getSeconds(), ['секунда', 'секунды', 'секунд']);

    time.innerHTML = `Сегодня ${nowDate.toLocaleDateString('ru', {weekday: 'long'})}, ${nowDate.getDate()} ${nowDate.toLocaleDateString('ru', {month: 'long'})} ${nowDate.getFullYear()} года, ${hours} ${minutes} ${seconds}`;
    time1.innerHTML = `${nowDate.toLocaleDateString()} - ${nowDate.toLocaleTimeString()}`;
};

timer();
setInterval(timer, delay);