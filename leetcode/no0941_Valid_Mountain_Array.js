/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    
    let lastNum = null;
    let goDown = false;
    let goUp = false;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        console.log("check ", num)
        if (lastNum == null) {
            lastNum = num;
            continue;
        }

        if (goUp == false && goDown == false) {
            if (num > lastNum) {
                goUp = true;
            } else {
                console.log("NG 0")
                return false;
            }
        }

        console.log("should go up?", goUp);
        if (goUp) {
            if (num == lastNum) {
                console.log("NG -1");
                return false
            }
            else if (num > lastNum) {
                // ok , good
                console.log(lastNum, "->", num, " = GO UP");
            } else {
                if (goDown == false) {
                    goUp = false;
                    goDown = true
                    console.log("!! Change to go down");
                } else {
                    console.log("NG 1");
                    return false;
                }
            }
        } else if (goDown) {
            if (num == lastNum) {
                console.log("NG -2");
                return false
            }
            else if (num < lastNum) {
                // ok , good
                console.log(lastNum, "->", num, " = GO DOWN");
            } else {
                console.log("NG 2");
                return false;
            }
        }
        lastNum = num;
    }

    console.log(goUp, goDown);

    if (goUp == false && goDown == true) {
        console.log("OK");
        return true;
    } else {
        console.log("NG");
        return false;
    }
};

//validMountainArray([0, 3, 2, 1])
//validMountainArray([4,4,2,1,1])
//validMountainArray([6,7,7,8,6])
//validMountainArray([0,2,3,3,5,2,1.0])
validMountainArray([14, 82, 89, 84, 79, 70, 70, 68, 67, 66, 63, 60, 58, 54, 44, 43, 32, 28, 26, 25, 22, 15, 13, 12, 10, 8, 7, 5, 4, 3])