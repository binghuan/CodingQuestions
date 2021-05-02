/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    digits[digits.length-1] = digits[digits.length-1];
    
    let valueTakenToNextIndex = 1;
    
    for(let i =digits.length-1; i > -1; i--) {
        
        console.log("#", i , ":", digits[i]);
        if(valueTakenToNextIndex > 0) {
            digits[i] += valueTakenToNextIndex;
            console.log("plus ", valueTakenToNextIndex);
            valueTakenToNextIndex -=1;
        }
        
        if(digits[i] >= 10 ) {
            remaining = digits[i] - 10;
            digits[i] = remaining;
            console.log("set ", remaining);
            valueTakenToNextIndex +=1;
        }   
    }

    if(valueTakenToNextIndex > 0 ) {
        digits.unshift(1)
    }


    console.log("digits:", digits);


    return digits;
    
};