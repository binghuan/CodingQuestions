/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    function extractCharAndCount(inputString) {
        let index2append = 0;
        let result = [];

        for (let i = 0; i < inputString.length; i++) {

            let char = inputString[i];
            if (result[index2append] == null) {
                result.push({
                    key: char,
                    count: 1
                });
            } else {

                if (result[index2append].key == char) {
                    result[index2append].count += 1;
                } else {
                    index2append += 1;
                    result[index2append] = {
                        key: char,
                        count: 1
                    }
                }

            }
        }
        return result;
    }

    let A = extractCharAndCount(name);
    let B = extractCharAndCount(typed);

    if (A.length != B.length) {
        return false;
    }

    let result = true;
    for (let i = 0; i < A.length; i++) {
        if (B[i].key != A[i].key) {
            result = false;
            return false;
        } else if (B[i].count < A[i].count) {
            result = false;
            return false;
        }
    }
    return result;
};