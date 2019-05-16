/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {

    if (A.length == 0 && B.length == 0) {
        console.log("path 1");
        return true;
    }

    if (A.length != 0 && B.length == 0) {
        console.log("path 2");
        return false;
    }

    if (B.length != 0 && A.length == 0) {
        console.log("path 3");
        return false;
    }

    for (let i = 0; i < A.length; i++) {
        console.log("check :", A, B, (A == B));

        if (A == B) {
            return true;
        }

        let char = B[B.length - 1];
        let BString = B.slice(0, B.length - 1);
        B = char + BString;
        console.log("next B:", B);
    }


    return false;
};