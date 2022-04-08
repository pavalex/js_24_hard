"use strict";

const time = document.querySelector('#time');
const time1 = document.querySelector('#time1');
let hour,
    zeroMonth,
    zeroDate,
    zeroHours,
    zeroMinutes,
    zeroSeconds = '';
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


setInterval(function() {
    let nowDate = new Date();
    
    const lengthDate = function (param) {
        let varZero;
        if (param === 1) {
            varZero = '0';
        } else {
            varZero = '';
        }  

        return varZero;
    };

    zeroMonth = lengthDate(nowDate.getMonth().toString().length);
    zeroDate = lengthDate(nowDate.getDate().toString().length);
    zeroHours = lengthDate(nowDate.getHours().toString().length);
    zeroMinutes = lengthDate(nowDate.getMinutes().toString().length);
    zeroSeconds = lengthDate(nowDate.getSeconds().toString().length);

    if ((nowDate.getHours() >= 2 && nowDate.getHours() <= 4) || (nowDate.getHours() > 21 && nowDate.getHours() <= 24)) {
        hour = 'часа';
    } else if (nowDate.getHours() > 4 && nowDate.getHours() <= 20) {
        hour = 'часов';
    } else {
        hour = 'час';
    }

    time.innerHTML = `Сегодня ${days[nowDate.getDay()]}, ${nowDate.getDate()} ${months[nowDate.getMonth()]} ${nowDate.getFullYear()} года, ${nowDate.getHours()} ${hour} ${nowDate.getMinutes()} минут ${nowDate.getSeconds()} секунды `;
	time1.innerHTML = `${zeroDate}${nowDate.getDate()}.${zeroMonth}${nowDate.getMonth() + 1}.${nowDate.getFullYear()} - ${zeroHours}${nowDate.getHours()}:${zeroMinutes}${nowDate.getMinutes()}:${zeroSeconds}${nowDate.getSeconds()}`;
}, 1000);