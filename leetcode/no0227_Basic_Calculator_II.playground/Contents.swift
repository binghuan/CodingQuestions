import Cocoa

class Solution {
    func calculate(_ s: String) -> Int {
     
        
        var operation = "+"
        var currentChar = ""
        var currentNumber = 0
        let len = s.count
        var stack = [Int]()
        
        for index in 0...len-1 {
            currentChar = String(s[s.index(s.startIndex, offsetBy: index)])
            
            var itIsNumber = false
            if currentChar >= "0" && currentChar <= "9" {
                if let number = Int(String(currentChar)) {
                    currentNumber = currentNumber*10 + number
                    itIsNumber = true
                }
            }
            
            if (!itIsNumber && currentChar != " ") || index == len-1 {
                switch operation {
                case "+":
                    stack.append(currentNumber)
                case "-":
                    stack.append(-currentNumber)
                case "*":
                    let last = stack.last
                    stack.removeLast()
                    stack.append(last! * currentNumber)
                case "/":
                    let last = stack.last
                    stack.removeLast()
                    stack.append(last! / currentNumber)
                default: break
                }
                
                operation = currentChar
                currentNumber = 0
            }
        }
        var result = 0
        while( stack.count > 0 ) {
            result += stack.last!
            stack.removeLast()
        }
        return result
    }
}

let solution = Solution()
let result = solution.calculate("3+2*2")
//let result = solution.calculate("42")
print("OUTPUT = \(result)")
