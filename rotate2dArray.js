var array1 = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
]; // init
var array2 = [
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"]
]; // init
var tArray = []; // temp.

for (var i = 0; i < array2.length; i++) {
	console.log("Original: ", array1[i]);
}

for (var i = 0; i < array1.length; i++) {
    tArray = array1[i]; // store a line
    var y = array1.length - i - 1;
    var n =0;
    for (var x = array1.length -1  ; x >=  0; x--) {
		array2[x][i] = tArray[n];
		console.log("set: ", i, x , tArray[n]);
		n +=1;
    }
}

for (var i = 0; i < array2.length; i++) {
	console.log("Output: ", array2[i]);
}
