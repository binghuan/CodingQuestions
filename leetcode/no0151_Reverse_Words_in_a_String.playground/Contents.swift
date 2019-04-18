import Cocoa

func reverseWords(_ s: String) -> String {
    var str: String = "";
    
    let items = s.split(separator: " ")
    let reversedItems = Array(items.reversed())

    for item in reversedItems {
        str += " " +  item.trimmingCharacters(in: .whitespaces)
    }
    
    print("## OUTPUT: \(str)")
    return str.trimmingCharacters(in: .whitespaces);
}

reverseWords("the sky is blue")
