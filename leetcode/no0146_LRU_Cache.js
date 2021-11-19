// type LinkNode struct{
//     key, value int
//     pre, next *LinkNode
// }

// type LRUCache struct {
//     m map[int]*LinkNode
//     capacity int
//     head, tail *LinkNode
// }

let map = new Map();
let cachedHead = null;
let cachedTail = null;
let maxCapacity = 0;
let output = [];
const DBG = true;

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    if (DBG) console.log("+++ init: LRUCache with capacity:", capacity);
    maxCapacity = capacity;
    map.clear();
    cachedHead = {
        key: null,
        value: null,
        next: null,
        previous: null
    }

    cachedTail = {
        key: null,
        value: null,
        next: null,
        previous: null
    }

    cachedHead.next = cachedTail;
    cachedTail.previous = cachedHead;
    if (DBG) console.log("return", null);
    output.push(null);
};

function printNodes() {
    if (!DBG) {
        return;
    }
    if (DBG) console.log("--- printNodes ---");
    let node = cachedHead;
    let result = "";
    while (node != null) {
        if (node.value != null) {
            result = result + "->" + node.value;
        }
        node = node.next;
    }

    if (DBG) console.log("linkedList:[START]->", result, "[END]");
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (DBG) console.log("+++ get:", key);
    let value = -1;
    let node = map.get(key);
    if (node != null) {
        moveToHead(node);
        value = node.value;
    }
    output.push(value);
    if (DBG) console.log("return", value, output);
    printNodes();

    return value;
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (DBG) console.log("+++ put:", key);
    let node = map.get(key);
    if (node != null) {
        node.value = value;
        moveToHead(node);
    } else {
        let newNode = {
            previous: null,
            next: null,
            key: key,
            value: value
        }
        if (DBG) console.log("map.size:", map.size);
        map.set(key, newNode);
        addNode(newNode);
        if (map.size > maxCapacity) {
            if (DBG) console.log("!!!!!! checkpoint");
            let keyOnTail = cachedTail.previous.key;
            if (DBG) console.log("cachedTail.previous.key:", keyOnTail);
            if (keyOnTail != null) {
                map.delete(keyOnTail);
                removeNode(cachedTail.previous);
            }
        }
    }

    output.push(null);
    if (DBG) console.log("return", null, output);

    printNodes();
};

function moveToHead(node) {
    removeNode(node)
    addNode(node)
}

function removeNode(node) {
    //console.log("removeNode:", node);
    node.previous.next = node.next;
    node.next.previous = node.previous;
}

function addNode(node) {
    node.previous = cachedHead;
    node.next = cachedHead.next;

    cachedHead.next = node;
    node.next.previous = node;
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
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

// Reference: https://josephjsf2.github.io/data/structure/and/algorithm/2020/05/09/LRU.html
// https://www.gushiciku.cn/pl/pFvk/zh-tw?utm_source=pocket_mylist
// linkedList: https://leetcode.com/tag/linked-list/
