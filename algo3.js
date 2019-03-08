// Predicting output

function a(x, y) {
    return 5;
}
console.log(a(5, 5));
// 5


function a(x, y) {
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2, 2)
console.log(b);
console.log(a(6, 8));
// 2,2,5; 6,8,5

function a(x) {
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
y = a(2);
y.push(5);
console.log(y);
// 2,2,5

function a(x) {
    if (x[0] < x[1]) {
        return true;
    }
    else {
        return false;
    }
}
b = a([2, 3, 4, 5]);
console.log(b);
// true

function a(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = 'Coding';
        }
    }
}
console.log(a([1, 2, 3, 4]));
// [coding, coding, coding, coding]

function a(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 5) {
            x[i] = 'Coding';
        }
        else if (x[i] < 0) {
            x[i] = 'Dojo';
        }
    }
}
console.log(a([5, 7, -1, 4]));
// [5, coding, dojo, 4]

function a(x) {
    if (x[0] > x[1]) {
        return x[1];
    }
    return 10;
}
b = a([5, 10])
console.log(b);
// 10

function sum(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
// function not called


// Completing code


// Analyze an array’s values and return the average of its values.
function printAverage(x) {
    sum = 0;
    // your code here
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum / x.length;
}

// Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddArray() {
    // your code here
    arr = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 === 1) {
            arr.push(i);
        }
    }
}

// Square each value in a given array, returning that same array with changed values.
function squareValue(x) {
    // your code here
    x = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
        x.push(arr[i]);
    }
}