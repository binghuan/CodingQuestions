//
// Created by binghuan on 2025/9/19.
//

#include <iostream>

class Node {
public:
    int data;
    Node* prev;
    Node* next;

    Node(int value) : data(value), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;

public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}

    // Insert at the end
    void insert(int value) {
        Node* newNode = new Node(value);
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }

    // Remove a node with a specific value
    void remove(int value) {
        Node* current = head;
        while (current) {
            if (current->data == value) {
                if (current->prev) {
                    current->prev->next = current->next;
                } else {
                    head = current->next;
                }

                if (current->next) {
                    current->next->prev = current->prev;
                } else {
                    tail = current->prev;
                }

                delete current;
                return;
            }
            current = current->next;
        }
    }

    // Print the list forward
    void printForward() {
        Node* current = head;
        while (current) {
            std::cout << current->data << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }

    // Print the list backward
    void printBackward() {
        Node* current = tail;
        while (current) {
            std::cout << current->data << " ";
            current = current->prev;
        }
        std::cout << std::endl;
    }

    ~DoublyLinkedList() {
        Node* current = head;
        while (current) {
            Node* next = current->next;
            delete current;
            current = next;
        }
    }
};

int main() {
    DoublyLinkedList dll;

    // Test case 1: Insert elements
    std::cout << "Test Case 1: Insert elements" << std::endl;
    dll.insert(10);
    dll.insert(20);
    dll.insert(30);
    dll.printForward(); // Expected Output: 10 20 30
    dll.printBackward(); // Expected Output: 30 20 10

    // Test case 2: Remove an element
    std::cout << "\nTest Case 2: Remove an element" << std::endl;
    dll.remove(20);
    dll.printForward(); // Expected Output: 10 30
    dll.printBackward(); // Expected Output: 30 10

    // Test case 3: Remove head
    std::cout << "\nTest Case 3: Remove head" << std::endl;
    dll.remove(10);
    dll.printForward(); // Expected Output: 30
    dll.printBackward(); // Expected Output: 30

    // Test case 4: Remove tail
    std::cout << "\nTest Case 4: Remove tail" << std::endl;
    dll.remove(30);
    dll.printForward(); // Expected Output: (empty)
    dll.printBackward(); // Expected Output: (empty)

    // Test case 5: Insert after clearing
    std::cout << "\nTest Case 5: Insert after clearing" << std::endl;
    dll.insert(40);
    dll.insert(50);
    dll.printForward(); // Expected Output: 40 50
    dll.printBackward(); // Expected Output: 50 40

    return 0;
}
