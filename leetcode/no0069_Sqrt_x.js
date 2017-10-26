/*
69. Sqrt(x)

Implement int sqrt(int x).

Compute and return the square root of x.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    console.log("Input: ", x);

    if(x === 0 ) {
        return 0;
    } else if( x=== 1) {
        return 1;
    }
    
    
    
    var powTime = 0;
    for(var i =0; i< x; i++) {
        if(x > Math.pow(10, i)*Math.pow(10, i)) {
            powTime = i;
        } else {
            break;
        }
    }

    console.log("Get powN: ", powTime, " --> ", Math.pow(10, powTime));
    
    var result = 0;
    for(var i = Math.pow(10, powTime); i< x; i++) {
        var r = i*i;
        //console.log("try", i ," * ", i , " ==> ", r, x>= r);
        if( x === r) {
            result = i;    
            console.log("1ANS: ", result);
            return i;
        }
        
        if( x>= r) {
            result = i;    
        } else {
            break;
        }
    }
    
    console.log("2ANS: ", result);
    return result;
};

