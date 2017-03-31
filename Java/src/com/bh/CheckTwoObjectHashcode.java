package com.bh;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 *
 * @author binghuan
 */
public class CheckTwoObjectHashcode {

    //## HOW TO RUN
    //  javac com/bh/CheckTwoObjectHashcode.java ; java com.bh.CheckTwoObjectHashcode

    // Question:
    //  if two objects are equals then they should have the same hashcode?
    //
    // Options:
    // A:   True
    // B:   False

    // After verification:
    // The output is

    // The hashcode of pointOne is 1360875712
    // The hashcode of pointTwo is 1625635731

    // So, this answer is "NO". --> B: False

    // Reference: https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html

    private final static boolean DBG = true;

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        Point pointOne = new Point(23, 94);
        Point pointTwo = new Point(23, 94);

        System.out.println("The hashcode of pointOne is " + System.identityHashCode(pointOne));
        System.out.println("The hashcode of pointTwo is " + System.identityHashCode(pointTwo));
    }

}
