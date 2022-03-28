"use strict";

/* Lesson 3 */

// Unit 1
const lang = 'en'; // ru
const langArray = [];

if (lang === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
    console.log('oops..');
}

switch (lang) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log('oops..');
}

langArray['ru'] = ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'];
langArray['en'] = ['monday, tuesday, wednesday, thursday, friday, saturday, sunday'];
console.log(langArray[lang]);

// Unit 2
const namePerson = 'Артем'; // Александр, и другие

namePerson === 'Артем' ? console.log('директор') : (namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент'));