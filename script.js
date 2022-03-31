"use strict";

const randomText = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga fugit totam nesciunt, animi veritatis? Voluptatem hic sint quod culpa amet dolor, molestias molestiae eveniet accusamus debitis, quos eum sunt reprehenderit explicabo iste eaque porro ex. Aliquid cupiditate perspiciatis saepe!    ';

// вариант 1
const getFoo = function(txt) {
    if (typeof txt !== 'string') {
        return 'Это не строка';
    }
    
    if (txt.length < 30) {
        return txt.trim();
    }

    return txt.trim().slice(0, 30) + '...';
};

// вариант 2
const getFoo2 = function(txt) {
    switch(true) {
        case (typeof txt !== 'string'):
            console.log('Это не строка');
            break;
        case (txt.length < 30):
            console.log(txt.trim());
            break;
        default: 
            console.log(txt.trim().slice(0, 30) + '...');        
    }
};


console.log(getFoo(randomText));
getFoo2(randomText);