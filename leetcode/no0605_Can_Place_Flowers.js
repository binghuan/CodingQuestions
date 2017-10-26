/*
605. Can Place Flowers

Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
Note:
The input array won't violate no-adjacent-flowers rule.
The input array size is in the range of [1, 20000].
n is a non-negative integer which won't exceed the input array size.
*/


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    var DBG = false;

    var count = 0;
    var flag = 0;
    var pos1 = -1;
    var pos2 = -1;
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 1 || 
            (flowerbed[i] != 1 && i == flowerbed.length - 1)) {
                if(flowerbed[i] != 1 && i == flowerbed.length - 1) {
                    i = i+2;
                }

            pos2 = i;
            if (pos1 == -1) {
                pos1 = -2;
            }
            if (DBG) console.log(pos1, pos2);
            var len = pos2 - pos1 + 1;
            if (DBG) console.log(len);
            len -= 4;
            if (DBG) console.log(len);
            if (len > 0) {
                count += parseInt((len / 2).toFixed(0));
            }

            pos1 = i;

        }
        if (DBG) console.log("count --> ", count);
    }

    console.log("ANS:", count, (count >= n));
    return (count >= n);
};