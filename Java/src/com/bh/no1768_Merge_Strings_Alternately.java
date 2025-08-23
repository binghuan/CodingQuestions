package com.bh;

public class no1768_Merge_Strings_Alternately {
    // Merge two strings alternately, appending remainder of the longer string
    public String mergeAlternately(String word1, String word2) {
        StringBuilder sb = new StringBuilder(word1.length() + word2.length());
        int n1 = word1.length();
        int n2 = word2.length();
        int i = 0;
        while (i < n1 && i < n2) {
            sb.append(word1.charAt(i));
            sb.append(word2.charAt(i));
            i++;
        }
        if (i < n1) sb.append(word1.substring(i));
        if (i < n2) sb.append(word2.substring(i));
        return sb.toString();
    }

    public static void main(String[] args) {
        no1768_Merge_Strings_Alternately solution = new no1768_Merge_Strings_Alternately();
        // Provided examples
        String w1 = "abc", w2 = "pqr";
        System.out.println("Case 1: " + solution.mergeAlternately(w1, w2)); // apbqcr
        w1 = "ab"; w2 = "pqrs";
        System.out.println("Case 2: " + solution.mergeAlternately(w1, w2)); // apbqrs
        w1 = "abcd"; w2 = "pq";
        System.out.println("Case 3: " + solution.mergeAlternately(w1, w2)); // apbqcd
        // Extra edge tests
        w1 = "a"; w2 = "z";
        System.out.println("Case 4: " + solution.mergeAlternately(w1, w2)); // az
        w1 = "a"; w2 = "xyz";
        System.out.println("Case 5: " + solution.mergeAlternately(w1, w2)); // axyz
        w1 = "lmno"; w2 = "p";
        System.out.println("Case 6: " + solution.mergeAlternately(w1, w2)); // lpmno
    }
}
