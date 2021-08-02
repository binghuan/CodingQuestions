/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    
    let keys = brokenLetters.split("");
    
    let words = text.split(" ");
    let count = words.length;
    console.log("words: ", count);
    for(let i =0; i< words.length; i++) {
        
        let word = words[i];
        for(let j =0; j< keys.length; j++) {
            let key = keys[j];
            if(word.indexOf(key) != -1) {
                count -= 1;
                break;
            }
        }
    }
    
    return count;
};