package com.bh;

public class no0392_Is_Subsequence {
    public boolean isSubsequence(String s, String t) {
        if (s == null || t == null) return false;
        int i = 0, j = 0;
        while (i < s.length() && j < t.length()) {
            if (s.charAt(i) == t.charAt(j)) {
                i++;
            }
            j++;
        }
        return i == s.length();
    }

    public static void main(String[] args) {
        no0392_Is_Subsequence sol = new no0392_Is_Subsequence();
        // Test cases
        String s1 = "abc", t1 = "ahbgdc";
        String s2 = "axc", t2 = "ahbgdc";
        String s3 = "", t3 = "ahbgdc";
        String s4 = "abc", t4 = "";
        System.out.println("Test 1: " + sol.isSubsequence(s1, t1)); // true
        System.out.println("Test 2: " + sol.isSubsequence(s2, t2)); // false
        System.out.println("Test 3: " + sol.isSubsequence(s3, t3)); // true
        System.out.println("Test 4: " + sol.isSubsequence(s4, t4)); // false
    }
}