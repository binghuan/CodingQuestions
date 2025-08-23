package com.bh;

public class no1071_Greatest_Common_Divisor_of_Strings {
    public String gcdOfStrings(String str1, String str2) {
        // If concatenating in both orders is not equal, no common divisor string exists
        if (!(str1 + str2).equals(str2 + str1)) {
            return "";
        }
        // Helper to compute GCD of two numbers
        int gcdLen = gcd(str1.length(), str2.length());
        return str1.substring(0, gcdLen);
    }
    // Euclidean algorithm for GCD
    private int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        no1071_Greatest_Common_Divisor_of_Strings solution = new no1071_Greatest_Common_Divisor_of_Strings();
        // Test case 1
        String str1_1 = "ABCABC";
        String str2_1 = "ABC";
        System.out.println("Test case 1: " + solution.gcdOfStrings(str1_1, str2_1)); // Expected: "ABC"
        // Test case 2
        String str1_2 = "ABABAB";
        String str2_2 = "ABAB";
        System.out.println("Test case 2: " + solution.gcdOfStrings(str1_2, str2_2)); // Expected: "AB"
        // Test case 3
        String str1_3 = "LEET";
        String str2_3 = "CODE";
        System.out.println("Test case 3: " + solution.gcdOfStrings(str1_3, str2_3)); // Expected: ""
    }
}
