// prototype code

// string to integer (atoi)
var myAtoi = function (str) {
    let pre = str.trim().split(' ');

    if (/[0-9]/.test(pre[0]) === false) {
        return 0;
    }

    for (elem of pre) {
        if (/[0-9]/.test(elem)) {
            if (parseInt(elem) < Math.pow(-2, 31)) {
                return Math.pow(-2, 31);
            }
            if (parseInt(elem) > (Math.pow(2, 31) - 1)) {
                return Math.pow(2, 31) - 1;
            }
            return parseInt(elem);
        }
    }
    return 'whuuu';
};

myAtoi("4193 with words");


// roman numerals to integer
const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function value(letter) {
    if (map[letter]) {
        return map[letter];
    } else {
        return 0;
    }
}

var romanToInt = function (s) {
    let roman = s.split('');
    let sum = 0;


    for (let i = 0; i < roman.length; i++) {
        // needs more roman numeral rules!!
        if (value(roman[i]) < value(roman[i + 1])) {
            sum = sum + value(roman[i + 1]) - value(roman[i]);
            i++;
        } else {
            sum = sum + value(roman[i]);
        }
    }

    return sum;

};

