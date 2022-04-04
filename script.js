"use strict";

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const days = document.querySelector('#days'); 
const todayDay = new Date();

const getDays = function () {
    week.forEach(function (item, i) {
        const createDiv = document.createElement('div');
        if (i === +todayDay.getDay()-1) { 
            createDiv.classList.add('today');
            createDiv.textContent = week[i];
        }
        if (item === 'Суббота' || item === 'Воскресенье') { 
            createDiv.classList.add('italic'); 
            createDiv.textContent = week[i]; 
        } else {
            createDiv.textContent = week[i]; 
        }
        days.appendChild(createDiv); 
    });
};

getDays();