/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    
    
    let items = s.split(" ");
    let result = "";
    for(let i =0; i< k ; i++) {
        result += items[i] + " ";
    }
    
    console.log(`result __$result__`);
    
    return result.trim();
};