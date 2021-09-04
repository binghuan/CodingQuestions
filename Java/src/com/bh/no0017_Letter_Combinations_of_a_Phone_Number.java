package com.bh;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class no0017_Letter_Combinations_of_a_Phone_Number {

    public static void main(String[] args) {
        Solution solution = new Solution();
        //solution.letterCombinations("23");
        solution.letterCombinations("");
    }
}

class Solution {
    public void dfs(
            final String digits,
            HashMap<Character, String[]> keyMapping,
            int selectedIndex,
            ArrayList<String> currentCombination,
            ArrayList<String> answer
    ) {

        if (digits.length() == 0) {
            return;
        }

        if (selectedIndex == digits.length()) {
            String combination = String.join("", currentCombination);
            answer.add(combination);
            System.out.println("PUSH: " + combination);
            return;
        }

        char theChar = digits.charAt(selectedIndex);

        for (String element : keyMapping.get(theChar)) {
            System.out.println("Get Char: " + element);
            currentCombination.add(element);
            String combination = String.join("", currentCombination);
            System.out.println("currentCombination: " + combination);

            dfs(
                    digits,
                    keyMapping,
                    selectedIndex + 1,
                    currentCombination,
                    answer
            );
            currentCombination.remove(currentCombination.size() - 1);
        }

    }

    public List<String> letterCombinations(String digits) {

        HashMap<Character, String[]> keyMapping = new HashMap<>();
        keyMapping.put('0', new String[]{" "});
        keyMapping.put('1', new String[]{""});
        keyMapping.put('2', new String[]{"a", "b", "c"});
        keyMapping.put('3', new String[]{"d", "e", "f"});
        keyMapping.put('4', new String[]{"g", "h", "i"});
        keyMapping.put('5', new String[]{"j", "k", "l"});
        keyMapping.put('6', new String[]{"m", "n", "o"});
        keyMapping.put('7', new String[]{"p", "q", "r", "s"});
        keyMapping.put('8', new String[]{"t", "u", "v"});
        keyMapping.put('9', new String[]{"w", "x", "y", "z"});

        ArrayList<String> currentCombination = new ArrayList<>();
        ArrayList<String> output = new ArrayList<>();

        dfs(digits, keyMapping, 0, currentCombination, output);
        System.out.println("OUTPUT: " + output.toString());
        return output;
    }
}
