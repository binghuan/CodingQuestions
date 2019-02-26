// // Coding Question from "Oursky": Developer Pre-Test
// // https://oursky.com/

// /*
// Write a function that takes an array of integers as input. 
// For each integer, output the next fibonacci number. 
// Solution that work both cpu and memory efficient are appreciated.
// Fibonacci number of Fn is defined by:

//     Fn = Fn-1 + Fn-2 F1 = 1, F2 = 1

// For example: nextFibonacci([1,22,9])

// Output: 
//     2
//     34
//     13

// Explanation: 
//     2 is the next fibonacci number great than 1. 
//     The fibonacci number after 9 is 13, and after 22 is 34.

// */




// let nextFibonacci = function (dataArray) {

//     let result = [];

//     let mappinTable = [];

//     for (let i = 0; i < dataArray.length; i++) {
//         mappinTable[i] = {
//             index: i,
//             value: dataArray[i],
//             nextFibonacci: null
//         };
//     }

//     // 1st, sort the dataArray. 
//     dataArray = dataArray.sort(function (a, b) {
//         return b - a
//     })

//     // 2nd, setup position number 
//     let positionNumber = null;

//     let number = 1;
//     let numArray = [0];
//     numArray.push(number);

//     // main function. 
//     let i = 0;
//     while (true) {

//         if (positionNumber == null) {
//             if (dataArray.length === 0) {
//                 break;
//             }
//             positionNumber = dataArray.pop();
//         }

//         let lastOne = numArray.pop();
//         let lastTwo = numArray.pop();
//         let sum = 0;

//         if (lastTwo != null) {
//             sum = lastOne + lastTwo;
//             numArray.push(lastTwo);
//         } else {
//             sum = lastOne;
//         }
//         number = sum;
//         numArray.push(lastOne);
//         numArray.push(number);
//         //console.log("check: ", sum, positionNumber);
//         let isMatched = false;
//         if (sum > positionNumber) {
//             result.push(sum);
//             for (let i = 0; i < mappinTable.length; i++) {
//                 let item = mappinTable[i];
//                 //console.log("before check item", item, positionNumber, item.value == positionNumber);
//                 if (item.value == positionNumber) {
//                     item.nextFibonacci = sum;
//                     mappinTable[i] = item;
//                     //console.log("after check item", item);
//                 }
//             }

//             positionNumber = null;
//         }
//     }

//     // console.log(result);
//     // console.log(mappinTable);

//     // print out the result 
//     for (let i = 0; i < mappinTable.length; i++) {
//         console.log(mappinTable[i].nextFibonacci);
//     }

//     return result;
// }

// nextFibonacci([1, 22, 9]);