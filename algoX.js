// Experimental algorithms

function isPalindrome(arr) {
    for(var i = 0; i < Math.floor(arr.length); i++) {
        if(arr[i] === arr[arr.length - 1 - i]) {
            console.log('yup');
        } else {
            return false;
        }
    }
    return true;
}
// verified
console.log(isPalindrome([2,4,6,6,4,2]));


SLList.prototype.isPalindrome = function() {
    if(this.head === null) {
        return false;
    }
    var stack = new Stack();
    var runner = this.head;
    while(runner) {
        stack.push(runner.data);
        runner = runner.next;
    }
    var checker = this.head;
    while(checker) {
        if(checker.data !== stack.pop()) {
            return false;
        }
        checker = checker.next;
    }
    return true;
}

function merge(left, right){
    var l = r = 0;
    var arr = [];
    while(l < left.length && r < right.length){
      if(left[l] < right[r]){
        arr.push(left[l]);
        l++;
      } else {
        arr.push(right[r]);
        r++;
      }
    }
    if(l == left.length){
      arr = arr.concat(right.slice(r));
    } else {
      arr = arr.concat(left.slice(l));
    }
    return arr;
  }
  
  function mergeSort(arr){
    if(arr.length === 1){
      return arr;
    }
    var mid = Math.floor(arr.length/2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }