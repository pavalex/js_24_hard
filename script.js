const box = document.querySelector(".box");
const square = document.querySelector(".square");
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

let active = false;
let count = 0;
let idInterval;

function myAnimation() {
    count++;
    idInterval = requestAnimationFrame(myAnimation);

    if (count > 360) {
        count = 0;
    }

    square.style.transform = `rotate(${count}deg)`;
    box.style.transform = `rotate(${count}deg)`;
    console.log(count)
}

start.addEventListener('click', () => {
   if (active) {
       cancelAnimationFrame(idInterval);
       active = false;
   } else {
       idInterval = requestAnimationFrame(myAnimation);
       active = true;
   }
});

reset.addEventListener('click', () => {
    box.style.top = '';
    box.style.left = '';
    square.style.transform = '';
    box.style.transform = '';
});


