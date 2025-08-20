//
// Created by binghuan on 2025/8/20.
//

#include <unordered_map>
#include <stdexcept>
#include <iostream>
#include <vector>

// Standalone Two Sum function
std::vector<int> twoSum(const std::vector<int>& nums, int target) {
	std::unordered_map<int, int> seen; // value -> index
	for (int i = 0; i < (int)nums.size(); ++i) {
		int complement = target - nums[i];
		auto it = seen.find(complement);
		if (it != seen.end()) {
			return {it->second, i};
		}
		seen[nums[i]] = i;
	}
	throw std::runtime_error("No solution found");
}

static void printVec(const std::vector<int>& v) {
	std::cout << "[";
	for (size_t i = 0; i < v.size(); ++i) {
		std::cout << v[i] << (i + 1 == v.size() ? "" : ",");
	}
	std::cout << "]\n";
}

int main() {
	std::vector<int> a{2,7,11,15};
	printVec(twoSum(a, 9)); // [0,1]

	std::vector<int> b{3,2,4};
	printVec(twoSum(b, 6)); // [1,2]

	std::vector<int> c{3,3};
	printVec(twoSum(c, 6)); // [0,1]
	return 0;
}