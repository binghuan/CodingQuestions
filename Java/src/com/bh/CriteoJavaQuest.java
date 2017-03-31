package com.bh;

import java.awt.*;
import java.util.ArrayList;

/**
 * Created by binghuan on 31/03/2017.
 */
public class CriteoJavaQuest {

    //## HOW TO RUN
    //  javac com/bh/CriteoJavaQuest.java ; java com.bh.CriteoJavaQuest

    /**
     * @param args the command line arguments
     */

    private final static boolean DBG = true;

    public static void showQuestion(int number) {

        System.out.println("## Question " + number + "/47 - Java\n");

        switch(number) {
            case 2:
                break;
            case 3:
                QuestionNo3();
                break;
            case 4:
                QuestionNo4();
                break;
            case 5:
                QuestionNo5();
                break;
            case 6:
                QuestionNo6();
                break;
        }

        System.out.println("## ---------------------");
    }

    public static void QuestionNo3() {

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

        Point pointOne = new Point(23, 94);
        Point pointTwo = new Point(23, 94);

        System.out.println("Is pointOne equal to pointTwo :" + pointOne.equals(pointTwo));
        System.out.println("The hashcode of pointOne is " + System.identityHashCode(pointOne));
        System.out.println("The hashcode of pointTwo is " + System.identityHashCode(pointTwo));
    }

    public static void QuestionNo4() {

        ArrayList l = new ArrayList(2);
        l.add(1);
        l.add(1);
        l.add(1);

        System.out.println("Element in l ==> " + l);
        System.out.println("Return l.size() = " + l.size());

        // What is the value returned by l.size();


    }


    static class A {
        public static boolean isFoo(String params) {
            boolean result = false;

            if(params.equals("foo")) {
                result = true;
            }

            return result;
        }
    }

    public static void QuestionNo5() {


        boolean result = A.isFoo("foo");

        System.out.println("Is \"foo\" : " + result);

    }

    enum Planet {
        MERCURY, VENUS, EARTH
    }

    public static void QuestionNo6() {
        String content = "Given this code, what is true about it?";
        System.out.println("Planet.MERCURY == Planet.MERCURY ==> " + (Planet.MERCURY == Planet.MERCURY));
        System.out.println("Planet.MERCURY == Planet.VENUS ==> " + (Planet.MERCURY == Planet.VENUS));
        System.out.println("Planet.MERCURY.equals(Planet.MERCURY) ==> " + (Planet.MERCURY.equals(Planet.MERCURY)));

    }

    public static void main(String[] args) {

        for(int i=3; i< 7; i++) {
            showQuestion(i);
        }
    }

}
