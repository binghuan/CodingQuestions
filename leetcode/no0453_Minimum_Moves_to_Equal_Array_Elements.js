/**
 * @param {number[]} nums
 * @return {number}
 */

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var minMoves = function(nums) {

    var DBG = false;

    var maxMove = nums.length -1;
    
    var counter =0;

    var sum = 0;
    
    var uniqArray  = nums.filter(onlyUnique);


    if(DBG)console.log("length: ", nums.length, uniqArray.length);
    //102973

    if(uniqArray.length === 2) {
        nums = nums.sort(function(a,b) {
            return a-b;
        });

        counter = nums[nums.length -1 ] - nums[0];
        if(DBG)console.log("Counter => ", counter);
        return counter;
    }

    if(DBG)console.log(uniqArray.length , " =? ", nums);
    if(uniqArray.length ===1) {
        if(DBG)console.log("Counter => ", counter);
        return 0;
    }

    if(nums.length === 2) {
        nums = nums.sort(function(a,b) {
            return a-b;
        });

        counter = nums[1] - nums[0];
        if(DBG)console.log("Counter => ", counter);
        return counter;
    }

    

    do {

        counter +=1;
        nums = nums.sort(function(a,b) {
            return a-b;
        });

        for(var i =0; i< nums.length -1; i++) {
            nums[i] += 1; 
        }

        uniqArray  = nums.filter(onlyUnique);
        
        if(DBG)console.log(uniqArray.length , " ==> min: ", nums[0], " max: ", nums[nums.length-1]);

    } while(uniqArray.length !== 1)
    
    if(DBG)console.log("Counter => ", counter);

    return counter;
};

if(minMoves([1,2,3]) != 3) {
    console.error("Wrong Answer");return;
}else{ console.log("Correct Answer !!")}