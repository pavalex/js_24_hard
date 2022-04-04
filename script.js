"use strict";

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const todayDay = new Date();

const days = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье',
};

const newWeek = week.map(function(item) {
    if (item === 'суббота' || item === 'воскресенье') {
        item = item.italics();
    }
    if (item === days[todayDay.getDay()]) {
        item = item.bold();
    }
    return item;
});

document.write(newWeek.join('<br>'));