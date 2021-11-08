/*
 -- List of function to handle linkedList -- 
function genLinkedList() 
function printLinkedList(head) 
function reverseLinkedList(head) 
function moveToHead(head, targetVal) 
function removeValFromLinkedList(head, targetVal) 
function removeNthNodeFromLinkedList(head, n) 
*/

const DBG = true;

function createNodeFromArray(arr) {
    let elements = arr;
    function createNode() {
        let element = elements.shift();
        if (element != null) {
            return {
                val: element,
                next: createNode()
            }
        } else {
            return null;
        }
    }
    return createNode();
}

function genLinkedList() {
    let nums = [1, 2, 3];
    return createNodeFromArray(nums);
}

function printLinkedList(head) {
    let valArray = [];
    while (head != null) {
        valArray.push(head.val);
        head = head.next;
    }
    if (DBG) console.log("=>", valArray.join("->"));
}

function reverseLinkedList(head) {
    if (DBG) console.log(">> reverseLinkedList");
    let prev = null;
    let next = null;
    let curr = head;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;

        // move to next node
        curr = next;
    }
    printLinkedList(prev);
    return prev;
};

function removeValFromLinkedList(head, targetVal) {
    if (DBG) console.log(">> removeValFromLinkedList", targetVal);
    let result = head;
    let curr = head;
    if (curr != null && curr.val == targetVal) {
        result = curr.next;
    } else {
        while (curr != null && curr.next != null) {
            if (curr.next.val == targetVal) {
                if (DBG) console.log("Remove val=", curr.next.val);
                curr.next = curr.next.next;
            }
            curr = curr.next;
        }
    }
    printLinkedList(result);
    return result;
}

function removeNthNodeFromLinkedList(head, n) {
    if (DBG) console.log(">> removeNthNodeFromLinkedList", n);
    let result = head;
    let curr = head;
    let depth = 1;
    if (curr != null && depth == n) {
        if (DBG) console.log(`Check Depth#${depth + 1}: ${curr.val}`);
        result = curr.next;
        depth += 1;
    } else {
        while (curr != null && curr.next != null) {
            if (DBG) console.log(`Check Depth#${depth + 1}: ${curr.val}`);
            if (depth + 1 == n) {
                if (DBG) console.log(`${n} was found`);
                curr.next = curr.next.next;
                depth += 1;
            }
            curr = curr.next;
            depth += 1;
        }
    }
    printLinkedList(result);
    return result;
}

function moveToHead(head, targetVal) {
    if (DBG) console.log(">> moveToHead", targetVal);
    // 1st remvoe element; 
    let node = removeValFromLinkedList(head, targetVal);
    let result = {
        val: targetVal,
        next: node
    }

    printLinkedList(result);
    return result;
}

function moveToHeadV2(head, targetVal) {
    if (DBG) console.log(">> moveToHeadV2", targetVal);
    let curr = head;

    // Q: How to cut the link to previous node.
    let previousNode = null;
    let topNode = null;
    let next = null;
    while (curr != null && curr.next != null) {

        if (curr.next.val == targetVal) {
            next = curr.next
            topNode = next;
            curr.next = curr.next.next;
            console.log("topNode:");
            printLinkedList(topNode)
            console.log("curr:");
            printLinkedList(curr)
            break;
        }

        previousNode = curr;
        curr = curr.next;
    }

    console.log("OUTPUT");
    printLinkedList(topNode);
    return topNode;
}

// Test.
//reverseLinkedList(genLinkedList());
removeValFromLinkedList(genLinkedList(), 2);
//removeValFromLinkedList(genLinkedList(), 1);
//removeValFromLinkedList(genLinkedList(), 3);
//removeNthNodeFromLinkedList(genLinkedList(), 2)
//removeNthNodeFromLinkedList(genLinkedList(), 3)
//moveToHead(genLinkedList(), 2)
//moveToHeadV2(genLinkedList(), 3)
//moveToHeadV2(genLinkedList(), 2)
//printLinkedList(genLinkedList());