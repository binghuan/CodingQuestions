/*
167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
var twoSum = function(intArray, target) {
    var DBG = false;

    var ans = [];
    var numbers = intArray.filter( onlyUnique ); // returns ['a', 1, 2, '1']
    if(DBG)console.log(":: numbers: ", numbers);

    var value1 = null;
    var value2 = null;

    // SP Case.
    if(numbers.length == 2) {
        ans = [1,2];
        console.log(JSON.stringify(ans));
        return ans;
    }

    for(var i =0; i< numbers.length; i++) {
        //console.log("try ", numbers[i] );
        for(var j = i+1; j< numbers.length; j++) {

            //console.log("try ", numbers[i] , " + ", numbers[j]);
            if(numbers[i] + numbers[j] === target) {
                value1 = numbers[i];
                value2 = numbers[j];
                break;
            }
        }
    }

    if(value1 == null && value2 == null) {
        for(var i =0; i< intArray.length; i++) {
            for(var j = i+1; j< intArray.length; j++) {
                if(intArray[i] + intArray[j] === target) {
                    ans = [i+1,j+1];
                    console.log(JSON.stringify(ans));
                    return ans;
                }
            }
        }
    }

    if(DBG)console.log(value1, value2);
    var index1 = intArray.indexOf(value1) +1;
    var index2 = intArray.indexOf(value2) +1;
    ans.push(index1, index2);

    //console.log("index1=" + index1 + ", index2=" + index2);
    console.log(JSON.stringify(ans));
    return ans;
};