

var input1 = "ICELANDIC";
var input2 = "BARBARIAN";

function firstNonRepeatingChar(word) {

	console.log(">> firstNonRepeatingChar: input - ___" + word + "___");

    var repeating = [];
    var nonRepeating = [];
    var index = [];

    for(var i=0; i< word.length; i++) {
        var letter = word.charAt(i);
        if(repeating.indexOf(letter) != -1) {
        	continue;
        }

        if(nonRepeating.indexOf(letter) != -1) {
        	for(var j=0; j< nonRepeating.length; j++) {
        		if(nonRepeating[j] === letter) {
        			nonRepeating.splice(j, 1);
        			index.splice(j,1);
        			break;
        		}
        	}

        	repeating.push(letter);
        } else {
        	nonRepeating.push(letter);
        	index.push(i);
        }
    }

    console.log(">> firstNonRepeatingChar: output - ___" + nonRepeating[0] + "___");

    return nonRepeating[0];
}

firstNonRepeatingChar(input1);
firstNonRepeatingChar(input2);