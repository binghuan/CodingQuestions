package com.bh;

public class CodingQuestFromMarshBlockchain {

    // linkedIn for this company: https://www.linkedin.com/company/marsblockchain/ 

    public static void main(String[] args) {


    }

    /* Task 1:

        Find the bug(s) and modify one line of code in the incorrect implementation of a function solution
        that is supposed to return the smallest element of the given non-empty array A which contains at most 1000 integers
        within range [ -1000...1000 ].

        Notice that for the example test case A = [ -1, 1, -2, 2] the attached code is already returning the correct answer (-2).
     */
    public static int SolutionForTask1(int[] A) {
        //int ans = 0;
        // --> it's because the started index should be 0, so, assign A[0] to ans.
        int ans = A[0];

        for (int i = 1; i < A.length; i++) {
            if (ans > A[i]) {
                ans = A[i];
            }
        }

        return ans;
    }

    /* Task 2:
        Write a function solution that return a string of length N consisting of alternating characters: "+" and "-",
        starting with a "+" character. You can assume N is between 1 and 100.

        For example, given N = 5, your function should return "+-+-+" and given N = 4, it should return "+-+-"

     */
    public static String SolutionForTask2(int N) {
        String output = "";
        for (int i = 0; i < N; i++) {
            if (i % 2 == 0) {
                output += "+";
            } else {
                output += "-";
            }
        }
        return output;
    }
    
}
