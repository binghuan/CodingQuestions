import Cocoa

class Solution {
    func sortArray(_ nums: [Int]) -> [Int] {
        
        func swap( array: inout [Int], left: Int, right: Int) {
            
            if(left == right ) {
                return
            }
            
            let temp = array[left]
            array[left] = array[right]
            array[right] = temp
        }
        
        func partition(array: inout [Int], index4Left:  Int, index4Right: Int, pivot: Int) -> Int{
            
            var left = index4Left
            var right = index4Right
            
            while(left <= right) {
                
                while(array[left] < pivot) {
                    left+=1
                }
                
                while(array[right] > pivot) {
                    right-=1
                }
                
                if(left <= right) {
                    
                    swap(array: &array, left: left, right: right)
                    
                    left+=1
                    right-=1
                }
            }
            
            return left
        }
        
        var numberOfCall = 0;
        func quickSort(array: inout [Int], left: Int, right: Int) {
            
            numberOfCall+=1
            
            if(left >= right) {
                return
            }
            
            let pivotIndex = (left + right)/2
            let pivot = array[pivotIndex]
            let index = partition(array: &array, index4Left: left, index4Right: right, pivot: pivot)
            
            quickSort(array: &array, left: left, right: index-1)
            quickSort(array: &array, left: index, right: right)
        }
        
        var input = nums
        quickSort(array: &input, left: 0, right: nums.count-1)
        
        return input
    }
}

let solution = Solution()
var input = [5,1,3,2]
print("INPUT:", input)
let result = solution.sortArray(input)
print("OUTPUT:", result)
