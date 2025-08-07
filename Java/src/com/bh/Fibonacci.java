package com.bh;

import java.util.HashMap;

public class Fibonacci {
    public static Integer fibonacci(int n, HashMap<Integer, Integer> memo) {

        if (memo.containsKey(n)) {
            return memo.get(n);
        }

        if (n <= 1) {
            return n;
        } else {
            Integer value = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
            memo.put(n, value); // store the computed value in the hashmap
            return value;
        }
    }

    public static void main(String[] args) {
        int n = 100;

        // hashmap to store computed Fibonacci numbers
        HashMap<Integer, Integer> memo = new HashMap<>();
        for (int i = 1; i <= n; i++) {
            System.out.println(i + ": " + fibonacci(i, memo));
        }
    }
}

