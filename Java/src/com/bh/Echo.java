package com.bh;

/**
 * Created by binghuan on 09/04/2017.
 */
public class Echo {
    //## HOW TO RUN
    //  javac com/bh/Echo.java ; java com.bh.Echo


    public static void main(String[] args) {

        System.out.println("Write the Echo program");
        // console> java Echo Hello you !
        // Hello you !
        // console>

        for(int i=0; i< args.length ; i++) {
            System.out.println(args[i]);
        }

    }

}
