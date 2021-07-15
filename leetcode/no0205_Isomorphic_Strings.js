/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    let charMapS = {};
    let serialNum = 0;
    let encodeS = [];
    for(let i =0; i< s.length; i++) {
        let char = s[i];
        if(charMapS[char] == null ) {
            charMapS[char] = "A" + serialNum;
            serialNum +=1;
        }
        
        encodeS.push(charMapS[char]);
    }
    
    let charMapT = {};
    serialNum = 0;
    let encodeT = [];
    for(let i =0; i< t.length; i++) {
        let char = t[i];
        if(charMapT[char] == null ) {
            charMapT[char] = "A" + serialNum;
            serialNum +=1;
        }
        
        encodeT.push(charMapT[char]);
    }
    
    if(encodeS.toString() == encodeT.toString()) {
        return true;
    } else {
        return false;
    }
};