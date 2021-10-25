/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {

	let arrByOrder = [];
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		arrByOrder.push({
			value: num,
			index: i
		});
	}

	arrByOrder.sort((a, b) => {
		return a.value - b.value
	})

	let result = [];
	for (let j = 0; j < arr.length; j++) {

		let num = arr[j];
		let size = arrByOrder.length
		for (let i = size - 1; i > -1; i--) {

			let numObj = arrByOrder[i];
			if (numObj.index > j) {
				result.push(numObj.value);
				break;

			} else {
				arrByOrder.pop();
			}
		}

	}
	result.push(-1);
	return result;
};


// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

replaceElements([17, 18, 5, 4, 6, 1])