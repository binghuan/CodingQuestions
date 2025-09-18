// Doubly Linked List (simple and easy-to-understand version)

class Node {
    constructor(value) {
        this.value = value;   // Value stored in the node (integer)
        this.prev = null;     // Pointer to the previous node
        this.next = null;     // Pointer to the next node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.tail = null; // Tail of the list
        this.length = 0;  // Number of nodes (not required, but useful)
    }

    // 1) insert: insert an integer at the tail, O(1)
    insert(value) {
        const node = new Node(value);

        if (!this.head) {
            // Empty list: both head and tail point to the new node
            this.tail = node;
            this.head = node;
        } else {
            // Non-empty list: attach after tail and update tail
            node.prev = this.tail;        // Step 1: Link new node's prev to current tail
            this.tail.next = node;        // Step 2: Link current tail's next to new node
            this.tail = node;             // Step 3: Update tail pointer to new node
        }

        this.length++;
    }

    // 2) remove: remove the first node equal to value, return success, O(n)
    remove(value) {
        let cur = this.head;
        while (cur) {
            if (cur.value === value) {
                // Relink previous and next
                if (cur.prev) {
                    cur.prev.next = cur.next;
                } else {
                    this.head = cur.next;
                }
                if (cur.next) {
                    cur.next.prev = cur.prev;
                } else {
                    this.tail = cur.prev;
                }

                cur.next = cur.prev = null; // (optional) help GC release references
                this.length--;
                return true;
            }
            cur = cur.next;
        }
        return false; // Not found
    }

    // 3) print: from head to tail
    printForward() {
        const out = [];
        let cur = this.head;
        while (cur) {
            out.push(cur.value);
            cur = cur.next;
        }
        console.log("head → tail:", out.join(" <-> "));
        return out; // Return the array if needed in code
    }

    // 3) print: from tail to head
    printBackward() {
        const out = [];
        let cur = this.tail;
        while (cur) {
            out.push(cur.value);
            cur = cur.prev;
        }
        console.log("tail → head:", out.join(" <-> "));
        return out;
    }
}

// --- Example usage ---
const dll = new DoublyLinkedList();
dll.insert(10);
dll.insert(20);
dll.insert(30);
dll.printForward();   // head → tail: 10 <-> 20 <-> 30
dll.printBackward();  // tail → head: 30 <-> 20 <-> 10

dll.remove(20);       // Remove the first 20
dll.printForward();   // head → tail: 10 <-> 30
dll.printBackward();  // tail → head: 30 <-> 10

