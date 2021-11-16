/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {

    let x = 0;
    operations.forEach((operation) => {

        if (operation.indexOf("++") != -1) {

            x += 1;

        } else if (operation.indexOf("--") != -1) {
            x -= 1;
        }

    })
    return x;
};

