/**
 * @param {number} k
 */
let data = [];
let size = 0;
let step = 0;
const DBG = false;
var MyCircularQueue = function (k) {
    step = 0;
    data = [];
    size = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    step += 1;
    if (DBG) console.log("#", step, "enQueue", data.length, `Size=${data.length}/${size}`, (data.length + 1) > size);
    let result = false;
    if ((data.length + 1) > size) {
        result = false;
    } else {
        data.push(value);
        result = true;
    }
    if (DBG) console.log("-->", result);
    return result;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    step += 1;
    if (DBG) console.log("#", step, "deQueue", data.length, `Size=${data.length}/${size}`);
    if (data.length <= 0) {
        if (DBG) console.log("-->", false);
        return false;
    }
    data.shift();
    if (DBG) console.log("-->", true);
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    step += 1;
    if (DBG) console.log("#", step, "Front", data.length, `Size=${data.length}/${size}`);
    let result = data[0];
    if (result == null) {
        result = -1;
    }
    if (DBG) console.log("-->", result);
    return result;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    step += 1;
    let result = data[data.length - 1];
    if (DBG) console.log("#", step, "Rear", data.length, `Size=${data.length}/${size}`);
    if (result == null) {
        result = -1;
    }
    if (DBG) console.log("-->", result);
    return result;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    step += 1;
    let result = (data.length <= 0);
    if (DBG) console.log("#", step, "isEmpty", data.length, `Size=${data.length}/${size}`);
    if (DBG) console.log("-->", result);
    return result;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    step += 1;
    let result = data.length >= size;
    if (DBG) console.log("#", step, "isFull", data.length, `Size=${data.length}/${size}`);
    if (DBG) console.log("-->", result);
    return result
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
