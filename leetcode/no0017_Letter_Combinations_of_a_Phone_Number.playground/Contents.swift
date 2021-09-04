import Cocoa

class Solution {
    func letterCombinations(_ digits: String) -> [String] {
        
        if(digits.count == 0) {
            return []
        }
        
        let keyMapping = [
            "0":  [" "],
            "1": [""],
            "2": ["a","b","c"],
            "3": ["d","e","f"],
            "4": ["g","h","i"],
            "5": ["j","k","l"],
            "6": ["m","n","o"],
            "7": ["p","q","r", "s"],
            "8": ["t","u","v"],
            "9": ["w","x","y", "z"]
        ]
        
        func dfs(
            digits:String,
            keyMapping: Dictionary<String, Array<String>>,
            selectedIndex: Int,
            currentCombination: inout Array<String>,
            answer: inout Array<String>
        ) {
            
            if(selectedIndex == digits.count) {
                let combination = currentCombination.joined(separator: "")
                print("add: ___\(combination)___")
                answer.append(combination)
                return
            }
            
            let char = String(Array(digits)[selectedIndex])
            print("Char: \(char)")
            let chars = keyMapping[char]
            
            chars?.forEach { (element) in
                
                currentCombination.append(element)
                
                dfs(digits: digits,
                    keyMapping: keyMapping,
                    selectedIndex: selectedIndex + 1,
                    currentCombination: &currentCombination,
                    answer: &answer);
                
                currentCombination.removeLast()
            }
            
        }
        
        let selectedIndex = 0
        var output =  Array<String>()
        var currentCombination = Array<String>()
        dfs(digits: digits, keyMapping: keyMapping, selectedIndex: selectedIndex, currentCombination: &currentCombination, answer: &output);
        
        print("OUTPUT: \(output)")
        return output
    }
}

let solution = Solution()
//solution.letterCombinations("23")
solution.letterCombinations("")
