import java.util.*
fun main(args: Array<String>) {
    class Solution {
        fun twoSum(nums: IntArray, target: Int): IntArray {

            for (i in nums.indices) {
                for (j in nums.indices) {
                    if (i == j) {
                        continue;
                    }

                    if (nums[i] + nums[j] == target) {
                        println("hit ~~");
                        val integers = intArrayOf(i, j);
                        println("OUTPUT: ${Arrays.toString(integers)}");
                        return integers;
                    }
                }
            }
            println("OUTPUT: []");
            return IntArray(0);
        }
    }

    println(">> main");

    val solution = Solution();

    val integers = intArrayOf(2, 7, 11, 15)
    val target = 9;

    solution.twoSum(integers, target);

}
