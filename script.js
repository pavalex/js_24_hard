const inputTxt = document.querySelector('.input-txt');
const info = document.querySelector('.info');

let timeout;

const debounce = (f, t) => {
    return (args) => {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall - previousCall) <= t)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), t);
    }
}

const outputText = () => {
    let text = inputTxt.value;
    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        info.textContent = text;
    }, 300);
}

const debouncedLogger = debounce(outputText, 300);

inputTxt.addEventListener('input', debouncedLogger);