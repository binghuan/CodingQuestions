use std::collections::HashMap;

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map: HashMap<i32, i32> = HashMap::new();

    for (i, num) in nums.iter().enumerate() {
        let complement = target - num;

        if let Some(&index) = map.get(&complement) {
            return vec![index, i as i32];
        }

        map.insert(*num, i as i32);
    }

    panic!("No two sum solution found!");
}

pub fn run() {
    let nums = vec![2, 7, 11, 15];
    let target = 9;
    println!("nums = {:?} target is {}", nums, target);

    let result = two_sum(nums, target);
    println!("{:?}", result);
}
