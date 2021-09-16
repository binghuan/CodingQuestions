/**
 * Initialize your data structure here.
 */
const DBG = false;
let data = [];
var MyQueue = function () {
    data = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (DBG) console.log(">> push", x);
    data.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    //let result = data.pop();
    let result = data.shift();
    if (DBG) console.log(">> pop", result);
    return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let result = data[0];
    if (DBG) console.log(">> peek", result);
    return result;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    let result = (data.length == 0);
    if (DBG) console.log(">> empty", result);
    return result;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */