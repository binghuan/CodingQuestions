//
// Created by binghuan on 2025/9/18.
//

#include <iostream>
#include <vector>
#include <stdexcept>

using namespace std;

template<typename T>
class Stack {
private:
    vector<T> data;  // Use vector as underlying container

public:
    // Constructor
    Stack() {}

    // Push element to top of stack
    void push(const T& element) {
        data.push_back(element);
    }

    // Pop element from top of stack
    void pop() {
        if (isEmpty()) {
            throw runtime_error("Stack is empty - cannot pop");
        }
        data.pop_back();
    }

    // Get top element without removing it
    T& top() {
        if (isEmpty()) {
            throw runtime_error("Stack is empty - no top element");
        }
        return data.back();
    }

    // Get top element (const version)
    const T& top() const {
        if (isEmpty()) {
            throw runtime_error("Stack is empty - no top element");
        }
        return data.back();
    }

    // Check if stack is empty
    bool isEmpty() const {
        return data.empty();
    }

    // Get size of stack
    size_t size() const {
        return data.size();
    }

    // Clear all elements
    void clear() {
        data.clear();
    }

    // Print all elements (for debugging)
    void print() const {
        cout << "Stack (top to bottom): ";
        if (isEmpty()) {
            cout << "empty";
        } else {
            for (int i = data.size() - 1; i >= 0; i--) {
                cout << data[i];
                if (i > 0) cout << " -> ";
            }
        }
        cout << endl;
    }
};

int main() {
    cout << "=== Stack Implementation Test ===" << endl;

    // Test with integers
    Stack<int> intStack;

    cout << "\n1. Testing push operations:" << endl;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    intStack.print();
    cout << "Size: " << intStack.size() << endl;

    cout << "\n2. Testing top operation:" << endl;
    cout << "Top element: " << intStack.top() << endl;

    cout << "\n3. Testing pop operations:" << endl;
    intStack.pop();
    intStack.print();
    cout << "Top after pop: " << intStack.top() << endl;

    intStack.pop();
    intStack.print();

    cout << "\n4. Testing isEmpty:" << endl;
    cout << "Is empty: " << (intStack.isEmpty() ? "Yes" : "No") << endl;

    intStack.pop();
    cout << "After popping all elements:" << endl;
    cout << "Is empty: " << (intStack.isEmpty() ? "Yes" : "No") << endl;
    intStack.print();

    // Test with strings
    cout << "\n5. Testing with strings:" << endl;
    Stack<string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    stringStack.push("Stack");
    stringStack.print();

    cout << "String stack top: " << stringStack.top() << endl;

    // Test error handling
    cout << "\n6. Testing error handling:" << endl;
    Stack<int> emptyStack;
    try {
        emptyStack.pop();
    } catch (const runtime_error& e) {
        cout << "Caught exception: " << e.what() << endl;
    }

    try {
        emptyStack.top();
    } catch (const runtime_error& e) {
        cout << "Caught exception: " << e.what() << endl;
    }

    cout << "\n=== Test completed ===" << endl;

    return 0;
}
