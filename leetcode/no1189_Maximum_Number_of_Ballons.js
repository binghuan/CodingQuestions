/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    // balloons
    let balloonsMap = {
        "b": 1,
        "a": 1,
        "l": 2,
        "o": 2,
        "n": 1

    };

    let map = {};
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (map[char] == null) {
            map[char] = 1;
        } else {
            map[char] += 1;
        }
    }

    let keys = Object.keys(map);
    let isCharEnough = true;
    let output = 0;

    while (isCharEnough) {
        let checked = 0;
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (balloonsMap[key] == null) {
                continue;
            }
            let count = map[key];
            let base = balloonsMap[key];
            if (count >= base) {
                count -= base;
                map[key] = count;
                checked += 1;
            } else {
                isCharEnough = false;
            }
        }
        if (checked == 5) {
            if (isCharEnough) {
                output += 1;
            }
        } else {
            isCharEnough = false;
        }
    }
    return output;
};


//maxNumberOfBalloons("nlaebolko");
maxNumberOfBalloons("hpitp");
