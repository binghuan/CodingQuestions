//
// Created by binghuan on 2025/9/4.
//

#include <iostream>
#include <unordered_map>
using namespace std;

// Double linked list node for LRU Cache
struct Node {
    int key;
    int value;
    Node* prev;
    Node* next;

    Node(int k = 0, int v = 0) : key(k), value(v), prev(nullptr), next(nullptr) {}
};

class LRUCache {
private:
    int capacity;
    unordered_map<int, Node*> cache; // hash table for O(1) access
    Node* head; // dummy head node
    Node* tail; // dummy tail node

    // Add node right after head
    void addNode(Node* node) {
        node->prev = head;
        node->next = head->next;
        head->next->prev = node;
        head->next = node;
    }

    // Remove an existing node from the linked list
    void removeNode(Node* node) {
        Node* prevNode = node->prev;
        Node* nextNode = node->next;
        prevNode->next = nextNode;
        nextNode->prev = prevNode;
    }

    // Move certain node to head
    void moveToHead(Node* node) {
        removeNode(node);
        addNode(node);
    }

    // Remove the last node (before tail)
    Node* removeTail() {
        Node* lastNode = tail->prev;
        removeNode(lastNode);
        return lastNode;
    }

public:
    LRUCache(int capacity) : capacity(capacity) {
        // Create dummy head and tail nodes
        head = new Node();
        tail = new Node();
        head->next = tail;
        tail->prev = head;
    }

    int get(int key) {
        auto it = cache.find(key);
        if (it != cache.end()) {
            // Key exists: move to head (mark as recently used)
            Node* node = it->second;
            moveToHead(node);
            return node->value;
        }
        return -1; // Key not found
    }

    void put(int key, int value) {
        auto it = cache.find(key);
        if (it != cache.end()) {
            // Key exists: update value and move to head
            Node* node = it->second;
            node->value = value;
            moveToHead(node);
        } else {
            // Key doesn't exist: create new node
            Node* newNode = new Node(key, value);

            if (cache.size() >= capacity) {
                // Cache is full: remove least recently used item
                Node* tail_node = removeTail();
                cache.erase(tail_node->key);
                delete tail_node;
            }

            // Add new node to head and hash table
            addNode(newNode);
            cache[key] = newNode;
        }
    }

    // Helper function to display cache contents (for testing)
    void display() {
        cout << "Cache contents (most recent -> least recent): ";
        Node* curr = head->next;
        while (curr != tail) {
            cout << "(" << curr->key << ":" << curr->value << ") ";
            curr = curr->next;
        }
        cout << endl;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */

int main() {
    cout << "Testing LRU Cache:" << endl;

    // Test case 1: Basic functionality
    cout << "\nTest case 1: Basic functionality" << endl;
    LRUCache* lRUCache = new LRUCache(2);
    lRUCache->put(1, 1); // cache is {1=1}
    lRUCache->display();
    lRUCache->put(2, 2); // cache is {1=1, 2=2}
    lRUCache->display();
    cout << "get(1): " << lRUCache->get(1) << " (should be 1)" << endl;    // return 1
    lRUCache->display(); // cache is {2=2, 1=1}
    lRUCache->put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    lRUCache->display();
    cout << "get(2): " << lRUCache->get(2) << " (should be -1)" << endl;   // returns -1 (not found)
    lRUCache->put(4, 4); // LRU key was 1, evicts key 1, cache is {3=3, 4=4}
    lRUCache->display();
    cout << "get(1): " << lRUCache->get(1) << " (should be -1)" << endl;   // return -1 (not found)
    cout << "get(3): " << lRUCache->get(3) << " (should be 3)" << endl;    // return 3
    lRUCache->display();
    cout << "get(4): " << lRUCache->get(4) << " (should be 4)" << endl;    // return 4
    lRUCache->display();

    delete lRUCache;

    // Test case 2: Update existing key
    cout << "\nTest case 2: Update existing key" << endl;
    LRUCache* cache2 = new LRUCache(2);
    cache2->put(1, 10);
    cache2->put(2, 20);
    cache2->display();
    cache2->put(1, 15); // Update key 1's value
    cache2->display();
    cout << "get(1): " << cache2->get(1) << " (should be 15)" << endl;
    cout << "get(2): " << cache2->get(2) << " (should be 20)" << endl;

    delete cache2;

    cout << "\nAll tests completed!" << endl;
    return 0;
}
