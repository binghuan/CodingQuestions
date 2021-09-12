/*
 -- List of function to handle linkedList -- 

function genLinkedList() 
function printLinkedList(head) 
function reverseLinkedList(head) 
function moveToHead(head, targetVal) 
function removeSpecificValFromLinkedList(head, targetVal) 
function removeNthNodeFromLinkedList(head, n) 

*/

function genLinkedList() {
    let root = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: null
            }
        }
    };
    return root;
}

const DBG = true;

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
        result = curr.next;
        depth += 1;
    } else {
        while (curr != null && curr.next != null) {
            if (depth + 1 == n) {
                console.log(`${n} was found`);
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

// Test.
//reverseLinkedList(genLinkedList());
//removeSpecificValFromLinkedList(genLinkedList(), 2);
//removeSpecificValFromLinkedList(genLinkedList(), 1);
//removeSpecificValFromLinkedList(genLinkedList(), 3);
//removeNthNodeFromLinkedList(genLinkedList(), 2)
removeNthNodeFromLinkedList(genLinkedList(), 3)
//moveToHead(genLinkedList(), 2)