/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {

    let DBG = true;

    if (DBG) console.log("## INPUT: A = ", A.toString(), "K=", K);

    let backupA = A.slice(0);

    let quota = K;
    let max1s = 0;
    let length = backupA.length;
    for (let j = 0; j < length; j++) {
        if (DBG) console.log("start index: ", j, "length:", length);
        A = backupA.slice(0);
        quota = K;
        let indexArray = [];
        for (let i = j; i < length; i++) {
            //if(DBG)console.log("indexI: ", i, "=", A[i], A[i] == 0, "quota =", quota);
            if (A[i] == 0) {
                if (quota > 0
                    && (length - i) >= quota
                ) {
                    A[i] = 1;
                    quota -= 1;
                    indexArray.push(i);
                }
            }

            if (A[i] == 1 && quota == 0) {
                let items = A.toString().replace(/,/g, "").split("0");
                while (items[items.length -1 ] == "") {
                    items.pop();
                }

                //let max = items.sort(function (a, b) { return b.length - a.length })[0];
                let max = items.reduce(function (a, b) { return a.length > b.length ? a : b; });
                if (DBG) console.log("check items- A:" + A, "indexArray: ", indexArray, indexArray.length, "max = ", max, max.length);
                if (max.length > max1s) {
                    if (DBG) console.log("@@@@@@@@@@ repleace max1s from ", max1s, "to", max.length, "@@@@@@@@@@");
                    max1s = max.length;
                }
                indexArray = [];
                break;
            }
        }
    }

    console.log(max1s);

    return max1s;
};

let input = [1,1,1,0,0,0,1,1,1,1,0], K = 2;
longestOnes(input, K);