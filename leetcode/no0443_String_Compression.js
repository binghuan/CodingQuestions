
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let last = null;
    let counter = 0;
    let ans = [];
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        if (last == null || last == char) {
            counter += 1;
            last = char;
        } else {
            ans.push(last);
            if (counter > 1 && counter < 10) {
                ans.push(counter.toString());
            } else if (counter >= 10) {
                String(counter).split("").forEach((item) => {
                    ans.push(item)
                })
            }
            last = char;
            counter = 1;
        }
    }

    if (counter > 0) {
        ans.push(last);
        if (counter > 1 && counter < 10) {
            ans.push(counter.toString());
        } else if (counter >= 10) {
            String(counter).split("").forEach((item) => {
                ans.push(item)
            })
        }
    }
    for (let i = 0; i < ans.length; i++) {
        chars[i] = ans[i]
    }
    return ans.length;
};