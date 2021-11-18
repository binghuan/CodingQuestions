/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */

const DBG = false;
let theIterator = null;
let dataOnHold = [];
var PeekingIterator = function (iterator) {
    theIterator = iterator;
    dataOnHold = [];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
    if (DBG) console.log("peek:", dataOnHold);
    let temp = dataOnHold.shift();
    if (temp != null) {
        dataOnHold.push(temp);
        console.log("a-->", temp);
        return temp;
    }

    temp = theIterator.next();
    dataOnHold.push(temp);
    if (DBG) console.log("b-->", temp, dataOnHold);
    return temp;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
    if (DBG) console.log("next:", dataOnHold);
    let temp = dataOnHold.shift();
    if (temp != null) {
        if (DBG) console.log("-->", temp);
        return temp;
    }

    temp = theIterator.next();
    if (DBG) console.log("-->", temp);
    return temp;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
    if (DBG) console.log("hasNext:");

    if (dataOnHold.length > 0) {
        return true;
    }

    let hasNext = theIterator.hasNext();
    if (DBG) console.log("hasNext:", hasNext);
    return hasNext;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
