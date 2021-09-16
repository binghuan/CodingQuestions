fun main(args: Array<String>) {

    class Solution {
        fun lengthOfLongestSubstring(s: String): Int {
            println("## INPUT: $s");
            var temp = "";
            var ans = "";
            for (index in 0..s.length - 1) {

                val char = s.get(index);

                val pos = temp.indexOf(char);

                println("check $char in $temp --> $pos");

                temp = temp.plus(char);

                if (pos == -1) {
                    println("temp => $temp");
                } else {
                    print("replace temp from $temp");
                    temp = temp.substring(pos + 1);
                    println(" to $temp");
                }

                if (temp.length > ans.length) {
                    ans = temp;
                    println("current maxLength of substring = $ans");
                }
            }
            println("## OUTPUT: $ans")
            return ans.length;
        }
    }

    println(">> main");

    val solution = Solution();

    val s = "abcabcbb";

    solution.lengthOfLongestSubstring(s);
}

