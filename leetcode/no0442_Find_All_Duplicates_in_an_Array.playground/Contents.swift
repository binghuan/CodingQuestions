//: Playground - noun: a place where people can play

func findDuplicates(_ nums: [Int]) -> [Int] {
    
    let DBG = false;
    if(DBG) {print("### INPUT: ", nums);};
    
    var mapping = [Int : Int]()
    var ans = [Int]();
    for number in nums {
        if(DBG) {print(number);}
        if(mapping[number] == nil) {
            mapping[number] = 1;
            if(DBG) {print(mapping[number])}
        } else {
            if( mapping[number] == 1) {
                ans.append(number);
            }
            mapping[number] = (mapping[number] as! Int) + 1;
            if(DBG) {print(mapping[number])}
        }
    }
    
    if(DBG) {print("### OUTPUT: ", ans)}
    return ans;
}

let nums = [4,3,2,7,8,2,3,1];
nums.count;
findDuplicates(nums);

