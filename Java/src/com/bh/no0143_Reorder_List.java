package com.bh;

import java.util.*;

/**
 * LeetCode 143: Reorder List
 * 
 * Problem Description:
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 * 
 * Solution Approaches:
 * 1. Find Middle + Reverse + Merge (Optimal) - O(n) time, O(1) space
 * 2. Using Stack to store second half - O(n) time, O(n) space
 * 3. Using ArrayList to store all nodes - O(n) time, O(n) space
 * 
 * Core Idea:
 * - Find the middle of the list, reverse the second half, then merge alternately
 */
public class no0143_Reorder_List {

    // Define ListNode class
    static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        Solution2 solution2 = new Solution2();
        Solution3 solution3 = new Solution3();

        // Example 1: [1,2,3,4] -> [1,4,2,3]
        ListNode head1 = createList(new int[]{1, 2, 3, 4});
        System.out.println("=== Example 1 ===");
        System.out.println("Input: [1,2,3,4]");
        System.out.print("Before reorder: ");
        printList(head1);
        
        solution.reorderList(head1);
        System.out.print("After reorder (Solution 1): ");
        printList(head1);
        System.out.println("Expected: [1,4,2,3]");
        System.out.println();

        // Example 2: [1,2,3,4,5] -> [1,5,2,4,3]
        ListNode head2 = createList(new int[]{1, 2, 3, 4, 5});
        System.out.println("=== Example 2 ===");
        System.out.println("Input: [1,2,3,4,5]");
        System.out.print("Before reorder: ");
        printList(head2);
        
        solution2.reorderList(head2);
        System.out.print("After reorder (Solution 2): ");
        printList(head2);
        System.out.println("Expected: [1,5,2,4,3]");
        System.out.println();

        // Example 3: Single node
        ListNode head3 = createList(new int[]{1});
        System.out.println("=== Example 3 ===");
        System.out.println("Input: [1]");
        System.out.print("Before reorder: ");
        printList(head3);
        
        solution3.reorderList(head3);
        System.out.print("After reorder (Solution 3): ");
        printList(head3);
        System.out.println("Expected: [1]");
        System.out.println();

        // Example 4: Two nodes
        ListNode head4 = createList(new int[]{1, 2});
        System.out.println("=== Example 4 ===");
        System.out.println("Input: [1,2]");
        System.out.print("Before reorder: ");
        printList(head4);
        
        solution.reorderList(head4);
        System.out.print("After reorder: ");
        printList(head4);
        System.out.println("Expected: [1,2]");
        System.out.println();
    }

    // ========== Solution 1: Find Middle + Reverse + Merge (Optimal) ==========
    /**
     * Solution 1: Find Middle + Reverse + Merge (Optimal)
     * 
     * Algorithm Steps:
     * 1. Use slow-fast pointers to find the middle of the list
     * 2. Split the list at the middle into two sublists
     * 3. Reverse the second sublist
     * 4. Merge the two sublists alternately
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    static class Solution {
        /**
         * Reorder the linked list in-place
         * 
         * @param head head of the linked list
         */
        public void reorderList(ListNode head) {
            if (head == null || head.next == null) {
                return;
            }

            // Step 1: Find the middle of the list
            ListNode mid = findMiddle(head);
            
            // Step 2: Split the list at middle
            ListNode secondHalf = mid.next;
            mid.next = null;
            
            // Step 3: Reverse the second half
            ListNode reversedSecond = reverseList(secondHalf);
            
            // Step 4: Merge two lists alternately
            mergeTwoLists(head, reversedSecond);
        }

        /**
         * Find the middle node of the linked list using slow-fast pointers
         * 
         * For even length: returns the first middle node
         * For odd length: returns the middle node
         * 
         * @param head head node of the linked list
         * @return middle node
         */
        private ListNode findMiddle(ListNode head) {
            ListNode slow = head;      // slow pointer, moves one step at a time
            ListNode fast = head;      // fast pointer, moves two steps at a time
            
            // When fast pointer reaches end, slow pointer is at middle
            while (fast.next != null && fast.next.next != null) {
                slow = slow.next;
                fast = fast.next.next;
            }
            
            return slow;
        }

        /**
         * Reverse a linked list iteratively
         * 
         * @param head head of the linked list to reverse
         * @return head of the reversed linked list
         */
        private ListNode reverseList(ListNode head) {
            ListNode prev = null;      // previous node
            ListNode curr = head;      // current node
            
            while (curr != null) {
                ListNode next = curr.next;  // save next node
                curr.next = prev;           // reverse current connection
                prev = curr;                // move prev pointer
                curr = next;                // move curr pointer
            }
            
            return prev;  // prev is the new head
        }

        /**
         * Merge two linked lists alternately
         * 
         * @param first first linked list
         * @param second second linked list
         */
        private void mergeTwoLists(ListNode first, ListNode second) {
            while (first != null && second != null) {
                // Save next nodes
                ListNode firstNext = first.next;
                ListNode secondNext = second.next;
                
                // Connect nodes
                first.next = second;
                second.next = firstNext;
                
                // Move pointers
                first = firstNext;
                second = secondNext;
            }
        }
    }

    // ========== Solution 2: Using Stack ==========
    /**
     * Solution 2: Using Stack
     * 
     * Algorithm:
     * 1. Traverse the list and push the second half nodes to stack
     * 2. Traverse the first half and pop from stack to connect alternately
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n/2) = O(n)
     */
    static class Solution2 {
        public void reorderList(ListNode head) {
            if (head == null || head.next == null) {
                return;
            }

            // Count total nodes
            int count = 0;
            ListNode temp = head;
            while (temp != null) {
                count++;
                temp = temp.next;
            }

            // Push second half nodes to stack
            Stack<ListNode> stack = new Stack<>();
            temp = head;
            
            // Move to the start of second half
            for (int i = 0; i < (count + 1) / 2; i++) {
                temp = temp.next;
            }
            
            // Push second half nodes to stack
            while (temp != null) {
                stack.push(temp);
                temp = temp.next;
            }

            // Reconnect the list
            temp = head;
            while (!stack.isEmpty()) {
                ListNode next = temp.next;
                ListNode stackNode = stack.pop();
                
                temp.next = stackNode;
                stackNode.next = next;
                temp = next;
            }
            
            // Set new tail node
            if (temp != null) {
                temp.next = null;
            }
        }
    }

    // ========== Solution 3: Using ArrayList ==========
    /**
     * Solution 3: Using ArrayList
     * 
     * Algorithm:
     * 1. Store all nodes in an ArrayList
     * 2. Use two pointers from both ends to reconnect alternately
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    static class Solution3 {
        public void reorderList(ListNode head) {
            if (head == null || head.next == null) {
                return;
            }

            // Store all nodes in a list
            List<ListNode> nodes = new ArrayList<>();
            ListNode curr = head;
            while (curr != null) {
                nodes.add(curr);
                curr = curr.next;
            }

            // Reconnect using two pointers
            int left = 0, right = nodes.size() - 1;
            while (left < right) {
                // Connect left -> right -> left+1
                nodes.get(left).next = nodes.get(right);
                if (left + 1 == right) {
                    break;  // avoid creating cycle
                }
                nodes.get(right).next = nodes.get(left + 1);
                
                left++;
                right--;
            }
            
            // Set tail node
            nodes.get(left).next = null;
        }
    }

    // ========== Helper Methods ==========
    
    /**
     * Create a linked list from an array
     */
    public static ListNode createList(int[] values) {
        if (values == null || values.length == 0) {
            return null;
        }
        
        ListNode head = new ListNode(values[0]);
        ListNode curr = head;
        
        for (int i = 1; i < values.length; i++) {
            curr.next = new ListNode(values[i]);
            curr = curr.next;
        }
        
        return head;
    }

    /**
     * Print the linked list
     */
    public static void printList(ListNode head) {
        List<Integer> values = new ArrayList<>();
        ListNode curr = head;
        
        while (curr != null) {
            values.add(curr.val);
            curr = curr.next;
        }
        
        System.out.println(values);
    }
}
