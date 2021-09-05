import Cocoa
class Solution {
    func combinationSum(_ candidates: [Int], _ target: Int) -> [[Int]] {
        
        
        var sortedCandidates = candidates
        sortedCandidates.sort()
        print("INPUT: \(sortedCandidates)")
        
        func dfs(
            candidates: [Int],
            startedIndex: Int,
            remainingSum: Int,
            currentCombination: inout [Int],
            answer: inout [[Int]]
        ) {
            
            print("Check: \(currentCombination) from index \(startedIndex)")
            
            if(remainingSum == 0) {
                answer.append(currentCombination)
                print("Add \(currentCombination)")
                return
            }
            
            
            for (index, num) in candidates.enumerated() {
              print("Item \(index): \(num)")
                
                if(index < startedIndex) {
                    print("index < startedIndex")
                    continue
                }
                
                if(num > remainingSum ) {
                    print("pass")
                    break
                }
                
                currentCombination.append(num)
                print("Try \(currentCombination)")
                
                dfs(candidates: candidates,
                    startedIndex: index,
                    remainingSum: remainingSum - num,
                    currentCombination: &currentCombination,
                    answer: &answer)
                
                currentCombination.removeLast()
            }
        }
        
        var output = [[Int]]()
        var curr = [Int]()
        
        dfs(candidates: sortedCandidates,
            startedIndex: 0,
            remainingSum: target,
            currentCombination: &curr,
            answer: &output)
        
        print("OUTPUT: \(output)")
        return output
    }
}

let solution = Solution()
//Input: candidates = [2,3,6,7], target = 7

solution.combinationSum( [2,3,6,7], 7)
