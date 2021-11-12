fun main(args: Array<String>) {

    class Solution {
        fun pivotIndex(nums: IntArray): Int {
            var sum = 0
            for (num in nums) {
                sum += num
            }
            var sumOnTheLeft = 0
            val size = nums.size
            for (i in 0 until size) {
                val num = nums[i]
                if (i > 0) {
                    sumOnTheLeft += nums[i - 1]
                }
                var sumOnTheRight = 0
                if (num < 0) {
                    sumOnTheRight = sum - sumOnTheLeft + Math.abs(num)
                } else {
                    sumOnTheRight = sum - sumOnTheLeft - Math.abs(num)
                }
                if (sumOnTheLeft == sumOnTheRight) {
                    return i;
                }
            }
            return -1
        }
    }

    val solution = Solution()

//    Input: nums = [1,7,3,6,5,6]
//    Output: 3

    val result = solution.pivotIndex(intArrayOf(1, 7, 3, 6, 5, 6))
    println("OUTPUT:$result")

}