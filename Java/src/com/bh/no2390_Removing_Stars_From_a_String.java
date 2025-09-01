package com.bh;

public class no2390_Removing_Stars_From_a_String {
    /**
     * Removes stars and the closest non-star character to each star's left.
     * Uses an in-place stack simulation with a char array for O(n) time and O(n) space.
     */
    public String removeStars(String s) {
        char[] stack = new char[s.length()];
        int top = 0; // size of current stack
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '*') {
                // Problem guarantees there is a character to remove
                if (top > 0) top--; // pop the previous character
            } else {
                stack[top++] = c; // push
            }
        }
        return new String(stack, 0, top);
    }

    public static void main(String[] args) {
        no2390_Removing_Stars_From_a_String solution = new no2390_Removing_Stars_From_a_String();

        // Test case 1 (example)
        String s1 = "leet**cod*e";
        System.out.println("Input: " + s1);
        System.out.println("Output: " + solution.removeStars(s1)); // Expected: lecoe
        System.out.println("Expected: lecoe\n");

        // Test case 2 (example)
        String s2 = "erase*****";
        System.out.println("Input: " + s2);
        System.out.println("Output: " + solution.removeStars(s2)); // Expected: (empty string)
        System.out.println("Expected: \n");

        // Test case 3 (no stars)
        String s3 = "abc";
        System.out.println("Input: " + s3);
        System.out.println("Output: " + solution.removeStars(s3)); // Expected: abc
        System.out.println("Expected: abc\n");

        // Test case 4 (all removed)
        String s4 = "abc***"; // Each star removes one preceding char
        System.out.println("Input: " + s4);
        System.out.println("Output: " + solution.removeStars(s4)); // Expected: (empty string)
        System.out.println("Expected: \n");

        // Test case 5 (interleaved)
        String s5 = "a*b*c*d*e*f*"; // Alternating removals
        System.out.println("Input: " + s5);
        System.out.println("Output: " + solution.removeStars(s5)); // Expected: (empty string)
        System.out.println("Expected: \n");

        // Test case 6 (longer sequence)
        String s6 = "ab**c*d*e**fg***h"; // Mixed pattern
        System.out.println("Input: " + s6);
        System.out.println("Output: " + solution.removeStars(s6));
        // Manual reduction: ab** -> (remove b then a) -> '' then c* -> '' then d* -> '' then e** -> '' then fg*** -> f g remove g remove f (need one more star but there are 3) -> '' then h -> h => h
        System.out.println("Expected: h\n");
    }
}
