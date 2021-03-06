package com.bh;

import java.awt.*;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;
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
            System.out.println("## Question " + number + "/37 - Java ##\n");
        } catch (NoSuchMethodException e) {
            //e.printStackTrace();
            return;
        }

        Object obj = new Object();
        try {
            clazz.getMethod(functionName).invoke(obj);
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

    public static void QuestionNo2() {
        System.out.println("Q2: Among these primitive types, which one(s) exists in Java?");
        System.out.println("Options: { A: int, B: bool, C: float, D: unit }");
        System.out.println("--> Answer: A, C");
//
//        According to this document: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
//        There are 8 primitive types for java:
//        1. byte
//        2. short
//        3. int
//        4. long
//        5. float
//        6. double
//        7. boolean
//        8. char
    }

    public static void QuestionNo3() {

        System.out.println("Q3: if two objects are equals then they should have the same hashcode?");
        System.out.println("Options: A: True, B:   False");

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
        System.out.println("Q4:");
        ArrayList l = new ArrayList(2);
        l.add(1);
        l.add(1);
        l.add(1);

        System.out.println("Element in l ==> " + l);
        System.out.println("Return l.size() = " + l.size());

        // What is the value returned by l.size();


    }

    public static void QuestionNo5() {
        System.out.println("Q5:");
        boolean result = A5.isFoo("foo");

        System.out.println("Is \"foo\" : " + result);

    }

    enum Planet {
        MERCURY, VENUS, EARTH
    }

    public static void QuestionNo6() {
        System.out.println("Q6:");
        String content = "Given this code, what is true about it?";
        System.out.println("Planet.MERCURY == Planet.MERCURY ==> " + (Planet.MERCURY == Planet.MERCURY));
        System.out.println("Planet.MERCURY == Planet.VENUS ==> " + (Planet.MERCURY == Planet.VENUS));
        System.out.println("Planet.MERCURY.equals(Planet.MERCURY) ==> " + (Planet.MERCURY.equals(Planet.MERCURY)));

    }

    public static void QuestionNo7() {
        System.out.println("Q7: Which method is called when a thread is executed?");
        System.out.println("Options: { A: execute(), B: exec(), C: do(), D: run(), E: play()}");
//        Reference: https://docs.oracle.com/javase/tutorial/essential/concurrency/runthread.html
//        Answer: It might be {D: "run"}.
    }

    public static void QuestionNo8() {
        System.out.println("Q8: Type the name of a class belonging to the package java.lang");
        System.out.println("which allows to concatenate efficient strings of characters.");
        System.out.println("--> Answer: concat()");
        "".concat("");
    }

    public static void QuestionNo9() {
        int i1 = 5;
        int i2 = 2;
        int i3 = i1 / i2;

        System.out.println("What is the value of i3?");
        System.out.println("Answer: " + i3);
    }

    public static void QuestionNo10() {
        int i = 0;
        System.out.println(i++);

        System.out.println("Type the result displayed by the piece of code.");
    }

    class UserService {
        ArrayList<Integer> ids = new ArrayList<Integer>();
        ArrayList<String> names = new ArrayList<String>();

        void add(int identifiant, String nom) {
            ids.add(identifiant);
            names.add(nom);
        }

        String findNameById(int id) {
            for (int i = ids.size() - 1; i >= 0; i--) {

                if (ids.get(i) == id) {
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

    public static void QuestionNo12() {
        System.out.println("Q12: A java class can have more than one parent class?");
        System.out.println("--> Answer: False");
//
//        Multiple inheritance is not allowed in Java. Use delegates and interfaces instead
//        Reference: http://stackoverflow.com/questions/2031759/how-to-inherit-from-multiple-base-classes-in-java
    }

    public static void QuestionNo13() {
        System.out.println("What is the value of s?");
        String s = null;
        if (s == null) {
            System.out.println("s is null");
        }

        // It's initialized to null if you do nothing, as are all reference types.
        // reference: http://stackoverflow.com/questions/5389200/what-is-a-java-strings-default-initial-value

    }

    public static void QuestionNo14() {
//        Q14: Update the code by implementing the following rules.
//            * if an exception is thrown by s.execute() then call c.rollback() and propagate the exception, otherwise call c.commit()
//            * In any circumstances, c.close() must be called before leaving the metho a(Service s, Connection c)

        Service service = new Service() {
            public void execute() throws Exception {
                System.out.println("execute");
            }

            @Override
            public void setConnection(Connection c) {
                System.out.println("setConnection");
            }
        };

        Connection connection = new Connection() {
            public void rollback() {
                System.out.println("rollback");
            }

            public void commit() {
                System.out.println("commit");
            }

            public void close() {
                System.out.println("close");
            }
        };

        A14 a14 = new A14();
        a14.a(service, connection);
    }

    public static void QuestionNo15() {
        System.out.println("Q15: A method declared as final means...");
        System.out.println("Options: { A: \"The method can't be overridden\", B: \"The method returns a constant\", C: \"It's impossible: it leads to compilation error\"}");
        System.out.println("--> Answer: A.");
//
//                As mentioned, final is used with a Java method to mark that
//                --> the method can't be overridden (for object scope) or hidden (for static).
//        This allows the original developer to create functionality that cannot be changed by subclasses, and that is all the guarantee it provides.
//        // Reference: http://stackoverflow.com/questions/5547663/java-final-method-what-does-it-promise
    }

    public static void QuestionNo16() {
        System.out.println("Q16: Make Counter.increment() thread safe");
        Counter.increment();
    }


    static class StringUtils {
        static String concat(String[] a) {
            String result = "";

            for (int i = 0; i < a.length; i++) {
                result += a[i];
            }

            return result;
        }
    }

    public static void QuestionNo17() {
        System.out.println("Q17: StringUtils.concat(String[] strings) should join character strings end to end.");
        System.out.println("For example, from an array which contains 'f', 'o', 'o', 'bar' it should result 'foobar'");
        System.out.println("Input: strings always contains at least one element");
        System.out.println("Implement StringUtils.concat(String[] strings)");
        System.out.println("--> output");

        String[] a = {"f", "o", "o", "bar"};
        System.out.println(StringUtils.concat(a));
    }

    public static void QuestionNo18() {
        System.out.println("Q18: Privates attributes are visible from subclasses.");
        System.out.println("--> Answer: False.");
    }

    public static void QuestionNo19() {
        System.out.println("Q19: What is the most common method signature to obtain a singleton?");
        System.out.println("Options: { A: \"getSingleton()\", B: \"instance()\", C: \"getInstance()\"}");
        System.out.println("--> Answer: A.");
    }

    static class A20 {
        static boolean a(int i, int j) {
            if (i == 1 || j == 1) {
                return true;
            }

            if ((i + j) == 1) {
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

        A20.a(1, 5);
        A20.a(2, 3);
        A20.a(-3, 4);
    }

    public static final int MAXSIZE = 100;

    public static void QuestionNo21() {
        System.out.println("Which option is a valid constant declaration in java?");
        System.out.println("X> define('MAXSZE', 100);");
        System.out.println("O> public static final int MAXSIZE = 100;");
        System.out.println("X> #define MAXSIZE 100");
        System.out.println("X> const int MAXSIZE = 100;");
    }

    public static void QuestionNo23() {
        System.out.println("Q23: public class A()");
        System.out.println("Who is the parent class of A?");
        System.out.println("options: { A: Root, B: Object, C: Class A has no parent class }");
    }

    public static void QuestionNo24() {
        System.out.println("Q24: public interface A extends B,C,D {}");
        System.out.println("This interface is correct if B,C and D are also interface.");
        System.out.println("options: { A: False, B: True}");
        System.out.println("--> Answer: False;");
    }

    public static void QuestionNo25() {
        System.out.println("In a base 2 system (binary), what is the value of 0001 & 0001?");
        System.out.println(0x0001 & 0x0001);
        //     01
        // and 01
        // --> 01
    }

    public static void QuestionNo26() {
        System.out.println("In a base 2 system (binary), what is the value of 01 | 11 ?");
        System.out.println(0x01 | 0x03);

        //     01
        // or  11
        // --> 11
    }

    public static void QuestionNo27() {
        System.out.println("Write the Echo program");
        // console> java Echo Hello you !
        // Hello you !
        // console>

        // * Please check the Echo.java
    }

    public static void formula28_2(int n) {
        System.out.println("if n = " + n);
        BigDecimal result = BigDecimal.ZERO;
        BigDecimal factorialN = new BigDecimal(1);
        BigDecimal factorialNminusM = new BigDecimal(1);
        int factorialM = 2 * 1;

        int solutionIndex = 2;

        for (int i = 1; i < n + 1; i++) {
            factorialN = factorialN.multiply(new BigDecimal(i));
        }
        //System.out.println("n! = " + factorialN);

        for (int i = 1; i < n - 2 + 1; i++) {
            factorialNminusM = factorialNminusM.multiply(new BigDecimal(i));
        }
        //System.out.println("(n-m)! = " + factorialNminusM);

        result = factorialN.divide(new BigDecimal(factorialM).multiply(factorialNminusM));
        System.out.println("then return " + result);
    }

    public static void formula28(int n) {
        // The formula is " n!/m!(n-m)! "

        System.out.println("if n = " + n);
        long result = 0;
        long factorialN = 1;
        int factorialNminusM = 1;
        int factorialM = 2 * 1;

        int solutionIndex = 2;
        switch (solutionIndex) {
            case 1: // for solution 1

                for (int i = 1; i < n + 1; i++) {
                    factorialN = factorialN * i;
                }
                System.out.println("n! = " + factorialN);

                for (int i = 1; i < n - 2 + 1; i++) {
                    factorialNminusM = factorialNminusM * i;
                }
                System.out.println("(n-m)! = " + factorialNminusM);

                result = factorialN / (factorialM * factorialNminusM);
                System.out.println("then return " + result);

                break;
            case 2: // for solution 2
                // Solution 2.
                for (int i = 1; i < n + 1; i++) {

                    if (i < n - 2 + 1) {
                        //factorialN =
                    } else {
                        factorialN = factorialN * i;
                        System.out.println("n! = " + factorialN);
                    }
                }

                result = factorialN / (factorialM);
                System.out.println("then return " + result);

                break;

            case 3: // for Solution 3 by using BigDecimal
                formula28_2(n);
                break;

        }
    }

    public static void QuestionNo28() {
        System.out.println("You have to organize a chess tournament in which players will compete head-to-head");
        System.out.println("Here is how we proceed to form the duels: select a first player randomly, " +
                "then, select this opponent at random among the remaining participants. " +
                "The pair of competitors obtained forms one of the duels of the tournament. " +
                "We proceed in the same manner to form all the other pairs." +
                "In this exercise, we would like to know many pairs it is possible to form knowing that the order of opponents in a pair does not matter." +
                "For example, with 3 players named A,B,C and D, it is possible to get 6 different pairs: AB, AC, AD, BC, BD, CD." +
                "Implement count to return the number of possible pairs. Parameter n corresponds to the number of players." +
                "Try to optimize your solution so that, ideally, the duration of treatment is the same of any n. " +
                "Input: 2 <= n <= 10000.");
        // Ref: http://wywu.pixnet.net/blog/post/27455156-%E6%8E%92%E5%88%97%E7%B5%84%E5%90%88%E5%9F%BA%E6%9C%AC%E5%85%AC%E5%BC%8F
        // The formula is " n!/m!(n-m!) "
        formula28(4);
        formula28(10000);
    }

    public static void QuestionNo30() {
        System.out.println("Complete the answer to make the following piece of code valid");
        A30 a = new A30();
        A30 b = new B30();
    }

    public static void QuestionNo32() {
        System.out.println("Try to improve the code displayed in the answer editor by keeping the current behavior of the program.");
        Dog sammy = new Dog("Sammy");
        Cat smokey = new Cat("Smokey");
        System.out.println(Application.getAnimalName(sammy));
        System.out.println(Application.getAnimalName(smokey));

        Dog2 sammy2 = new Dog2("Sammy");
        Cat2 smokey2 = new Cat2("Smokey");
        System.out.println(Application2.getAnimalName(sammy2));
        System.out.println(Application2.getAnimalName(smokey2));
    }


    public static void main(String[] args) {

        for (int i = 1; i < 38; i++) {
            showQuestion(i);
        }
    }

}

class A5 {
    public static boolean isFoo(String params) {
        boolean result = false;

        if (params.equals("foo")) {
            result = true;
        }

        return result;
    }
}

class A14 {

    void a(Service s, Connection c) {
        s.setConnection(c);
        try {
            s.execute();
            c.commit();
        } catch (Exception e) {
            c.rollback();
        } finally {
            c.close();
        }
    }
}

interface Service {
    void execute() throws Exception;

    void setConnection(Connection c);
}

interface Connection {
    void commit();

    void rollback();

    void close();
}

class Counter {
    private static int count = 0;

    synchronized public static int increment() {
        count = count + 1;
        return count;
    }
}

class A30 {

}

class B30 extends A30 {
}

abstract class Animal {
}

class Dog extends Animal {
    String name;

    Dog(String name) {
        this.name = name;
    }

    String getName() {
        return name;
    }
}

class Cat extends Animal {
    String name;

    Cat(String name) {
        this.name = name;
    }

    String getName() {
        return name;
    }
}

class Application {
    static String getAnimalName(Animal a) {
        String name = null;
        if (a instanceof Dog) {
            name = ((Dog) a).getName();
        } else if (a instanceof Cat) {
            name = ((Cat) a).getName();
        }
        return name;
    }
}

abstract class Animal2 {
    String name;

    String getName() {
        return this.name;
    }
}

class Dog2 extends Animal2 {
    Dog2(String name) {
        super.name = name;
    }
}

class Cat2 extends Animal2 {
    Cat2(String name) {
        super.name = name;
    }
}

class Application2 {
    static String getAnimalName(Animal2 a) {
        return a.getName();
    }
}
