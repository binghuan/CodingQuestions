
let head = null;

var MyLinkedList = function () {
    console.log(">> MyLinkedList");
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let result = null;
    console.log(">> Get Index:", index);

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

    console.log("-->", result);
    printLinkedList(head);
    return result;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    console.log(">> addAtHead:", val);
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
    console.log(">> addAtTail:", val);
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

    printLinkedList(head);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    console.log(">> addAtIndex:", index, "val:", val);

    let clone = head;
    let depth = 0;
    let previous = null;
    while (clone != null) {
        if (depth == index) {
            
            break;
        }
        previous = clone;
        clone = clone.next;
        depth += 1;
    }

    printLinkedList(head);

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    console.log(">> deleteAtIndex:", index);
};

function printLinkedList(node) {
    let valArray = [];
    let nodesInString = "";
    while (node != null) {
        nodesInString += "->" + node.val;
        valArray.push(node.val);
        node = node.next;
    }
    console.log(nodesInString);
    console.log("LinkedList:", valArray);
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