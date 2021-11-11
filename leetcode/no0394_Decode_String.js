/**
 * @param {string} s
 * @return {string}
 */
var decodelet = function (s) {

    let t = "";
    let s_num = [];
    let s_str = [];
    let cnt = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] >= '0' && s[i] <= '9') {
            cnt = 10 * cnt + s[i] - '0';
        } else if (s[i] == '[') {
            s_num.push(cnt);
            s_str.push(t);
            cnt = 0; t = "";
        } else if (s[i] == ']') {
            let k = s_num[0]; s_num.pop();
            for (let j = 0; j < k; ++j) {
                s_str[0] += t;
            }
            t = s_str[0]; s_str.pop();
        } else {
            t += s[i];
        }
    }
    return s_str.trim().length == 0 ? t : s_str[0];
};

(decodeString("3[a]2[bc]") == "aaabcbc") ? console.log("PASS") : console.log("FAIL");
//(decodeString("3[a2[c]]") == "accaccacc")?console.log("PASS"):console.log("FAIL");
//(decodeString("2[abc]3[cd]ef") == "abcabccdcdcdef") ? console.log("PASS") : console.log("FAIL");
//(decodeString("abc3[cd]xyz") == "abccdcdcdxyz") ? console.log("PASS") : console.log("FAIL");

// Reference: https://www.cnblogs.com/grandyang/p/5849037.html