fun main() {
    class Solution {
        fun containsDuplicate(nums: IntArray): Boolean {

            // hash set
            val set = HashSet<Int>()
            nums.forEach { num ->
                if (set.contains(num)) {
                    return true
                }
                set.add(num)
            }

            return false
        }
    }

    val solution = Solution()
    var input = intArrayOf(1, 2, 3, 1)
    var result = solution.containsDuplicate(input)
    // print input and output
    println("INPUT: ${input.contentToString()} => OUTPUT: $result")
}