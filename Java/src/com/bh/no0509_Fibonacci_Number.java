package com.bh;

import java.util.ArrayList;

public class no0509_Fibonacci_Number {
    static
    class Solution {
        public int fib(int n) {

            ArrayList<Integer> arrayList = new ArrayList<Integer>();

            for (int i = 0; i <= n; i++) {

                Integer sum = 0;

                if (i == 0) {
                    sum = 0;
                } else if (i == 1) {
                    sum = 1;
                } else {
                    Integer last1Num = 0;
                    Integer last2Num = 0;

                    if (arrayList.size() >= 2) {
                        last2Num = arrayList.get(i - 2);
                        System.out.println("last2num: " + last2Num);
                    }
                    if (arrayList.size() >= 1) {
                        last1Num = arrayList.get(i - 1);
                        System.out.println("last1num: " + last1Num);
                    }

                    sum = last1Num + last2Num;

                }

                System.out.println("index: " + i + ", SUM: " + sum);
                arrayList.add(sum);
            }

            return arrayList.get(arrayList.size() - 1);
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        solution.fib(3);
    }
}
