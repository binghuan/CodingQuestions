/*
8. String to Integer (atoi)

Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

spoilers alert... click to show requirements for atoi.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
      var strTemp = str.trim();
      console.log("INPUT:", str, "__" + strTemp + "__");
  
      var hasMinus = false;
      if(strTemp.indexOf("-+") != -1 || strTemp.indexOf("+-") != -1) {
          return 0;
      } else if(strTemp.indexOf("-") != -1) {
          hasMinus = true;
          strTemp = strTemp.replace("-", "");
      } else if(strTemp.indexOf("+") != -1) {
          hasMinus = false;
          strTemp = strTemp.replace("+", "");
      }
  
      if(strTemp.length === 0 ) {
          return 0;
      }
  
  
      var isNumber = function(char ) {
          var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          var result = false;
          for(var i=0; i< nums.length; i++) {
              if(char == nums[i]) {
                  result = true;
                  break;
              }
          }
  
          return result;
      }
  
  
      var sum = 0;
      for(var i = 0; i< strTemp.length; i++) {
  
          
          var powIndex = strTemp.length-1 -i;
          var base = Math.pow(10, powIndex);
          var char = strTemp[i];
          if(isNumber(char) == false) {
              sum = sum/Math.pow(10, powIndex+1);;
              break;
          }
          sum += parseInt(char) * base;
          console.log("SUM -> ", sum);
      }
  
      if(hasMinus === true) {
          sum = sum - sum - sum;
      }
  
      if(sum > 2147483647) {
          sum = 2147483647;
      }
      if(sum < -2147483648) {
          sum = -2147483648;
      }
      console.log("OUTPUT:", sum);
  
      return sum;
  };