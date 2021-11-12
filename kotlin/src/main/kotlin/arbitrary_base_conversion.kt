fun main(args: Array<String>) {

    class Solution {
        fun speaking(input: String): String {
            val debug = false
            val items = input.split(" ")
            val numString = items[0]
            val base = items[1]
            val target = items[2].toInt()
            var decimal: Int = Integer.valueOf(numString, base.toInt()) //8进制转换成10进制
            if (debug) println("Decimal = $decimal")
            val intStrMap = mapOf("10" to "A", "11" to "B", "12" to "C", "13" to "D", "14" to "E", "15" to "F")
            val binary = arrayOf("0", "0", "0", "0", "0", "0", "0")
            var index = 0
            while (decimal > 0 && index < binary.size) {
                val result = decimal % target
                if (result < 10) {
                    binary[index] = result.toString()
                } else {
                    binary[index] = intStrMap.get(result.toString()).toString()
                }
                index += 1
                decimal /= target
            }
            var output = ""
            for (i in binary.size - 1 downTo 0) {
                if (debug) print(binary[i])
                output = output.plus(binary[i])
            }
            if (debug) println("") //new line
            if (debug) println("OUTPUT:$output")
            return output
        }
    }

    val solution = Solution()

    // Run Test Case
    println(solution.speaking("1111000 2 10") == "0000120")
    println(solution.speaking("1111000 2 16") == "0000078")
    println(solution.speaking("2102101 3 10") == "0001765")
    println(solution.speaking("2102101 3 15") == "00007CA")
    println(solution.speaking("12312 4 2") == "0110110")
    println(solution.speaking("1A 15 2") == "0011001")
    println(solution.speaking("ABCD 16 15") == "000D071")
    println(solution.speaking("03 13 10") == "0000003")
    println(solution.speaking("0055 6 3") == "0001022")
    println(solution.speaking("0055 8 10") == "0000045")
    println(solution.speaking("5500 10 16") == "000157C")
    println(solution.speaking("5500 8 10") == "0002880")
    println(solution.speaking("768 10 2") == "0000000")
    println(solution.speaking("768 10 8") == "0001400")
    println(solution.speaking("1234 7 3") == "0122021")
    println(solution.speaking("1234 7 5") == "0003331")
    println(solution.speaking("00001111 2 10") == "0000015")
    println(solution.speaking("00001111 3 10") == "0000040")
    println(solution.speaking("00001111 4 10") == "0000085")
    println(solution.speaking("00001111 5 10") == "0000156")
    println(solution.speaking("AACC 16 10") == "0043724")
    println(solution.speaking("AACC 15 10") == "0036192")
    println(solution.speaking("FFFF 16 2") == "1111111")
}