/**
 * @param {number} capacity
 */

let map = new Map();
let valueArray = [];
let maxCap = 0;
let actionNo = 0;
const DBG = false;

var LRUCache = function (capacity) {
    actionNo = 0;
    myMap = new Map();
    map.clear()
    maxCap = capacity;
    valueArray = [];
    if (DBG) console.log("#", actionNo, "Init with capacity", capacity);
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

    actionNo += 1;
    let result = map.get(key);
    if (result == null) {
        result = -1;
    } else {
        cleanUpValueArray(key);
    }
    if (DBG) console.log("#", actionNo, "get", key, "-> ", result);
    if (DBG) console.log(map);
    if (DBG) console.log("values:", valueArray);

    return result;

};

function binarySearch(arr, val) {
    var low = 0,
        high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt((low + high) / 2);
        if (val == arr[mid]) {
            return mid;
        } else if (val > arr[mid]) {
            low = mid + 1;
        } else if (val < arr[mid]) {
            high = mid - 1;
        }
    }
    return -1;
};

function cleanUpValueArray(key) {
    if (DBG) console.log(">> cleanValueArray", key);

    let targetIndex = binarySearch(valueArray.slice(0).sort((a, b) => {
        return a - b;
    }), key);

    if (targetIndex != -1) {
        for (let i = 0; i < valueArray.length; i++) {
            let theKey = valueArray[i];
            if (theKey == key) {
                valueArray.splice(i, 1);
                valueArray.push(theKey);
                break;
            }
        }
    } else {
        valueArray.push(key);
    }

    if (valueArray.length > maxCap) {
        let removedKey = valueArray.shift();
        map.delete(removedKey);
    }
    if (DBG) console.log("Values:", valueArray);
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    actionNo += 1;
    if (DBG) console.log("#", actionNo, "put", key, value);

    cleanUpValueArray(key);
    map.set(key, value)

    if (DBG) console.log("-->", valueArray);
    if (DBG) console.log(map);
};

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
// linkedList: https://leetcode.com/tag/linked-list/
