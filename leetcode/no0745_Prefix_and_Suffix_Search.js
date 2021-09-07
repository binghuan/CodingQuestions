/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
    console.log("WordFilter: ", words);
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
    console.log("prefix: ", prefix, "suffix:", suffix);
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
var obj = new WordFilter(["apple"]);
var param_1 = obj.f("a", "e")