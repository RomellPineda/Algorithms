// fun with functions

function bsArray(arr, target) {
    console.log(arr);
    if (arr.length < 1) {
        return false;
    }

    let mid = Math.floor(arr.length / 2);
    console.log('mid = ' + mid);
    let lbound = 0;
    let rbound = arr.length;
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

function makeArrayN(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

function merge(left, right) {
    let l = r = 0;
    let arr = [];

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            arr.push(left[l]);
            l++;
        } else {
            arr.push(right[r]);
            r++;
        }
    }
    if (l === left.length) {
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
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

let sample = makeArrayN(20);
let test = mergeSort(sample);
bsArray(test, 25);

// extra creddy: proof larger array length results in high target acquisitions
