/**
 * @param {number} capacity
 */

let map = new Map();
let maxCap = 0;
let actionNo = 0;
const DBG = true;
let linkedList = null;

var LRUCache = function (capacity) {
    if (DBG) console.log("Init LRUCache");
    actionNo = 0;
    myMap = new Map();
    map.clear()
    maxCap = capacity;
    linkedList = null;
    if (DBG) console.log("##", actionNo, "Init with capacity", capacity);
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

    actionNo += 1;
    let result = map.get(key);
    if (DBG) console.log("##", actionNo, "get", key, "-> ", result);
    if (result == null) {
        if (DBG) console.log(`key ${key} was not found`);
        result = { val: -1 };
    } else {
        let node = moveToHead(linkedList, result.key, result.val);
        map.set(key, node);
    }

    if (DBG) console.log(map);
    return result.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    actionNo += 1;
    if (DBG) console.log("##", actionNo, "put", key, value);
    if (map.get(key) == null) {
        let node = addNodeToHead(linkedList, key, value);
        map.set(key, node);
    } else {
        removeKeyFromLinkedList(linkedList, key, value);
        let node = addNodeToHead(linkedList, key, value);
        map.set(key, node);
    }
    if (map.size > maxCap) {
        let lastKey = removeNthNodeFromLinkedList(linkedList, maxCap + 1)
        console.log("lastKey = ", lastKey);
        map.delete(lastKey);
    }
    if (DBG) console.log(map);
};

function printLinkedList(head) {
    let valArray = [];
    while (head != null) {
        valArray.push(head.key);
        head = head.next;
    }
    if (DBG) console.log("Currnet => [", valArray.join("->"), "]");
}

function addNodeToHead(head, key, value) {
    if (DBG) console.log(">> addNodeToHead", value);
    let newNode = {
        val: value,
        key: key,
        next: head
    }

    linkedList = newNode;

    printLinkedList(linkedList);
    return newNode;
}


function removeKeyFromLinkedList(head, key) {
    if (DBG) console.log(">> removeKeyFromLinkedList", key);
    let result = head;
    let curr = head;
    if (curr != null && curr.key == key) {
        result = curr.next;
    } else {
        while (curr != null && curr.next != null) {
            if (curr.next.key == key) {
                if (DBG) console.log("Remove key=", curr.next.key);
                curr.next = curr.next.next;
            }
            curr = curr.next;
        }
    }
    printLinkedList(result);
    return result;
}

function moveToHead(head, key, targetVal) {
    if (DBG) console.log(">> moveToHead key: ", key, "value:", targetVal);
    // 1st remvoe element; 
    let node = removeKeyFromLinkedList(head, key);
    let result = {
        key: key,
        val: targetVal,
        next: node
    }

    printLinkedList(result);
    return result;
}

function removeNthNodeFromLinkedList(head, n) {
    if (DBG) console.log(">> removeNthNodeFromLinkedList", n);
    let result = head;
    let curr = head;
    let depth = 1;
    let lastKey = null;
    if (curr != null && depth == n) {
        lastKey = curr.key;
        result = curr.next;
        depth += 1;
    } else {
        while (curr != null && curr.next != null) {
            if (depth + 1 == n) {
                lastKey = curr.next.key;
                curr.next = curr.next.next;
                depth += 1;
            }
            curr = curr.next;
            depth += 1;
        }
    }
    printLinkedList(result);
    return lastKey;
}


function moveToHead(head, key, targetVal) {
    if (DBG) console.log(">> moveToHead key=", key);
    // 1st remvoe element; 
    let node = removeKeyFromLinkedList(head, key);
    let result = {
        key: key,
        val: targetVal,
        next: node
    }

    linkedList = result;

    printLinkedList(result);
    return result;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Test Case
let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1, [1->2]
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}, [3->1]
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

//[null,null,null,1,null,-1,null,-1,3,4]