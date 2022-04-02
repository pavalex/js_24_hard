// item 1
const arr = ['237', '356', '45', '2465', '362', '72', '459'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

// item 2
let number = 100;

const isSimple = function(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

for (let i = 0; i < number; i++) {
    if (isSimple(i)) {
        console.log(`${i} - Делители этого числа: 1 и ${i}`);
    }        
}


