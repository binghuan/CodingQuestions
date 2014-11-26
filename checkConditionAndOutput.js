
// Case #1
var inputNumber = 100;


// Question: if value%3 is equal 0, then print "FIZZ"
// 			 if value%5 is equal 0, then print "BUZZ"
//			 if value%3 is equal 0 and value%5 is equal 0, then print "FIZZ&BUZZ"
// 			 for others, just print it out.


function checkConditionByRemainder(maxNumber) {
	for(var i =1; i< maxNumber; i++) {

		var conditionA = (i%3 ===0)?true:false;
		var conditionB = (i%5 ===0)?true:false;

		if( (conditionA === true) && (conditionB === true)) {
			console.log("FIZZ&BUZZ");
		} else if(conditionA === true) {
			console.log("FIZZ");
		} else if(conditionB === true) {
			console.log("BUZZ");
		} else {
			console.log(i);
		}
	}
}

checkConditionByRemainder(101);

