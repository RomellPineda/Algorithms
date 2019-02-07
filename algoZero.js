// Anagrams

function anagrams(stringA, stringB) {
    const amapped = helper(stringA);
    const bmapped = helper(stringB);
    if (Object.keys(amapped).length !== Object.keys(bmapped).length) {
        return false;
    }
    for (let elem in amapped) {
        if (amapped[elem] !== bmapped[elem]) {
            return false;
        }
    }
    return true;
}

function helper(str) {
    const charMap = {};
    const scrubbed = str.replace(/[^\w]/g, '').toLowerCase();
    for (let elem of scrubbed) {
        charMap[elem] = charMap[elem] + 1 || 1;
    }
    return charMap;
}

// Anagram Alternative

function anagrams(stringA, stringB) {
    return helper(stringA) === helper(stringB);
}

function helper(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}

// Chunk

function chunk(array, size) {
    const chunks = [];
    let index = 0;
    while (index < array.length) {
        chunks.push(array.slice(index, index + size));
        index += size;
    }
    return chunks;
}

// Maxchar

function maxChar(str) {
    const map = {};
    let max = 0;
    let maxChar = '';

    for (let elem of str) {
        if (!map[elem]) {
            map[elem] = 1;
        } else {
            map[elem]++;
        }
    }

    for (let char in map) {
        if (map[char] > max) {
            max = map[char];
            maxChar = char;
        }
    }

    return maxChar;
}

// Reverseint

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

// Reversestring

function reverse(str) {
    var deconst = str.split('');
    var res = '';
    for (var i = deconst.length - 1; i > -1; i--) {
        res = res.concat(deconst[i]);
    }
    return res;
}

// Capitalize

function capitalize(str) {
    const phrase = [];

    for (let word of str.split(' ')) {
        phrase.push(word[0].toUpperCase() + word.slice(1));
    }

    return phrase.join(' ');
}

// Steps
// note: nested for

function steps(n) {
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

// Steps recursion

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}