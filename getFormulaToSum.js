console.log("@BH_Lin 20140330");

/*

there is an number array is available, the the programmer need to get a formula to commit the required sum.
if that's is impossible, please return -1;
EX1: {1,3,5}, S= 11
Anser: 3; --> 3 =  5+5+1
EX2: {5, 5, 5, 5, 5, 5}, S=11
Answer: -1;

1+1 
1+3
1+5

1+1+1
1+1+3
1+1+5
1+3+1
1+3+3
1+3+5
1+5+1
1+5+3
1+5+5

1+1+1+1
*/

var i;
var sum = 11;
var numberArray = [5,5,5];
//var numberArray = [1,3,5];
//var numberArray = [1,2,3,4,5];
var arrayLength = numberArray.length;

var j;
var sumArray = [];
for(j =0; j< arrayLength ; j++) {

    sumArray[j] = numberArray[j];

    console.log("----> round : " + j);
    var m;
    for(m = 0 ; m < (j+1) ; m++) {
        var preSum = 0;
        var k;
        for(k=0; k< sumArray.length + 1 ; k++ ) {
            //sumArray.push(numberArray[m]);
            sumArray[m + 1] = numberArray[k];
            console.log("### " + sumArray);    
            var preSum = sumArray.reduce(function(pv, cv) { return pv + cv; }, 0);
            numStr = sumArray.toString().replace(/\,/g," + ");
            console.log("> Try " + numStr + " + ? = " + sum);
            
            for(i=0; i< numberArray.length; i++ ) {
                if(numberArray[i] != undefined) {
                    var result = sumArray.reduce(function(pv, cv) { return pv + cv; }, 0);
                    result += numberArray[i];
                    //console.log("sum = " + result);
                    if( result === sum) {
                        console.log("OK: " + numStr + " + " + numberArray[i] + " = " + result + " == " + sum);
                        return;
                    } else if (result > sum) {
                        console.log("can not get the formula!");
                        return;
                    } else {
                        console.log("NG: " + numStr + " + " + numberArray[i] + " = " + result + " != " + sum);
                    }
                }
            }
        }
    }
}


