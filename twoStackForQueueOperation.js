
var stackV = [];
var stackT = [];

var solution1 = {
	queue: function(inputValue) {
		console.log("+++QUEUE: ("+ inputValue+ ")");

		stackV.push(inputValue);

		console.log("==>", stackV);
	},
	dequeue: function() {

		var value;

		console.log("before dequeue: ", stackV, ", size=", stackV.length);

		var j = stackV.length;
		for(var i=0; i < j; i++) {
			stackT.push(stackV.pop());
			//console.log("stackT: ", i, stackT);
		}


		value = stackT.pop();

		for(var i=0; i< stackT.length; i++) {
			stackV.push(stackT.pop());
		}

		console.log("---DEQUEUE: ("+ value + ")");

		return value;
	}
}

console.log("### SOLUTION 1");
solution1.queue(1);
solution1.queue(2);
solution1.queue(3);
solution1.dequeue();
solution1.queue(4);
solution1.dequeue();

var stackL = [];
var stackH = [];

// stackL for lower base stack
// stackH for higher base stack
var solution2 = {

	queue: function(inputValue) {

		console.log("+++QUEUE: ("+ inputValue + ")");

		// order is high to low
		if(stackH.length > 0) {

			console.log("checkpoint3");

			var j = stackH.length;
			for(var i=0; i < j; i++) {
				stackL.push(stackH.pop());
			}

			stackL.push(inputValue);

		// order is hight to low
		} else {
			console.log("checkpoint4");
			stackL.push(inputValue);
		}

		console.log("==>", stackL);
	},
	dequeue: function() {

		var value;

		// order is high to low
		if(stackH.length > 0) {

			console.log("checkpoint1");
			value = stackH.pop();

			console.log("---DEQUEUE: ("+ value + ") <-" + stackH);

		// order is low to high
		} else {

			console.log("checkpoint2");
			var j = stackL.length;
			for(var i=0; i < j; i++) {

				if(i == j-1) {
					value = stackL.pop()
				} else {
					stackH.push(stackL.pop());
				}
			}

			console.log("---DEQUEUE: ("+ value + ") <-" + stackH);
		}


		return value;
	}
}

console.log("\n### SOLUTION 2");
solution2.queue(1);
solution2.queue(2);
solution2.queue(3);
solution2.dequeue();
solution2.queue(4);
solution2.dequeue();
solution2.dequeue();