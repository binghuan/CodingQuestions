package com.bh;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author BH_Lin
 */
public class Find1stNonRepeatedChar {

    //## HOW TO RUN
    //javac com/bh/Find1stNonRepeatedChar.java ; java com.bh.Find1stNonRepeatedChar

    //----------hamlet----------------------
    //Find first non repeated character
    //--------------------------------
    //
    //"bbb c ddd" -> camleth
    //
    //String input = "scrum of scrums"
    //
    //Expected output = "o" // 'o' 'f'
    private static String runMethod1(String input) {
        System.out.println("+++ runMethod1 +++");
        List<String> strTable = new ArrayList<String>();

        // 1st loop to get all uniq character into table.
        // O (n * n)  1000 ->  1 000 000
        for (int i = 0; i < input.length(); i++) { //n

            boolean hit = false;
            for (int j = 0; j < strTable.size(); j++) { //n

                if (strTable.get(j).equals(input.charAt(i))) {
                    // loop to check if there is an character existed.
                    hit = true;
                    break;
                    // go to check next char in string "input"
                }
            }
            if (hit == false) {
                strTable.add(String.valueOf(input.charAt(i)));
            }

        }

        // 2nd loop to count the number of occurrences for each chars
        int[] charTableCount = new int[strTable.size()];

        for (int i = 0; i < input.length(); i++) {
            //input.charAt(i)// get char and loop.

            for (int j = 0; j < strTable.size(); j++) {
                if (String.valueOf(input.charAt(i)).equals(strTable.get(j))) {
                    charTableCount[j] += 1;
                    break;// then, run next round.
                }
            }
        }

        // Final loop. uniq char has been added by order into strTable.
        for (int i = 0; i < charTableCount.length; i++) {
            if (charTableCount[i] == 1) {
                // return it's the first uniq char //
                System.out.println("==> " + strTable.get(i));
                return strTable.get(i); // 1
            }
        }

        return null;

        //input.length == 1000 ; n
        // 3*n
        //n^2  == n * n
        ///set/
        // map
        // list
        //   hashMap.containsKey('c') // n: 1 000 000
        //   treeMap.containsKey('c') // n: 1 000 000
        //   // key value
        //   arrayList.contains('c') // n
        //   hashSet.contains('c') --> set has uniq char in it.
        //   quicksort -> O ( n log n )
    }

    public static String runMethod2(String input) {

        System.out.println("+++ runMethod2 +++");
        List<String> uniqStrTable = new ArrayList<String>();
        HashMap<String, Integer> charContainer = new HashMap<String, Integer>();
        for (int i = 0; i < input.length(); i++) {

            String inputChar = String.valueOf(input.charAt(i));
            if (!charContainer.containsKey(inputChar)) {
                charContainer.put(inputChar, 1);
                uniqStrTable.add(inputChar);
            } else {
                int count = charContainer.get(inputChar);
                charContainer.put(inputChar, count + 1);
                uniqStrTable.remove(inputChar);
            }
        }

        System.out.println("==> " + uniqStrTable.get(0));
        return uniqStrTable.get(0);
    }

    public static void main(String[] args) {

        //String input = "scrum of scrum";
        String input = "oh my god of oh my god";
        System.out.println("Input: \"" + input + "\"");

        runMethod1(input);
        runMethod2(input);
    }
}
