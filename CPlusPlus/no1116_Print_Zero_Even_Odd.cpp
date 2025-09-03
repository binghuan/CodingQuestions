//
// Created by binghuan on 2025/9/4.
//

#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <functional>
#include <vector>
using namespace std;

class ZeroEvenOdd {
private:
    int n;
    int current;                    // Current number to print
    mutex mtx;                      // Mutex for synchronization
    condition_variable cv;          // Condition variable for thread coordination
    bool zero_turn;                 // Flag to indicate if it's zero's turn

public:
    ZeroEvenOdd(int n) : n(n), current(1), zero_turn(true) {}

    // printNumber(x) outputs "x", where x is an integer.
    void zero(function<void(int)> printNumber) {
        for (int i = 0; i < n; i++) {
            unique_lock<mutex> lock(mtx);
            // Wait until it's zero's turn
            cv.wait(lock, [this]() { return zero_turn; });

            printNumber(0);
            zero_turn = false;  // Now it's even/odd's turn
            cv.notify_all();
        }
    }

    void even(function<void(int)> printNumber) {
        for (int i = 2; i <= n; i += 2) {
            unique_lock<mutex> lock(mtx);
            // Wait until it's not zero's turn and current number is even
            cv.wait(lock, [this]() { return !zero_turn && current % 2 == 0; });

            printNumber(current);
            current++;
            zero_turn = true;   // Back to zero's turn
            cv.notify_all();
        }
    }

    void odd(function<void(int)> printNumber) {
        for (int i = 1; i <= n; i += 2) {
            unique_lock<mutex> lock(mtx);
            // Wait until it's not zero's turn and current number is odd
            cv.wait(lock, [this]() { return !zero_turn && current % 2 == 1; });

            printNumber(current);
            current++;
            zero_turn = true;   // Back to zero's turn
            cv.notify_all();
        }
    }
};

// Helper function to capture printed numbers for testing
vector<int> output;
mutex output_mutex;

void printNumber(int x) {
    lock_guard<mutex> lock(output_mutex);
    cout << x;
    output.push_back(x);
}

void clearOutput() {
    lock_guard<mutex> lock(output_mutex);
    output.clear();
}

void printOutput() {
    lock_guard<mutex> lock(output_mutex);
    cout << " -> [";
    for (size_t i = 0; i < output.size(); i++) {
        cout << output[i];
        if (i < output.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    cout << "Testing Print Zero Even Odd:" << endl;

    // Test case 1: n = 2
    cout << "\nTest case 1: n = 2" << endl;
    cout << "Expected output: 0102" << endl;
    cout << "Actual output: ";

    clearOutput();
    ZeroEvenOdd zeroEvenOdd1(2);

    thread t1(&ZeroEvenOdd::zero, &zeroEvenOdd1, printNumber);
    thread t2(&ZeroEvenOdd::even, &zeroEvenOdd1, printNumber);
    thread t3(&ZeroEvenOdd::odd, &zeroEvenOdd1, printNumber);

    t1.join();
    t2.join();
    t3.join();

    printOutput();

    // Test case 2: n = 5
    cout << "\nTest case 2: n = 5" << endl;
    cout << "Expected output: 0102030405" << endl;
    cout << "Actual output: ";

    clearOutput();
    ZeroEvenOdd zeroEvenOdd2(5);

    thread t4(&ZeroEvenOdd::zero, &zeroEvenOdd2, printNumber);
    thread t5(&ZeroEvenOdd::even, &zeroEvenOdd2, printNumber);
    thread t6(&ZeroEvenOdd::odd, &zeroEvenOdd2, printNumber);

    t4.join();
    t5.join();
    t6.join();

    printOutput();

    // Test case 3: n = 1
    cout << "\nTest case 3: n = 1" << endl;
    cout << "Expected output: 01" << endl;
    cout << "Actual output: ";

    clearOutput();
    ZeroEvenOdd zeroEvenOdd3(1);

    thread t7(&ZeroEvenOdd::zero, &zeroEvenOdd3, printNumber);
    thread t8(&ZeroEvenOdd::even, &zeroEvenOdd3, printNumber);
    thread t9(&ZeroEvenOdd::odd, &zeroEvenOdd3, printNumber);

    t7.join();
    t8.join();
    t9.join();

    printOutput();

    // Test case 4: n = 10
    cout << "\nTest case 4: n = 10" << endl;
    cout << "Expected output: 01020304050607080910" << endl;
    cout << "Actual output: ";

    clearOutput();
    ZeroEvenOdd zeroEvenOdd4(10);

    thread t10(&ZeroEvenOdd::zero, &zeroEvenOdd4, printNumber);
    thread t11(&ZeroEvenOdd::even, &zeroEvenOdd4, printNumber);
    thread t12(&ZeroEvenOdd::odd, &zeroEvenOdd4, printNumber);

    t10.join();
    t11.join();
    t12.join();

    printOutput();

    cout << "\nAll tests completed!" << endl;
    return 0;
}
