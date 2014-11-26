
// Back Trace
// Question:
// input a number  N
// here is a example for output.
// if N = 4
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2

var finalSum = 5;
var availableNum = [1,2];
function geSum(inputArray) {

	// Here is a method to accumulate each value in array.
	var total = inputArray.reduce(function(a, b) {
  		return a + b;
	});
	return total;
}

var resultString = "";

function checkSum(finalSum, availableNum, currentStack) {

	for (var i=0; i< availableNum.length; i++) {

		var newSumArray = currentStack.slice(0);// copy Number Array
		newSumArray.push(availableNum[i]);// try to add an available number

		if( finalSum === geSum(newSumArray)) {
			console.log(newSumArray);
			resultString += newSumArray + "<br>";
		} else if(finalSum > geSum(newSumArray)){
			checkSum(finalSum, availableNum, newSumArray);
		} else if(finalSum < geSum(newSumArray)){
			continue;
		}
	}
}

var stack = [];
//checkSum(finalSum, availableNum, stack);