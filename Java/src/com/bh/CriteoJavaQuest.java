package com.bh;

import java.awt.*;
import java.lang.reflect.InvocationTargetException;
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

        String functionName = "QuestionNo" + number;
        //System.out.println("Call function : " + functionName);
        Class clazz = CriteoJavaQuest.class;
        try {
            clazz.getMethod(functionName);
            System.out.println("## Question " + number + "/47 - Java ##\n");
        } catch (NoSuchMethodException e) {
            //e.printStackTrace();
            return;
        }

        Object obj = new Object();
        try {
            clazz.getMethod(functionName).invoke(obj );
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            return;
        } catch (InvocationTargetException e) {
            e.printStackTrace();
            return;
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
            return;
        }

        System.out.println("## -------------------------------");
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

    public static void QuestionNo9() {
        int i1 = 5;
        int i2 = 2;
        int i3 = i1/i2;

        System.out.println("What is the value of i3?");
        System.out.println("Answer: " + i3);
    }

    public static void QuestionNo10() {
        int i = 0;
        System.out.println(i++);

        System.out.println("Type the result displayed by the piece of code.");
    }


    class UserService{
        ArrayList<Integer> ids = new ArrayList<Integer>();
        ArrayList<String> names = new ArrayList<String>();

        void add(int identifiant, String nom) {
            ids.add(identifiant);
            names.add(nom);
        }

        String findNameById(int id) {
            for(int i= ids.size() - 1; i>= 0; i--) {

                if(ids.get(i) == id) {
                    return names.get(i);
                }
            }

            return null;
        }
    }

    public static void QuestionNo11() {
        System.out.println("Among the following options, which class would you use to rewrite UsersService.");
        System.out.println("Options: [ 'Stack', 'Vector', 'LinkedList', 'ArrayList', 'HashMap', 'Hashset']");
    }

    public static void QuestionNo13() {
        System.out.println("What is the value of s?");
        String s = null;
        if(s == null) {
            System.out.println("s is null");
        }

        // It's initialized to null if you do nothing, as are all reference types.
        // reference: http://stackoverflow.com/questions/5389200/what-is-a-java-strings-default-initial-value

    }

    static class A20{
        static boolean a(int i, int j)
        {
            if(i == 1 || j == 1) {
                return true;
            }

            if((i+j) == 1) {
                return true;
            }

            return false;
        }
    }

    public static void QuestionNo20() {
        System.out.println("A.a(int i, int j) should return true if one of the arguments equals 1 or if their sum is equal to 1");
        System.out.println("For example:");
        System.out.println("A.a(1,5) return true");
        System.out.println("A.a(2,3) return false");
        System.out.println("A.a(-3,4) return true");

        A20.a(1,5);
        A20.a(2,3);
        A20.a(-3,4);
    }

    public static final int MAXSIZE = 100;
    public static void QuestionNo21() {
        System.out.println("Which option is a valid constant declaration in java?");
        System.out.println("X> define('MAXSZE', 100);");
        System.out.println("O> public static final int MAXSIZE = 100;");
        System.out.println("X> #define MAXSIZE 100");
        System.out.println("X> const int MAXSIZE = 100;");
    }

    public static void QuestionNo25() {
        System.out.println("In a base 2 system (binary), what is the value of 0001 & 0001?");
        System.out.println(0x0001&0x0001);
        //     01
        // and 01
        // --> 01
    }

    public static void QuestionNo26() {
        System.out.println("In a base 2 system (binary), what is the value of 01 | 11 ?");
        System.out.println(0x01|0x03);

        //     01
        // or  11
        // --> 11
    }

//    abstract class Animal{}
//    class Dog extends Animal {
//
//    }

    public static void main(String[] args) {

        for(int i=1; i< 38; i++) {
            showQuestion(i);
        }
    }

}
