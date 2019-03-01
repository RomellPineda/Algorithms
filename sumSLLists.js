// Recussive:
function rSumList(l1, l2, carry = 0) {
    if (l1 === null && l2 === null && carry === 0) {
        return null;
    }

    let value = carry;
    if (l1 !== null) {
        value += l1.val;
    }

    if (l2 !== null) {
        value += l2.val;
    }

    let rslt = new Node(value % 10);

    if (l1 !== null || l2 !== null) {
        let more = rSumList(l1 === null ? null : l1.next, l2 === null ? null : l2.next, value >= 10 ? 1 : 0);
        rslt.next = more;
    }

    return rslt;
}
// verified legit!


// Letting + add!?
function convert(list) {
    let str = '';
    while (list) {
        str = str.concat(list.val);
        list = list.next
    }
    return str;
}

function process(str) {
    return parseInt(str.split('').reverse().join(''));
}


function add(a, b) {
    return process(convert(a)) + process(convert(b));
}

function list(sum) {
    let almost = sum.toString().split('');
    let done = new Node(almost.pop());
    let runner = done;
    while (almost.length > 0) {
        runner.next = new Node(almost.pop());
        runner = runner.next;
    }
    return done;
}

// within addTwoNumbers
return list(add(l1, l2));

// passed 1560 of 1563 test cases??
Input:
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
[5,6,4]
Output:
[0,3,NaN,NaN,1]
Expected:
[6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]