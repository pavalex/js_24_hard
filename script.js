"use strict";

let num = 266219;
let multiply = 1;

while (num) {
    multiply *= num % 10;
    num = Math.floor(num / 10);    
}

let degree = multiply ** 3;
let firstNumbers = degree.toString().slice(0, 2);

console.log(Number(firstNumbers));
