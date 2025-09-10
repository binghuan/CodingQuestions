//
// Created by binghuan on 2025/9/10.
//

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
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
        // 建立一個虛擬頭節點(dummy)，方便操作
        ListNode dummy;
        ListNode *tail = &dummy; // tail指向目前合併後的最後一個節點

        // 同時遍歷兩個串列
        while (list1 && list2) {
            if (list1->val < list2->val) {
                tail->next = list1;
                list1 = list1->next;
            } else {
                tail->next = list2;
                list2 = list2->next;
            }
            tail = tail->next;
        }

        // 其中一個串列可能還有剩下的，直接接上去
        tail->next = list1 ? list1 : list2;

        // 返回合併後的串列（dummy.next 是真正的頭節點）
        return dummy.next;
    }
};

#include <iostream>
using namespace std;

// 測試用函式：輸出串列
void printList(ListNode *head) {
    while (head) {
        cout << head->val << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Solution solution;
    // 測試範例：list1 = [1,2,4], list2 = [1,3,4]
    ListNode *list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    ListNode *list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

    ListNode *result = solution.mergeTwoLists(list1, list2);
    printList(result); // 輸出: 1 1 2 3 4 4
    return 0;
}
