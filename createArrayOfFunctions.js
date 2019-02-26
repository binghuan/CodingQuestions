// // Coding Question from "Oursky": Developer Pre-Test
// // https://oursky.com/

/*

Please explain what is the bug in the following Javascript function, 
and how to correct it.

function createArrayOfFunctions(y) {
  var arr = [];
  for(var i = 0; i<y; i++) {
    arr[i] = function(x) { return x + i; }
  }
return arr; }

*/

function createArrayOfFunctions(y) {
    var arr = [];
    for (var i = 0; i < y; i++) {
        let inputI = i;
        arr[i] = function (x) {
            console.log("input:", x, inputI);
            return x + inputI;
        }
    }
    console.log(arr);
    return arr;
}


// test. 
let arrayOfFunctoins = createArrayOfFunctions(10);
let cal = arrayOfFunctoins[0];
console.log("output:", cal.call(null, 1));