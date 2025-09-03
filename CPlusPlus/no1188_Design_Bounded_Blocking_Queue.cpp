//
// Created by binghuan on 2025/9/4.
//

#include <iostream>
#include <queue>
#include <mutex>
#include <condition_variable>
#include <thread>
#include <chrono>
#include <vector>
using namespace std;

class BoundedBlockingQueue {
private:
    queue<int> q;                    // The actual queue to store elements
    int capacity;                    // Maximum capacity of the queue
    mutex mtx;                       // Mutex for thread synchronization
    condition_variable not_full;     // Condition variable for enqueue operations
    condition_variable not_empty;    // Condition variable for dequeue operations

public:
    BoundedBlockingQueue(int capacity) : capacity(capacity) {}

    void enqueue(int element) {
        unique_lock<mutex> lock(mtx);
        // Wait until queue is not full
        not_full.wait(lock, [this]() { return q.size() < capacity; });

        // Add element to queue
        q.push(element);
        cout << "Enqueued: " << element << " (Queue size: " << q.size() << ")" << endl;

        // Notify waiting dequeue operations
        not_empty.notify_one();
    }

    int dequeue() {
        unique_lock<mutex> lock(mtx);
        // Wait until queue is not empty
        not_empty.wait(lock, [this]() { return !q.empty(); });

        // Remove element from queue
        int element = q.front();
        q.pop();
        cout << "Dequeued: " << element << " (Queue size: " << q.size() << ")" << endl;

        // Notify waiting enqueue operations
        not_full.notify_one();

        return element;
    }

    int size() {
        lock_guard<mutex> lock(mtx);
        return q.size();
    }
};

// Test function for producer thread
void producer(BoundedBlockingQueue& queue, int start, int count) {
    for (int i = 0; i < count; i++) {
        queue.enqueue(start + i);
        // Small delay to make output more readable
        this_thread::sleep_for(chrono::milliseconds(100));
    }
}

// Test function for consumer thread
void consumer(BoundedBlockingQueue& queue, int count) {
    for (int i = 0; i < count; i++) {
        int value = queue.dequeue();
        // Small delay to make output more readable
        this_thread::sleep_for(chrono::milliseconds(150));
    }
}

int main() {
    cout << "Testing Bounded Blocking Queue:" << endl;

    // Test case 1: Basic functionality
    cout << "\n=== Test 1: Basic Enqueue/Dequeue ===" << endl;
    BoundedBlockingQueue queue1(3);

    // Single threaded test
    queue1.enqueue(1);
    queue1.enqueue(2);
    queue1.enqueue(3);

    cout << "Queue size: " << queue1.size() << endl;

    queue1.dequeue();
    queue1.dequeue();
    queue1.dequeue();

    cout << "Queue size after dequeue: " << queue1.size() << endl;

    // Test case 2: Multi-threaded test
    cout << "\n=== Test 2: Multi-threaded Operations ===" << endl;
    BoundedBlockingQueue queue2(2); // Small capacity to test blocking

    // Create producer and consumer threads
    thread producer1(producer, ref(queue2), 10, 5);  // Produce 10,11,12,13,14
    thread producer2(producer, ref(queue2), 20, 3);  // Produce 20,21,22
    thread consumer1(consumer, ref(queue2), 4);      // Consume 4 items
    thread consumer2(consumer, ref(queue2), 4);      // Consume 4 items

    // Wait for all threads to complete
    producer1.join();
    producer2.join();
    consumer1.join();
    consumer2.join();

    cout << "Final queue size: " << queue2.size() << endl;

    // Test case 3: Blocking behavior demonstration
    cout << "\n=== Test 3: Blocking Behavior ===" << endl;
    BoundedBlockingQueue queue3(1); // Capacity of 1

    cout << "Testing blocking enqueue (queue capacity = 1)..." << endl;

    // Start a thread that will try to enqueue multiple items
    thread blocking_producer([&queue3]() {
        cout << "Producer: Attempting to enqueue 100..." << endl;
        queue3.enqueue(100);
        cout << "Producer: Attempting to enqueue 200 (should block)..." << endl;
        queue3.enqueue(200);
        cout << "Producer: Enqueue 200 completed!" << endl;
    });

    // Wait a bit, then consume to unblock the producer
    this_thread::sleep_for(chrono::milliseconds(500));
    cout << "Main: Dequeuing to unblock producer..." << endl;
    queue3.dequeue();

    this_thread::sleep_for(chrono::milliseconds(500));
    cout << "Main: Dequeuing again..." << endl;
    queue3.dequeue();

    blocking_producer.join();

    cout << "\nAll tests completed!" << endl;
    return 0;
}
