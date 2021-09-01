/**
 * initialize your data structure here.
 */
let DBG = false;
let data = [];

var MinStack = function () {
    data = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (DBG) console.log("push", val);
    data.push(val);
    console.log(data);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (DBG) console.log("pop");
    data.pop();
    console.log(data);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (DBG) console.log("top");
    console.log(data);
    return data[data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let result = null;

    let sortedData = data.slice(0);
    sortedData.sort((a, b) => {
        return a - b;
    })
    if (sortedData.length > 0) {
        result = sortedData[0];
    }

    if (DBG) console.log("getMin", result, "from", data);
    return result;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
