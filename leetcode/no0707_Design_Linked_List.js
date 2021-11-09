
const DBG = true;
let head = null;
var MyLinkedList = function () {
    if (DBG) console.log("+++ MyLinkedList");
    head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let result = -1;
    if (DBG) console.log("+++ Get Index:", index);

    let clone = head;
    let depth = 0;
    while (clone != null) {
        if (depth == index) {
            result = clone.val;
            break;
        }
        clone = clone.next;
        depth += 1;
    }

    if (DBG) console.log("-->", result);
    printLinkedList(head);
    return result;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    if (DBG) console.log("+++ addAtHead:", val);
    let newNode = {
        val: val,
        next: head
    };

    head = newNode;

    printLinkedList(newNode);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (DBG) console.log("+++ addAtTail:", val);
    let clone = head;
    while (clone != null) {
        if (clone.next == null) {
            clone.next = {
                val: val,
                next: null
            }
            break;
        } else {
            clone = clone.next;
        }
    }
    if (head == null) {
        head = {
            val: val, //
            next: null
        }
    }

    printLinkedList(head);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (DBG) console.log("+++ addAtIndex:", index, "val:", val);

    let clone = head;
    let depth = 0;
    let previous = null;
    let isHit = false;
    while (clone != null) {
        if (depth == index) {
            if (previous == null) {
                head = {
                    val: val,
                    next: clone
                }
            } else {
                previous.next = {
                    val: val,
                    next: clone
                }
            }

            isHit = true;
            break;
        }
        previous = clone;
        clone = clone.next;
        depth += 1;
    }

    if (isHit == false && depth >= index) {
        if (previous == null) {
            head = {
                val: val,
                next: null
            }
        } else {
            previous.next = {
                val: val,
                next: null
            }
        }

    }

    printLinkedList(head);

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (DBG) console.log("+++ deleteAtIndex:", index);
    let clone = head;
    let depth = 0;
    let previous = null;
    while (clone != null) {
        if (depth == index) {
            if (previous != null) {
                previous.next = clone.next
            } else {
                head = clone.next;
            }

            break;
        }
        previous = clone;
        clone = clone.next;
        depth += 1;
    }
    printLinkedList(head);
};

function printLinkedList(node) {
    let valArray = [];
    let nodesInString = "";
    while (node != null) {
        nodesInString += "->" + node.val;
        valArray.push(node.val);
        node = node.next;
    }
    if (DBG) console.log(nodesInString);
    if (DBG) console.log("LinkedList:", valArray);
    function createNode() {
        let val = valArray.shift();
        if (val != null) {
            return {
                val: val,
                next: createNode()
            }
        } else {
            return null;
        }
    }

    let newNode = createNode();
    head = newNode;
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */



function test(
    funArray,
    args
) {
    let obj = null;
    for (let i = 0; i < funArray.length; i++) {
        let funName = funArray[i];
        switch (funName) {
            case "MyLinkedList":
                obj = new MyLinkedList()
                break;
            case "get":
                obj.get(args[i][0]);
                break;
            case "addAtHead":
                obj.addAtHead(args[i][0]);
                break;
            case "addAtTail":
                obj.addAtTail(args[i][0]);
                break;
            case "addAtIndex":
                obj.addAtIndex(args[i][0], args[i][1]);
                break;
            case "deleteAtIndex":
                obj.deleteAtIndex(args[i][0]);
                break;
        }
    }
}

test(["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"],
    [[], [1], [3], [1, 2], [1], [1], [1]]);
// Expected Output: [ null,               null,           null,          null,    2,          null,          3]

// test(["MyLinkedList", "addAtHead", "deleteAtIndex"],
//     [[], [1], [0]]);

// test(["MyLinkedList", "addAtHead", "addAtHead", "addAtHead", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtTail", "get", "addAtHead", "addAtIndex", "addAtHead"],
//     [[],                    [7],        [2],        [1],        [3, 0],         [2],            [6],        [4],        [4],        [4],    [5, 0], [6]]);
// Expected output: 
// [null,                   null,       null,       null,       null,           null,           null,       null,       4,          null,   null,   null]

// test(["MyLinkedList", "addAtIndex", "addAtIndex", "addAtIndex", "get"],
//     [[], [0, 10], [0, 20], [1, 30], [0]]);

// test(["MyLinkedList", "addAtTail", "get"],
//     [[], [1], [0]]); // [null,null,1]

// test(["MyLinkedList", "addAtHead", "get", "addAtHead", "addAtHead", "deleteAtIndex", "addAtHead", "get", "get", "get", "addAtHead", "deleteAtIndex"],
//     [[], [4], [1], [1], [5], [3], [7], [3], [3], [3], [1], [4]]); // [null,null,-1,null,null,null,null,4,4,4,null,null]

// test(["MyLinkedList", "addAtIndex", "get"],
//     [[], [1, 0], [0]])// [null,null,-1]