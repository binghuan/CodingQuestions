//
// Created by binghuan on 2025/9/9.
//

#include <vector>
#include <queue>
#include <iostream>
using namespace std;

/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
        priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);
        for (auto node : lists) {
            if (node) pq.push(node);
        }
        ListNode dummy(0);
        ListNode* tail = &dummy;
        while (!pq.empty()) {
            ListNode* node = pq.top(); pq.pop();
            tail->next = node;
            tail = tail->next;
            if (node->next) pq.push(node->next);
        }
        return dummy.next;
    }
};

// Helper function to convert vector<vector<int>> to vector<ListNode*>
vector<ListNode*> buildLists(const vector<vector<int>>& data) {
    vector<ListNode*> lists;
    for (const auto& vec : data) {
        ListNode dummy(0);
        ListNode* tail = &dummy;
        for (int v : vec) {
            tail->next = new ListNode(v);
            tail = tail->next;
        }
        lists.push_back(dummy.next);
    }
    return lists;
}

// Helper function to print a linked list
void printList(ListNode* head) {
    if (!head) {
        cout << "[]" << endl;
        return;
    }
    cout << "[";
    while (head) {
        cout << head->val;
        if (head->next) cout << ",";
        head = head->next;
    }
    cout << "]" << endl;
}

// Helper function to convert linked list to vector for verification
vector<int> listToVector(ListNode* head) {
    vector<int> result;
    while (head) {
        result.push_back(head->val);
        head = head->next;
    }
    return result;
}

// Helper function to free memory
void freeList(ListNode* head) {
    while (head) {
        ListNode* tmp = head;
        head = head->next;
        delete tmp;
    }
}

// Test function
void runTest(int testNum, const vector<vector<int>>& input, const vector<int>& expected) {
    cout << "Test Case " << testNum << ":" << endl;
    cout << "Input: [";
    for (size_t i = 0; i < input.size(); ++i) {
        cout << "[";
        for (size_t j = 0; j < input[i].size(); ++j) {
            cout << input[i][j];
            if (j < input[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < input.size() - 1) cout << ",";
    }
    cout << "]" << endl;

    auto lists = buildLists(input);
    Solution sol;
    ListNode* merged = sol.mergeKLists(lists);

    cout << "Output: ";
    printList(merged);

    vector<int> result = listToVector(merged);
    bool passed = (result == expected);
    cout << "Expected: [";
    for (size_t i = 0; i < expected.size(); ++i) {
        cout << expected[i];
        if (i < expected.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    cout << "Result: " << (passed ? "PASS" : "FAIL") << endl;
    cout << "----------------------------------------" << endl;

    freeList(merged);
}

int main() {
    cout << "Testing Merge k Sorted Lists" << endl;
    cout << "========================================" << endl;

    // Test Case 1: Example 1 from LeetCode
    runTest(1, {{1,4,5},{1,3,4},{2,6}}, {1,1,2,3,4,4,5,6});

    // Test Case 2: Empty input
    runTest(2, {}, {});

    // Test Case 3: Single empty list
    runTest(3, {{}}, {});

    // Test Case 4: Single non-empty list
    runTest(4, {{1,2,3}}, {1,2,3});

    // Test Case 5: Two lists
    runTest(5, {{1,3,5},{2,4,6}}, {1,2,3,4,5,6});

    // Test Case 6: Lists with negative numbers
    runTest(6, {{-2,1,4},{-1,0,3}}, {-2,-1,0,1,3,4});

    // Test Case 7: Lists with duplicate values
    runTest(7, {{1,1,2},{1,1,2},{2,2,3}}, {1,1,1,1,2,2,2,2,3});

    cout << "All tests completed!" << endl;
    return 0;
}
