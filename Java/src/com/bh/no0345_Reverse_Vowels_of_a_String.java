package com.bh;

import java.util.HashSet;
import java.util.Set;

public class no0345_Reverse_Vowels_of_a_String {
    public String reverseVowels(String s) {
        // Define a set of vowels for quick lookup
        Set<Character> vowels = new HashSet<>();
        for (char c : "aeiouAEIOU".toCharArray()) {
            vowels.add(c);
        }

        // Convert the string to a character array for in-place modification
        char[] chars = s.toCharArray();
        int left = 0, right = chars.length - 1;

        // Use two pointers to reverse the vowels
        while (left < right) {
            // Move the left pointer until a vowel is found
            while (left < right && !vowels.contains(chars[left])) {
                left++;
            }

            // Move the right pointer until a vowel is found
            while (left < right && !vowels.contains(chars[right])) {
                right--;
            }

            // Swap the vowels
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;

            // Move both pointers
            left++;
            right--;
        }

        // Convert the character array back to a string and return
        return new String(chars);
    }

    public static void main(String[] args) {
        no0345_Reverse_Vowels_of_a_String solution = new no0345_Reverse_Vowels_of_a_String();

        // Test case 1
        String s1 = "IceCreAm";
        System.out.println(solution.reverseVowels(s1)); // Expected: "AceCreIm"

        // Test case 2
        String s2 = "leetcode";
        System.out.println(solution.reverseVowels(s2)); // Expected: "leotcede"

        // Test case 3
        String s3 = "hello";
        System.out.println(solution.reverseVowels(s3)); // Expected: "holle"

        // Test case 4
        String s4 = "aA";
        System.out.println(solution.reverseVowels(s4)); // Expected: "Aa"
    }
}
