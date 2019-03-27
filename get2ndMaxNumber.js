// coding question from Visual On.
// Website: https://www.visualon.com/


console.log('===============');
function get2ndMaxNumber(testcaseIndex) {
  var numArray = [];
  switch (testcaseIndex) {
    case 1:
      var numArray = [2, 4, 6, 8];
      break;
    case 2:
      var numArray = [4, 2, 6, 8];
      break;
    case 3:
      var numArray = [8, 6, 4, 3];
      break;
    case 4:
      var numArray = [8, 8, 4, 3];
      break;
    case 5:
      var numArray = [2, 3, 4, 4];
      break;
  }

  console.log('get2ndMaxNumber from ', numArray);

  var the1stMaxNum = undefined;
  var the2ndMaxNum = undefined;
  for (i = 0; i < numArray.length; i++) {
    console.log('++', the1stMaxNum, the2ndMaxNum, numArray[i]);

    if (the1stMaxNum == undefined) {
      console.log('init ...');
      the1stMaxNum = numArray[i];
      console.log(the1stMaxNum, the2ndMaxNum);
    }

    if (the1stMaxNum < numArray[i]) {
      console.log('__1__');
      the2ndMaxNum = the1stMaxNum;
      the1stMaxNum = numArray[i];
    } else {
      if (the2ndMaxNum == undefined) {
        the2ndMaxNum = numArray[i];
      } else {
        if (numArray[i] > the2ndMaxNum) {
          console.log('_2___');
          the2ndMaxNum = numArray[i];
        }
      }
      console.log('_3___');
    }
    console.log('--> ', the1stMaxNum, the2ndMaxNum);
  }

  console.info('the 2nd Max Number is : ', the2ndMaxNum);
  return the2ndMaxNum;
};

get2ndMaxNumber(5);
