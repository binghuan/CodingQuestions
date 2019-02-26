
// Coding Question from "Oursky": Developer Pre-Test
// https://oursky.com/

/*
Write a function that takes two arrays as input, each array contains a list of A-Z; 
Your program should return True if the 2nd array is a subset of 1st array, or False if not.
For example:
isSubset([A,B,C,D,E], [A,E,D]) = true 
isSubset([A,B,C,D,E], [A,D,Z]) = false 
isSubset([A,D,E], [A,A,D,E]) = true


20190226@BH_Lin: 
    ## How to Solve

    for Solution 1: just check if string is exsited in array by using indexOf. 
    the time complexity is " O(n) "

    for Solution 2: create a mapping table by using key-value pairs. 
    the time complexity is " O(n + m) " --> m is the data set for comparison. 

*/

function isSubset(dataArray, confirmArray) {
    let result = true;

    let solutionIndex = 2;

    console.log("isSubset:", confirmArray, " in ", dataArray, confirmArray.length, "try solution: ", solutionIndex);

    // Solution 1:
    if(solutionIndex === 1) {
        for(let i =0; i < confirmArray.length; i++) {
            let item = confirmArray[i];
            if(dataArray.indexOf(item) === -1) {
                result = false; 
                break;
            }
        }
    } else if (solutionIndex === 2) {

        let table = {};

        for(let i =0; i< dataArray.length; i++) {
            let item = dataArray[i];
            table[item] = 1;
        }

        for(let j=0; j< confirmArray.length; j++) {
            let targetItem = confirmArray[j];
            if(!table.hasOwnProperty(targetItem)) {
                result = false;
                break;
            }
        }
    }

    console.log(">> isSubset: ", result);
    return result;    
}

isSubset(["A", "B", "C", "D", "E"], ["A", "E", "D"]);
isSubset(["A", "B", "C", "D", "E"], ["A", "D", "Z"]);
isSubset(["A", "D", "E"], ["A", "A", "D", "E"]);


