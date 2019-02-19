// my recursive binary search algo for sorted array
// may fail outside of javascript for exceeding array index bounds
// accounted for .slice() 2nd parameter exclusivity and arr[mid] assessment redundancy

function bsArray(arr, target) {
    console.log(arr);
    if (arr.length < 1) {
        return false;
    }

    var mid = Math.floor(arr.length / 2);
    console.log('mid = ' + mid);
    var lbound = 0;
    var rbound = arr.length;
    console.log('rbound = ' + rbound);

    if (target === arr[mid]) {
        return {
            'result': true,
            'acquired': arr[mid]
        };
    }

    if (target < arr[mid]) {
        return bsArray(arr.slice(lbound, mid), target);
    } else {
        return bsArray(arr.slice(mid + 1, rbound), target);
    }
}

// when arr.length = 1, for example [5], & arr.slice(0,0) is called empty array [] is returned again due to .slice() 2nd parameter exclusivity
// also calling arr.slice(1,rbound) on [5] results in []

// proof of .slice() functionality
// let x = [1];
// let y = x.slice(0);
// console.log(y);

// y = x.slice(0,0);
// console.log(y);
// console.log(y.length);