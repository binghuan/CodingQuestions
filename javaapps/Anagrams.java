package javaapps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author binghuan
 */
public class Anagrams {

// How to run me.
// javac javaapps/Anagrams.java ; java javaapps.Anagrams

    // ## Anagrams
    /* An anagram is a word that can be written as a permutation of the charactrs of another word.
    like "dirty room" and "dormitory" (ignore spaces). However, "the" and "thee" are not anagrams,
    sine "the" only has a single "e" whereas "thee" has two "e" characters
    (spaces can occur zero, or multiple times, however).

    Given a list of words as strings, ou should return another list of strings,
    each containing words that are mutual anagrams.

    Each string of the output should be a single group of anagrams joined with commas.

    Within an output string, the expressions should be sorted lexicograpically.
    If a group contains only a single element, output that one-element group as a single string.
    And the string should also be output in lexicographical order.
    Given e.g.:

    pear
    amleth
    dormitory
    tinsel
    dirty room
    hamlet
    listen
    silent

    ... the output would be:

    amleth,hamlet
    dirty room,dormitory
    listen,silent,tinsel
    pear

     */
    /**
     * @param args the command line arguments
     */

    private final static boolean DBG = true;
    public static void main(String[] args) {

        // Now here is the input, and index for each strings.
        String[] inputs = {"pear", "amleth", "dormitory", "tinsel", "dirty room", "hamlet", "listen", "silent"};
        List<String> tempArray = new ArrayList<String>();

        String result = "";

        // prepare strings.
        for(int i =0; i<  inputs.length; i++) {
            String original = inputs[i].replaceAll(" ", "");
            char[] chars = original.toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
            tempArray.add(sorted);
        }

        // Compare
        boolean[] hitTable = new boolean[inputs.length];
        for(int j =0; j< inputs.length; j++) {

            if(hitTable[j] == true) {
                continue;
            }

            if(DBG)System.out.print("Try :: " + inputs[j]);
            result += inputs[j];

            for(int k=0; k< inputs.length; k++) {
                if(k ==j) {
                    continue;
                }

                if(hitTable[k] == true) {
                    continue;
                }

                if(DBG)System.out.println("Compare: " + j + "]" + tempArray.get(j) + " VS " + k + "]" + tempArray.get(k));
                if(tempArray.get(j).equals(tempArray.get(k))) {
                    hitTable[k] = true;
                    result += "," + inputs[k];
                    if(DBG)System.out.println(" -> Hit");
                }
            }

            result += "\n";
        }

        if(DBG)System.out.println("==> ");
        System.out.println(result);
    }

}

