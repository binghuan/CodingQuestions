/*

    Coding Quest from BNP PARIBAS GROUP
    Question: 
        Show the output 

    Answer: 
        ===ChildClass===
        ChildClass.MethodA
        ChildClass.MethodB
        ParentClass.MethodC
        ChildClass.MethodA
        ParentClass.MethodB
        ===ChildClass as ParentClass===
        ChildClass.MethodA
        ParentClass.MethodB
        ParentClass.MethodC
        ChildClass.MethodA
        ParentClass.MethodB
 */

using System;

class Program {
    static void Main (string[] args) {
        ChildClass c = new ChildClass ();
        ParentClass p = c as ParentClass;
        System.Console.WriteLine ("===ChildClass===");
        c.MethodA ();
        c.MethodB ();
        c.MethodC ();
        System.Console.WriteLine ("===ChildClass as ParentClass===");
        p.MethodA();
        p.MethodB();
        p.MethodC ();
        System.Console.Read ();
    }
}

class ParentClass {
    public virtual void MethodA () {
        System.Console.WriteLine ("ParentClass.MethodA");
    }

    public void MethodB () {
        System.Console.WriteLine ("ParentClass.MethodB");
    }

    public void MethodC () {
        System.Console.WriteLine ("ParentClass.MethodC");
        MethodA ();
        MethodB ();
    }
}

class ChildClass : ParentClass {
    public override void MethodA () {
        System.Console.WriteLine ("ChildClass.MethodA");
    }

    public void MethodB () {
        System.Console.WriteLine ("ChildClass.MethodB");
    }
}