/**
 * @param {string[]} numsArray
 * @return {number}
 */

function getMinumDifference(numsArray) {
    var totalNumber = numsArray[0];
    var nums1 = numsArray.slice(1, 1+totalNumber);
    var nums2 = numsArray.slice(1+totalNumber+1);
    //console.log(nums1, nums2);

    for(var i =0; i< totalNumber; i++) {

        var nums1Array = nums1[i].split("").sort();
        var nums2Array = nums2[i].split("").sort();

        //console.log("#", i, " - check : \n", nums1[i], "\n", nums2[i]);

        // case 1: 
        if(nums1Array.length != nums2Array.length) {
            console.log( -1);
            continue;
        }

        // case 2:
        if(nums1Array.toString() == nums2Array.toString()) {
            console.log(0);
            continue;
        }

        // Case 3:
        var temp1= {};
        for(var j=0; j< nums1Array.length; j++) {
            if(temp1[nums1Array[j]] != null) {
                temp1[nums1Array[j]]+=1;
            } else {
                temp1[nums1Array[j]]=1;
            }
        }
        // console.log("temp1: ", temp1);
        // console.log("nums2Array: ", nums2Array);
        var diffCount = 0;
        for(var j=0; j< nums2Array.length; j++) {
            var hit = false;
            for(var k=0; k< Object.keys(temp1).length; k++) {
                if(Object.keys(temp1)[k] == nums2Array[j]) {
                    temp1[Object.keys(temp1)[k]] -=1;
                    //console.log("HIT: ", Object.keys(temp1)[k]);
                    //console.log(temp1);
                    hit = true;
                    break;
                }
            }
            
            if(hit == false) {
                diffCount +=1;
            }
            //console.log(temp1, diffCount);
        }

        for(var k=0; k< Object.keys(temp1).length; k++) {
            if(temp1[Object.keys(temp1)[k]] !== 0) {
                diffCount += Math.abs(temp1[Object.keys(temp1)[k]]);
            }
        }

        console.log(diffCount/2);

    }

}


var numsArray = [
    5,
    "a", 
    "jk", 
    "abb", 
    "mn", 
    "abc", 
    5, 
    "bb", 
    "kj", 
    "bbc", 
    "op", 
    "def"
];

getMinumDifference(numsArray);
