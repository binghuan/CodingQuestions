package com.bh;

import java.util.ArrayList;

public class CodingQuestFromMarshBlockchain {

    // linkedIn for this company: https://www.linkedin.com/company/marsblockchain/

    public static void main(String[] args) {

        // Test Solution for Task 3
        for(int i =0; i< 10; i++) {
            SolutionForTask3(i);
        }
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

    /*

        Write a function

        that, given an integer N (1 <= N <= 100), returns an array containing N distinct integers that sum up to 0.
        the function can return any such array.

        For example:, given N = 4, the function could return [1,0,-3,2], and for N = 3,
        one of the possible answers is [-1,0,1] (but there are many more correct answers).

     */
    public static int[] SolutionForTask3(int N) {

        ArrayList<Integer> numberArray = new ArrayList<Integer>();

        if (N == 2) {

            numberArray.add(1);
            numberArray.add(-1);

        } else if (N % 2 == 0) {

            numberArray.add(0);

            int sumForMinus = 0;
            for (int i = 1; i < 101; i++) {
                if (numberArray.size() < (N - 1)) {
                    sumForMinus += i;
                    numberArray.add(i);
                } else {
                    numberArray.add(sumForMinus * -1);
                    break;
                }
            }

        } else {

            numberArray.add(0);

            for (int i = 1; i < 101; i++) {
                if (numberArray.size() < N) {
                    numberArray.add(i);
                    numberArray.add(-i);
                } else {
                    break;
                }

            }
        }

        int[] ret = new int[numberArray.size()];
        for (int i = 0; i < ret.length; i++) {
            ret[i] = numberArray.get(i).intValue();
        }

        System.out.println("N = " + N + ", output => " + numberArray.toString());

        return ret;
    }

}
