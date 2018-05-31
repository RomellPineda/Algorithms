// Predicting outputs

  function multiply(x,y){
      console.log(x);
      console.log(y);
  }
  multiply(2,3);
  console.log(multiply(2,3));
  // 2,3,2,3

  function multiply(x,y){
      return x*y;
  }
  multiply(2,3);
  console.log(multiply(3,4));
  // 6,12

  var x = [1,2,3,4,5,10];
  for(var i=0; i<5; i++)
  {
    i = i + 3; 
    console.log(i);
  }
  // 3,7

  x=15;
  console.log(x);
  function awesome(){
      x=10;
      console.log(x);
  }
  console.log(x);
  awesome();
  console.log(x);
  // 15,15,10,10

  for(var i=0; i<15; i+=2){
    console.log(i);
  }
  for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){       
        console.log(i*j);
    }
  }
  // 0,2,4,6,8,10,12,14

  function looping(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<x; j++){         
            console.log(i*j);
        } 
    }
  }
  z = looping(3,3);
  console.log(z);
  // 0,0,0,1,0,2

  function looping(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){         
          console.log(i*j);
        } 
    }
    return x*y;
  }
  z = looping(3,5);
  console.log(z);
  // 0,0,0,0,1,2,0,2,4


// Completing the following code

  function printUpTo(x){
    // your code here
    for(var i = 1; i <= x; i++){
      if(x < 0){
        return false;
      }
      console.log(i);
    }

  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false


  function printSum(x){
    sum = 0;
    //your code here
    for(var i = 0; i < x; i++){
      console.log(i);
      sum = sum + i;
      console.log(sum);
    }
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32385


  function printSumArray(x){
    sum = 0;
    for(var i=0; i<x.length; i++) {
      //your code here
      for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
      }
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6