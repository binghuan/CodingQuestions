package com.bh;

import java.util.ArrayList;

public class Fibonacci2 {

    static Integer Fibonacci(int input) {
        ArrayList<Integer> result = new ArrayList<Integer>();

        for (int i = 0; i < input; i++) {

            Integer value = 0;

            if (i > 1) {
                // i: 2 --> 3
                int a = result.get(i - 2); // 1
                // 1
                int b = result.get(i - 1);// 2
                value = a + b;

            } else {
                // i : 0 --> 1
                if (result.size() == 1) {
                    value = 1;
                } else {
                    value = 0;
                }
            }

            result.add(value);// push 2
            System.out.println("[" + i + "]:" + value);
        }

        // [0, 1, 1, 2]
        return result.get(result.size() - 1);
    }

    static class Main {
        // 0 1 1 2 3 5 8 11 19 30 49
        public static void main(String[] args) {

            System.out.println("Answer:" + Fibonacci(11));
        }
    }
}
