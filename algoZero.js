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

// Finding vowels

function vowels(str) {
    let count = 0;
    const check = ['a','e','i','o','u'];

    for (let char of str.toLowerCase()) {
        if (check.includes(char)) {
            count++;
        }
    }

    return count;
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

// BST

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (data < this.data && this.left) {
            return this.left.contains(data);
        } else if (data > this.data && this.right) {
            return this.right.contains(data);
        }

        return null;
    }
}

// Validate BST

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)){
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)){
        return false;
    }

    return true;
}

// Hashmap awesome

let str = '100 + 100';

let dir = {
  '+' : function(a, b) {return a + b},
  '-' : function(a, b) {return a - b},
  '*' : function(a, b) {return a * b},
  '/' : function(a, b) {return a / b}
}

let proc = str.split(' ');
dir[proc[1]](parseInt(proc[0]), parseInt(proc[2]));