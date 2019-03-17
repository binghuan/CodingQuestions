/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  console.log('## INTPUT:', a, b);

  let bitsM = a.split('').reverse().toString().replace(/,/g, '');
  ;
  let bitsS = b.split('').reverse().toString().replace(/,/g, '');
  if (bitsM.length < bitsS.length) {
    let temp = bitsM;
    bitsM = bitsS;
    bitsS = temp;
  }

  let result = '';
  let length = bitsM.length;
  let extraValue = 0;
  for (let i = 0; i < length; i++) {
    let bitM = bitsM[i];
    let bitS = bitsS.hasOwnProperty(i) ? bitsS[i] : 0;

    let total = parseInt(bitM) + parseInt(bitS) + extraValue;
    let valueOnThisRound = 0;
    if (total > 1) {
      extraValue = parseInt(total / 2);
      valueOnThisRound = total % 2;
    } else {
      extraValue = 0;
      valueOnThisRound = total;
    }


    result = valueOnThisRound + '' + result;
    console.log(
        bitM, '+', bitS, '; valueOnThisRound = ', valueOnThisRound,
        'extraValue= ', extraValue, 'total:', total, ' --> ', result);
  }

  if (extraValue > 0) {
    result = extraValue + '' + result;
  }

  console.log('## OUTPUT:', result);
  return result;
};


let a = '1010', b = '1011';
// a = "11", b = "1";
addBinary(a, b);