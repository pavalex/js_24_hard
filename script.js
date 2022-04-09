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
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


const timer = function () {
    let nowDate = new Date();
    
    if ((nowDate.getHours() >= 2 && nowDate.getHours() <= 4) || (nowDate.getHours() > 21 && nowDate.getHours() <= 24)) {
        hour = 'часа';
    } else if (nowDate.getHours() > 4 && nowDate.getHours() <= 20) {
        hour = 'часов';
    } else {
        hour = 'час';
    }

    time.innerHTML = `Сегодня ${days[nowDate.getDay()]}, ${nowDate.getDate()} ${months[nowDate.getMonth()]} ${nowDate.getFullYear()} года, ${nowDate.getHours()} ${hour} ${nowDate.getMinutes()} минут ${nowDate.getSeconds()} секунды `;
	time1.innerHTML = `${nowDate.toLocaleDateString()} - ${nowDate.toLocaleTimeString()}`;
};

timer();
setInterval(timer, delay);