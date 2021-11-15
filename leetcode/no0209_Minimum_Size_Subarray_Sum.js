/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    console.log("INPUT", target, nums);

    let size = nums.length;
    let ans = [];
    let minSize = null;
    for (let i = 0; i < size; i++) {
        console.log("!! check i=", i, "value=", nums[i], "target=", target);
        let sum = nums[i];
        let nextIndex = i;
        let combination = [nums[i]];
        while (sum <= target && nextIndex < size) {
            let addend = nums[nextIndex];
            if (i != nextIndex) {
                sum += addend;
                combination.push(addend);
            }

            console.log(`+${addend}=${sum}`);
            if (sum == target) {
                ans.push(
                    {
                        combination: combination,
                        size: combination.length
                    }
                );
                console.log("Push:", {
                    combination: combination,
                    size: combination.length
                });

                if (minSize == null || combination.length < minSize) {
                    minSize = combination.length;
                }

                break;
            }

            nextIndex += 1;

        }
    }

    console.log("ANSWER:", ans, minSize);
    return minSize;
};

//minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
minSubArrayLen(11, [1, 2, 3, 4, 5]);
