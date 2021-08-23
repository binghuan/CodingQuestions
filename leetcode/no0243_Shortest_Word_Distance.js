/*
[LeetCode] 243. Shortest Word Distance 最短单词距离
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = 
“coding”
, word2 = 
“practice”

Output: 3

Input: word1 = 
"makes"
, word2 = 
"coding"

Output: 1

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/

/**
 * @param {String[]} words
 * @return {Number}
 */
var shortestDistance = function (words, word1, word2) {

    console.log("INPUT:", words, word1, word2);

    let index1 = -1;
    let index2 = -1;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word == word1) {
            index1 = i;
        }

        if (word == word2) {
            index2 = i;
        }
    }

    if (index2 < index1) {
        let temp = index2;
        index2 = index1;
        index1 = temp;
    }
    console.log("index:", index1, index2);

    distanceA = index2 - index1;
    distanceB = index1 + (words.length - index2);

    let result = -1;
    result = distanceA;
    // if(distanceB < distanceA) {
    //     result = distanceB;
    // }

    console.log("OUTPUT:", result);
    return result;

};

shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")
shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")