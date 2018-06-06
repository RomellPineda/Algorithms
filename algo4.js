// Creating functions

// 1 Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThan(arr, Y){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > Y){
			count++;
		}
	}
	console.log(count)
}

// 2 Given an array, print the max, min and average values for that array.
function maxMinAve(arr){
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
		if(arr[i] < min){
			min = arr[i];
		}
		sum = sum + arr[i];
	}
	var ave = sum / arr.length;
	var result = [max, min, ave]
	console.log(result);
}

// 3 Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function noNegatives(arr){
	var newarr = arr;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = "Dojo";
		}
	}
	console.log(newarr);
}
