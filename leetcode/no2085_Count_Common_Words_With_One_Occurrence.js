/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {

    function generateMap(words) {
        let map = {};
        words.forEach((word) => {

            if (map[word] == null) {
                map[word] = 1;
            } else {
                map[word] += 1;
            }
        })
        return map;
    }

    map1 = generateMap(words1);
    map2 = generateMap(words2);

    let count = 0;
    let keys = Object.keys(map1);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (map1[key] == map2[key] && map1[key] == 1) {
            count += 1;
        }
    }

    return count;
};