/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  console.log('## INPUT:', s);

  let charsTable = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (charsTable[char] == null) {
      charsTable[char] = 1;
    } else {
      charsTable[char] += 1;
    }
  }

  let length = Object.keys(charsTable).length;
  let totalLength = 0;
  let plusOneAtLeast = false;
  for (let i = 0; i < length; i++) {
    let key = Object.keys(charsTable)[i];
    if (charsTable[key] / 2 >= 1) {
      let remainder = charsTable[key] % 2;
      let charsCount = (charsTable[key] - remainder);
      console.log('Add ', key, charsTable[key]);
      totalLength += charsCount;
      if (remainder > 0) {
        plusOneAtLeast = true;
      }
    } else {
      plusOneAtLeast = true;
    }
  }

  if (plusOneAtLeast) {
    totalLength += 1;
  }


  console.log('## OUTPUT:', totalLength);
  return totalLength;
};


let input = 'abccccdd';
input = 'ccc';
longestPalindrome(input);