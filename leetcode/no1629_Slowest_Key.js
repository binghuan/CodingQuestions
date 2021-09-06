/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {

    let keyTimes = [];
    for (let i = 0; i < releaseTimes.length; i++) {
        let diff = 0;
        let key = keysPressed[i];
        if (i == 0) {
            diff = releaseTimes[i];
        } else {
            diff = releaseTimes[i] - releaseTimes[i - 1];
        }
        keyTimes.push({
            key: key,
            diff: diff
        });
    }

    keyTimes.sort((a, b) => {
        if (b.diff == a.diff) {
            return b.key.charCodeAt(0) - a.key.charCodeAt(0)
        } else {
            return b.diff - a.diff;
        }
    })

    return keyTimes[0].key;
};