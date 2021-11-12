fun main(args: Array<String>) {

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
                    true;
                }
                else -> {
                    isHappy(total.toInt())
                }
            }
        }
    }

    val solution = Solution();

//    Input: n = 19
//    Output: true

    val result = solution.isHappy(19)
    println("OUTPUT: $result")

}
