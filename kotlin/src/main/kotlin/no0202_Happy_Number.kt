fun main() {

    class Solution {
        fun isHappy(n: Int): Boolean {
            val numString = n.toString()
            var total = 0.0
            val size = numString.length
            for (i in 0 until size) {
                val char = numString[i]
                val temp = Math.pow(char.toString().toDouble(), 2.0)
                //println("#$i = $temp")
                total += temp
                //println("total = $total")
            }
            return when (total) {
                2.0, 4.0 -> {
                    false
                }
                1.0 -> {
                    true
                }
                0.0 -> {
                    false
                }
                else -> {
                    isHappy(total.toInt())
                }
            }
        }
    }

    val solution = Solution()

//    Input: n = 19
//    Output: true

    val result = solution.isHappy(0)
    println("OUTPUT: $result")

}
