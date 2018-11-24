// Experimental algorithms

function isPalindrome(arr) {
    for (var i = 0; i < Math.floor(arr.length); i++) {
        if (arr[i] === arr[arr.length - 1 - i]) {
            console.log('yup');
        } else {
            return false;
        }
    }
    return true;
}
// verified!
console.log(isPalindrome([2, 4, 6, 6, 4, 2]));


SLList.prototype.isPalindrome = function () {
    if (this.head === null) {
        return false;
    }
    var stack = new Stack();
    var runner = this.head;
    while (runner) {
        stack.push(runner.data);
        runner = runner.next;
    }
    var checker = this.head;
    while (checker) {
        if (checker.data !== stack.pop()) {
            return false;
        }
        checker = checker.next;
    }
    return true;
}


// Prototypes (unverified)
SLList.prototype.partition = function(val) {
    var runner = head;
    // needs to account for runner.data < val!!
    while(runner.next) {
        if(runner.next.data < val) {
            var marker = runner.next;
            runner.next = marker.next;
            marker.next = head;
            head = marker;
        }
        runner = runner.next;
    }
}


SLList.prototype.secBiggest = function () {
    if (head === null) {
        return false;
    }
    var runner = head;
    var max = runner.data;
    var second;
    
    while (runner.next) {
        if (runner.next.data > max) {
            second = max;
            max = runner.next.data;
        }
        if (runner.next.data < max && runner.next.data > second || !second) {
            second = runner.next.data;
        }
        runner = runner.next;
    }
    return second;
}
// verified!
var waffle = new SLList(); waffle.push(59); waffle.push(42); waffle.push(1); waffle.push(32); waffle.push('pineapple'); waffle.push(13); waffle.push(28); waffle.push(54); waffle.push(100); waffle.push(3); waffle.secBiggest();
// edge case!
var waffle = new SLList(); waffle.push(1000); waffle.push('pineapple'); waffle.push(100); waffle.push(59); waffle.push(42); waffle.push(13); waffle.secBiggest();


// Sorts

function merge(left, right) {
    var l = r = 0;
    var arr = [];
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            arr.push(left[l]);
            l++;
        } else {
            arr.push(right[r]);
            r++;
        }
    }
    if (l == left.length) {
        arr = arr.concat(right.slice(r));
    } else {
        arr = arr.concat(left.slice(l));
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
