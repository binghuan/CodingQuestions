/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        let left = 1;
        let right = n;
        while (left < right) {// til right <= left

            let mid = left + parseInt((right - left) / 2);
            if (isBadVersion(mid) == true) {// if true , move right pointer to left.
                right = mid;
            } else {// if false, move left pointer to right.
                left = mid + 1;
            }
        }

        return left;
    };
};