#include <iostream>
#include <vector>
using namespace std;

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;

    ListNode() : val(0), next(nullptr) {
    }

    ListNode(int x) : val(x), next(nullptr) {
    }

    ListNode(int x, ListNode *next) : val(x), next(next) {
    }
};

class Solution {
public:
    // Iterative solution to reverse a singly linked list
    ListNode *reverseList(ListNode *head) {
        ListNode *prev = nullptr;
        ListNode *curr = head;
        while (curr) {
            ListNode *nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    // Recursive solution to reverse a singly linked list
    ListNode *reverseListRecursive(ListNode *head) {
        if (!head || !head->next) {
            return head;
        }
        ListNode *newHead = reverseListRecursive(head->next);
        head->next->next = head;
        head->next = nullptr;
        return newHead;
    }
};

// Helper function to create a linked list from a vector
ListNode *createList(const std::vector<int> &vals) {
    ListNode *dummy = new ListNode();
    ListNode *curr = dummy;
    for (int v: vals) {
        curr->next = new ListNode(v);
        curr = curr->next;
    }
    return dummy->next;
}

// Helper function to print a linked list
void printList(ListNode *head) {
    while (head) {
        std::cout << head->val;
        if (head->next) std::cout << ",";
        head = head->next;
    }
    std::cout << std::endl;
}

int main() {
    Solution sol;
    // Test case 1: [1,2,3,4,5]
    std::vector<int> vals1 = {1, 2, 3, 4, 5};
    ListNode *head1 = createList(vals1);
    ListNode *rev1 = sol.reverseList(head1);
    std::cout << "Iterative: ";
    printList(rev1);
    ListNode *head1b = createList(vals1);
    ListNode *rev1b = sol.reverseListRecursive(head1b);
    std::cout << "Recursive: ";
    printList(rev1b);

    // Test case 2: [1,2]
    std::vector<int> vals2 = {1, 2};
    ListNode *head2 = createList(vals2);
    ListNode *rev2 = sol.reverseList(head2);
    std::cout << "Iterative: ";
    printList(rev2);
    ListNode *head2b = createList(vals2);
    ListNode *rev2b = sol.reverseListRecursive(head2b);
    std::cout << "Recursive: ";
    printList(rev2b);

    // Test case 3: []
    std::vector<int> vals3 = {};
    ListNode *head3 = createList(vals3);
    ListNode *rev3 = sol.reverseList(head3);
    std::cout << "Iterative: ";
    printList(rev3);
    ListNode *head3b = createList(vals3);
    ListNode *rev3b = sol.reverseListRecursive(head3b);
    std::cout << "Recursive: ";
    printList(rev3b);
    return 0;
}
