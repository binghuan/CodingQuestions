//
//  main.cpp
//  truetelCodingQuestions
//
//  Created by BH_Lin on 2019/2/12.
//  Copyright © 2019 Studio Bing-Huan. All rights reserved.
/*
 Coding Question for Company: https://www.104.com.tw/jobbank/custjob/index.php?r=cust&j=483a446b565c3f2238423a1d1d1d1d5f2443a363189j56
 http://truetel.com/
*/

#include <iostream>
using namespace std;

// ---------------------------------------------------------------------------->
/* Coding Question 1:
 Description: Try to exchange two values without using any extra variable.
 */
void exchange(int *a, int *b)
{
    cout << ">> exchange" << endl;
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}
// ----------------------------------------------------------------------------<

// ---------------------------------------------------------------------------->
/* Coding Question 2:
 Description: What the output will be.
 */
class Base {
public:
    Base() {
        cout<< "Base Constructor " << endl;
    }
    ~Base() {
        cout<< "Base Destructor " << endl;
    }
};

class Derived: public Base {
public:
    Derived() {
        cout<< "Derived Constructor " << endl;
    }
    ~Derived() {
        cout<< "Derived Destructor " << endl;
    }
};

class Base2 {
public:
    Base2() {
        cout<< "Base Constructor " << endl;
    }
    virtual ~Base2() {
        cout<< "Base Destructor " << endl;
    }
};

class Derived2: public Base2 {
public:
    Derived2() {
        cout<< "Derived Constructor " << endl;
    }
    ~Derived2() {
        cout<< "Derived Destructor " << endl;
    }
};
// ----------------------------------------------------------------------------<

// ---------------------------------------------------------------------------->
/* Coding Question 4:
 Description: Have a design pattern for singleton.
 */
class Lock {
public:
    Lock() {}
    ~Lock() {}
    void AcquireLock() {}
    void ReleaseLock() {}
};

template<class T> class Singleton
{
    // Write the implementation here.
    
private:
    static T* m_pInstance;
    Singleton(){}
    
public:
    static T *instance() {
        if(!m_pInstance) {
            m_pInstance = new T;
        }
        
        return m_pInstance;
    }
};
template <class T> T* Singleton<T>::m_pInstance=NULL;

class Foo {
private:
    int i;
public:
    Foo() {i=0;}
    void test() {
        cout<< "i is " << i << endl;
        i++;
    }
};
// ----------------------------------------------------------------------------<

int main(int argc, const char * argv[]) {
    
    // ------------------------------------------------------------------------>
    /* Coding Question 1:
     Description: Try to exchange two values without using any extra variable.
     */
    
    int a = 1;
    int b = 2;
    cout << "## Before exchanging" << endl;
    cout << "a: " << a <<endl;
    cout << "b: " << b <<endl;
    exchange(&a,&b);
    cout << "## After exchanging" << endl;
    cout << "a: " << a <<endl;
    cout << "b: " << b <<endl;
    // ------------------------------------------------------------------------<
    
    // ------------------------------------------------------------------------>
    /* Coding Question 2-1:
     Description: What the output will be.
     */
    cout << "## Question 2-1 ##" << endl;
    Base *p = new Derived();
    delete p;
    
    // Anwser is: The father's constructor/destructor will be called
    //              before child's constructor/destructor
//    Base Constructor
//    Derived Constructor
//    Base Destructor
    
    /* Coding Question 2-2:
     Description: What the output will be.
     If add Keyword "Virtual in front of the ~Base()
     */
    cout << "## Question 2-2 ##" << endl;
    Base2 *p2 = new Derived2();
    delete p2;
    
    // Anwser is:
//    Base Constructor
//    Derived Constructor
//    Derived Destructor
//    Base Destructor
    // ------------------------------------------------------------------------<
    
    // ------------------------------------------------------------------------>
    /* Coding Question 4-1:
     Description: Have a design pattern for singleton.
     */
    Foo* singleton_foo = Singleton<Foo>::instance();
    singleton_foo->test();
    Foo* singleton_fool = Singleton<Foo>::instance();
    singleton_fool->test();
    
    
    // Next Design if for thread safe.
    
    // ------------------------------------------------------------------------<
    
    
    return 0;
}
