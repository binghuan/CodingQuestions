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

    let indexesA = [];
    let indexesB = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word == word1) {
            indexesA.push(i);
        }

        if (word == word2) {
            indexesB.push(i);
        }
    }

    let minDistance = null;
    let indexAandB = [];

    for (let i = 0; i < indexesA.length; i++) {

        let indexA = indexesA[i];

        for (let j = 0; j < indexesA.length; j++) {
            let indexB = indexesB[j];

            let diff = Math.abs(indexA - indexB);
            if (minDistance == null || diff < minDistance) {
                minDistance = diff;
                indexAandB = [i, j];
            }
        }

    }

    console.log("OUTPUT:", minDistance, indexAandB);
    return minDistance;

};

shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")
shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")
shortestDistance(["a", "a", "a", "b", "b", "b"], "a", "b")


/*

https://github.com/grandyang/leetcode/issues/243

class Solution {
public:
    int shortestDistance(vector<string>& words, string word1, string word2) {
        int idx = -1, res = INT_MAX;
        for (int i = 0; i < words.size(); ++i) {
            if (words[i] == word1 || words[i] == word2) {
                if (idx != -1 && words[idx] != words[i]) {
                    res = min(res, i - idx);
                }
                idx = i;
            }
        }
        return res;
    }
};

*/