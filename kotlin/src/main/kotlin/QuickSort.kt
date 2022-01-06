fun main() {

    class Solution {
        fun sortArray(nums: IntArray): IntArray {

            fun swap(array: IntArray, left: Int, right: Int) {
                if (left == right) {
                    return
                }

                val temp = array[left]
                array[left] = array[right]
                array[right] = temp
            }

            fun partition(array: IntArray, index4Left: Int, index4Right: Int, pivot: Int): Int {

                var left: Int = index4Left
                var right: Int = index4Right

                while (left <= right) {
                    while (array[left] < pivot) {
                        left++
                    }
                    while (array[right] > pivot) {
                        right--
                    }
                    if (left <= right) {
                        swap(array, left, right)
                        left++
                        right--
                    }
                }
                return left
            }

            fun quickSort(array: IntArray, left: Int, right: Int) {

                if (left >= right) {
                    return
                }

                val pivotIndex = (left + right) / 2
                val pivot = array[pivotIndex]
                val index = partition(array, left, right, pivot)

                quickSort(array, left, index - 1)
                quickSort(array, index, right)
            }

            quickSort(nums, 0, nums.size - 1)

            return nums
        }
    }

    val solution = Solution()

    val input = intArrayOf(7, 2, 15, 11)
    print("INPUT: ${input.contentToString()}")
    solution.sortArray(input)
    print("OUTPUT: ${input.contentToString()}")
}