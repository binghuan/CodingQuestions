package com.bh;

public class no0443_String_Compression {
    /**
     * In-place string compression.
     * Two-pointer technique:
     *   read pointer scans groups of same chars.
     *   write pointer writes compressed output.
     * For each group [start .. read-1]:
     *   - always write the character
     *   - if group length > 1, write each digit of the length
     * Returns the new logical length (chars beyond that index are ignored).
     * Time: O(n). Space: O(1) extra.
     */
    public int compress(char[] chars) {
        int write = 0;  // write position
        int read = 0;   // read position

        while (read < chars.length) {
            char currentChar = chars[read];
            int count = 0;

            // count consecutive occurrences
            while (read < chars.length && chars[read] == currentChar) {
                read++;
                count++;
            }

            // write the character
            chars[write++] = currentChar;

            // if count > 1, write each digit of the count
            if (count > 1) {
                for (char c : String.valueOf(count).toCharArray()) {
                    chars[write++] = c;
                }
            }
        }

        return write; // return compressed length
    }

    // Helper: convert first len characters of array into printable string like [a,2,b,2]
    private static String firstN(char[] arr, int len) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < len; i++) {
            if (i > 0) sb.append(",");
            sb.append(arr[i]);
        }
        sb.append("]");
        return sb.toString();
    }

    private static char[] arr(String s) {
        return s.toCharArray();
    }

    private static void runTest(no0443_String_Compression sol, char[] input, String expectedCompressed, int expectedLen) {
        char[] work = input.clone();
        int len = sol.compress(work);
        String got = firstN(work, len);
        System.out.println("Input:        " + firstN(input, input.length));
        System.out.println("Compressed:   " + got + "  (len=" + len + ")");
        System.out.println("Expected:     " + expectedCompressed + "  (len=" + expectedLen + ")");
        System.out.println(len == expectedLen && got.equals(expectedCompressed) ? "OK" : "Mismatch!");
        System.out.println();
    }

    public static void main(String[] args) {
        no0443_String_Compression sol = new no0443_String_Compression();

        // Sample 1
        runTest(sol, new char[]{'a','a','b','b','c','c','c'}, "[a,2,b,2,c,3]", 6);
        // Sample 2
        runTest(sol, new char[]{'a'}, "[a]", 1);
        // Sample 3
        runTest(sol, new char[]{'a','b','b','b','b','b','b','b','b','b','b','b','b'}, "[a,b,1,2]", 4);
        // All same -> count >= 10 case
        runTest(sol, new char[]{'a','a','a','a','a','a','a','a','a','a'}, "[a,1,0]", 3); // a10
        // Mixed singles
        runTest(sol, new char[]{'a','b','c'}, "[a,b,c]", 3);
        // Large group at end (11 c's)
        runTest(sol, new char[]{'a','b','c','c','c','c','c','c','c','c','c','c','c'}, "[a,b,c,1,1]", 5); // ab c11
        // Symbols
        runTest(sol, new char[]{'#','#','#','@'}, "[#,3,@]", 3);
        // Digits
        runTest(sol, new char[]{'1','1','1','2'}, "[1,3,2]", 3);
    }
}
