// 1 Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggie(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'BIG';
        }
    }
    return arr;
}

// 2 Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
        if(arr[i] > high){
            high = arr[i];
        }
    }
    console.log(low);
    console.log(high);
}

// 3 Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
function oneAnother(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            return arr[i];
        }
    }
    console.log(arr[arr.length - 2]);
}

// 4  Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubleVision(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i] * 2);
    }
    return newarr;
}

// 5 Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPos(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr.pop();
    arr.push(count);
    return arr;
}

// 6 Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function evensOdds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1 && arr[i+1] % 2 === 1 && arr[i-1] % 2 === 1){
            console.log("That's odd!");
        }
        if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i-1] % 2 === 0){
            console.log("Even more so!");
        }
    }
}

// 7 Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function incSec(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    console.log(arr);
    return arr;
}

// 8 You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function prevLength(arr){
    for(var i = 0; i < arr.length; i++){
        if arr[i] !== integer
            arr[i+1] = arr[i].length;
    }
    return arr;
}

// 9  Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function sevenMost(){
    var arrnew = [];
    for(var i = 1; i < arr.length; i++){
        arrnew.push(arr[i] + 7);
    }
    return arrnew;
}

// 10 Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr){
    for(var i = 0; i < arr.length / 2; i++){
        var temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// 11 Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function    outNeg(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
            newarr.push(arr[i]);
        }
        else newarr.push(arr[i]);
    }
    return newarr;
}

// 12 Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
        }
        else count++;
    }
    if(count == arr.length){
        console.log("I'm hungry")
    }
}

// 13 Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapCenter(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    var temp = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp;
    return arr;
}

// 14 Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleArray(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}