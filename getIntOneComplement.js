function getIntegerOneComplement(inputValue) {

	// 1st step. Decimal to binary
	var binaryString = convertIntegerToBinaryString(inputValue);


	// 2nd step. get one's complement
	var result = "";
	for(var i=0; i< binaryString.length; i++) {
		if(binaryString.charAt(i) === "0") {
			result = result + '1';
		} else {
			result = result + '0';
		}
	}

	console.log("--> getIntegerOneComplement: " + result);
	console.log("--> getIntegerOneComplement: " + parseInt( result, 2 ));
}

// the fast way
function instantGetOneComplementViaInteger(inputvalue) {
	var result = inputvalue >> 1;
	return result;
}

function convertIntegerToBinaryString(input) {
	temp = input;
	var result = "";
	var counter = 0;
	console.log(">>> Get one's complement from value " + input);

	do {
		var residue = (temp%2);


		result =  residue + result;
		temp = parseInt((temp/2));
		counter +=1;
		console.log("#" + counter + '->' + result);
	} while(temp > 0);

	return result;
}

//convertIntegerToBinaryString(10);
//convertIntegerToBinaryString(20);

getIntegerOneComplement(10);