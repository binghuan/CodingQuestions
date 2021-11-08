/**
 * @param {number} k
 */
let data = [];
let size = 0;
let isReady = false;
let step = 0;
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
    console.log("#", step, "enQueue", data.length, `Size=${data.length}/${size}`, (data.length + 1) > size);
    let result = false;
    if ((data.length + 1) > size) {
        result = false;
    } else {
        data.push(value);
        result = true;
    }
    console.log("-->", result);
    return result;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    step += 1;
    console.log("#", step, "deQueue", data.length, `Size=${data.length}/${size}`);
    if (data.length <= 0) {
        console.log("-->", false);
        return false;
    }
    data.shift();
    console.log("-->", true);
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    step += 1;
    console.log("#", step, "Front", data.length, `Size=${data.length}/${size}`);
    let result = data[0];
    if (result == null) {
        result = -1;
    }
    console.log("-->", result);
    return result;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    step += 1;
    let result = data[data.length - 1];
    console.log("#", step, "Rear", data.length, `Size=${data.length}/${size}`);
    if (result == null) {
        result = -1;
    }
    console.log("-->", result);
    return result;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    step += 1;
    let result = (data.length <= 0);
    console.log("#", step, "isEmpty", data.length, `Size=${data.length}/${size}`);
    console.log("-->", result);
    return result;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    step += 1;
    let result = data.length >= size;
    console.log("#", step, "isFull", data.length, `Size=${data.length}/${size}`);
    console.log("-->", result);
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
