var numArray = [1, 2, 3, 4, 2];

for(var i =0; i< numArray.length ; i++) {
	for(var j =0; j< numArray.length ; j++) {
	    if(i !==j && numArray[i] === numArray[j]) {
	        console.log('the number: ' + numArray[j] + ' got a same number in array.');
	    }
	}
}
