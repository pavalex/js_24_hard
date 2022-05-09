const inputTxt = document.querySelector('.input-txt');
const info = document.querySelector('.info');
const info2 = document.querySelector('.info2');

const debounce = (callback, delay) => {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    };
};

const outputText = () => {
    info.textContent = inputTxt.value;
};

const outputText2 = () => {
    info2.textContent = inputTxt.value;
};

inputTxt.addEventListener('input', debounce(outputText, 1000));
inputTxt.addEventListener('input', debounce(outputText2, 2000));
