/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    let sortedCandies = candies.slice(0).sort((a, b) => {
        return b - a;
    });

    let max = sortedCandies[0];

    let result = [];
    candies.forEach((candy) => {

        if ((candy + extraCandies) >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    })

    return result;
};