
package com.bh;

/**
 * LeetCode 141: Linked List Cycle
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * Use Floyd's Tortoise and Hare algorithm for O(1) space.
 */
public class no0141_Linked_List_Cycle {

    // Definition for singly-linked list.
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
            next = null;
        }
    }

    static class Solution {
        public boolean hasCycle(ListNode head) {
            if (head == null || head.next == null) return false;
            ListNode slow = head;
            ListNode fast = head.next;
            while (fast != null && fast.next != null) {
                if (slow == fast) return true;
                slow = slow.next;
                fast = fast.next.next;
            }
            return false;
        }
    }

    // Helper to create a linked list with a cycle
    private static ListNode createList(int[] vals, int pos) {
        if (vals.length == 0) return null;
        ListNode head = new ListNode(vals[0]);
        ListNode curr = head;
        ListNode cycleNode = null;
        if (pos == 0) cycleNode = head;
        for (int i = 1; i < vals.length; i++) {
            curr.next = new ListNode(vals[i]);
            curr = curr.next;
            if (i == pos) cycleNode = curr;
        }
        if (pos != -1) curr.next = cycleNode;
        return head;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        // Test case 1: [3,2,0,-4], pos = 1 (cycle at node 2)
        ListNode head1 = createList(new int[]{3,2,0,-4}, 1);
        System.out.println("Test 1: " + solution.hasCycle(head1) + " | Expected: true");
        // Test case 2: [1,2], pos = 0 (cycle at node 1)
        ListNode head2 = createList(new int[]{1,2}, 0);
        System.out.println("Test 2: " + solution.hasCycle(head2) + " | Expected: true");
        // Test case 3: [1], pos = -1 (no cycle)
        ListNode head3 = createList(new int[]{1}, -1);
        System.out.println("Test 3: " + solution.hasCycle(head3) + " | Expected: false");
        // Test case 4: [], pos = -1 (empty list)
        ListNode head4 = createList(new int[]{}, -1);
        System.out.println("Test 4: " + solution.hasCycle(head4) + " | Expected: false");
    }
}

