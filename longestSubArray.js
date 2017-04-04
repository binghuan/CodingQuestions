console.log("/20170403@BH_Lin!");

/*

We define a subarray of array a to be a contiguous block of a's elements having a length that is less than or equal to the length of array a. For example, the subarrays of array a = [1, 2, 3] are [1], [2], [1, 2], [2, 3], and [1, 2, 3]. Now, let's say we have an integer, k = 3. The subarrays of array a having elements that sum to a number â‰¤ k are [1], [2], and [1, 2]. The longest of these subarrays is [1, 2], which has a length of 2.

 

Complete the maxLength function in the editor. It has 2 parameters:

An array of integers, a.
An integer, k.
The function must return the length of the longest subarray having elements that sum to a number less than or equal to k. You cannot reorder the array's elements.

 

Input Format

Locked stub code in the editor reads the following input from stdin and passes it to the function:

The first line contains a single integer, n, denoting the number of elements in array a.

Each line i of the n subsequent lines (where 0 â‰¤ i < n) contains an integer describing element i in array a.

The last line contains an integer, k.

 

Constraints

1 <= n <= 10^5
1 <= a[i] <= 10^3
1 <= k <= 10^9
 

Output Format

The function must return the length of the longest subarray having a sum less than or equal to k. This is printed to stdout by locked stub code in the editor.

 

Sample Input 0

3
1
2
3
4
 

Sample Output 0

2
 

Explanation 0

The subarrays of [1, 2, 3] having elements that sum to a number â‰¤ (k = 4) are [1], [2], [3], and [1, 2]. The longest of these is [1, 2], which has a length of 2. Thus, we return 2 as our answer.

 

Sample Input 1

4
3
1
2
1
4
 

Sample Output 1

3
 

Explanation 1

The subarrays of [3, 1, 2, 1] having elements that sum to a number â‰¤ (k = 4) are [3], [1], [2], [1], [3, 1], [1, 2], [2, 1], and [1, 2, 1]. The longest of these is [1, 2, 1], which has a length of 3. Thus, we return 3 as our answer.

 

*/


/*

    My Solution: 

        1. remove the first element in array 
            it' because the 1st element in array is the lenght of array 
            for instance: [3,1,2,3,4];
            So, I need to remove [3] in array and get back [1,2,3,4]

        2. remove last element in array, 
            the last lement in array is for variable "k". 

        3. Sort the elements in array. 
        4. Have an for loop and try to get sum of elements by index
            for instance: 
            a. index = 0; sum([1])
            b. index = 1; sum([1,2])
            c. index = 1; sum([1,2,3])

            and check the result of sum, it should be less equal than variable k. 
            
*/

function maxLength(a, k) {

    console.log(">> maxLength: a = ", a, "; k = ", k);
    var lengthOfArray = a[0];
    a.shift();
    var EXPECTED_RESULT = a.pop();
    console.log("length of array = ", lengthOfArray, a);
    var sorted_a = a.sort();
    var sumArray = [];

    var sum = 0;
    for(var i =0 ;i< a.length ; i++) {
        sumArray[i] = sorted_a[i];
        
        sum = sumArray.reduce(function(pv, cv) { return pv + cv; }, 0);
        console.log("Ready to SUM Array ", sumArray , " => ", sum);
        if(sum <= 4) {
            console.log("OK> for subArary: ", sumArray);
        } else {
            console.log("NG> for subArray: ", sumArray);
            sumArray.pop();
            break;
        }
    }

    console.log("maxLength for array: ", sorted_a , " is " , sumArray.length, " : ", sumArray);
    return sumArray.length;
}


var input = [3, 1, 2, 3, 4];
k = 4;

maxLength(input, k);