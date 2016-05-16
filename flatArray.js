// Q2: Write a function that will flatten an array of arbitrarily nested arrays of integers
// into a flat array of integers. e.g. [[1,2,[3]],4] → [1,2,3,4].
// If the language you're using has a function to flatten arrays,
// you should pretend it doesn't exist.

var input = [[1,2, [3]],4, [5,6,[7,8]]];
//var input = [];
var result = [];

function checkArrayDepth(array) {

	var currentLevelArray = [];

	for(var i = 0; i< array.length ; i++) {
		if(array[i].length > 0 ) {
			currentLevelArray = currentLevelArray.concat(checkArrayDepth(array[i]));
		} else {
			currentLevelArray.push(array[i]);
		}
	}

	return currentLevelArray;
}

console.log("input: ", input);

result = checkArrayDepth(input);
console.log("output: ", result);
