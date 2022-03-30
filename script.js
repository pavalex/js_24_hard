"use strict";

const randomText = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga fugit totam nesciunt, animi veritatis? Voluptatem hic sint quod culpa amet dolor, molestias molestiae eveniet accusamus debitis, quos eum sunt reprehenderit explicabo iste eaque porro ex. Aliquid cupiditate perspiciatis saepe!    ';

const getFoo = function(txt) {
    if (typeof txt !== 'string') {
        return 'Это не строка';
    } else {
        return txt.trim().slice(0, 30) + '...';
    }
};

console.log(getFoo(randomText));