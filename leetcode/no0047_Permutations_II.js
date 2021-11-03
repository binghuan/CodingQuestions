/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

    var checkPermute = function (nums, curr, numIndexesInUse, ans) {

        if (nums.length == curr.length) {
            let temp = JSON.stringify(curr.slice(0));
            if (!ans.has(temp)) {
                ans.add(temp);
                //console.log("Add:", temp);
            }

        } else {
            for (let i = 0; i < nums.length; i++) {
                if (numIndexesInUse.has(i)) {
                    continue;
                }
                let num = nums[i];
                curr.push(num);
                numIndexesInUse.add(i);
                checkPermute(nums, curr, numIndexesInUse, ans);
                curr.pop();
                numIndexesInUse.delete(i);
            }
        }
    }

    let numIndexesInUse = new Set();
    let result = new Set();
    let checkingNums = [];
    checkPermute(nums, checkingNums, numIndexesInUse, result);

    let output = [];
    let items = Array.from(result);
    items.forEach((arrayString) => {
        output.push(JSON.parse(arrayString));
    });

    //console.log("OUTPUT:", output);
    return output;
};



permuteUnique([1, 1, 2])