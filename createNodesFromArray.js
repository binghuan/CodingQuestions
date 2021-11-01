let intArray = [1, 2, 3, 4, 5];

function createNode() {
    let value = intArray.shift();
    if (value != null) {
        return {
            val: value,
            next: createNode()
        }
    } else {
        return null;
    }
}

let node = createNode();
console.log(node);

let linkedVal = "";
while (node != null) {
    //console.log("node:", node.val);
    linkedVal += "->" + node.val
    node = node.next;
}

console.log(linkedVal);

