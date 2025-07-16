
package com.bh;

public class no0002_Add_Two_Numbers {

    // Definition for singly-linked list
    static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Example 1: l1 = [2,4,3], l2 = [5,6,4]
        // Expected output: [7,0,8] (342 + 465 = 807)
        ListNode l1_1 = createLinkedList(new int[]{2, 4, 3});
        ListNode l2_1 = createLinkedList(new int[]{5, 6, 4});
        ListNode result1 = solution.addTwoNumbers(l1_1, l2_1);
        System.out.println("Example 1:");
        System.out.println("Input: l1 = [2,4,3], l2 = [5,6,4]");
        System.out.println("Output: " + linkedListToString(result1));
        System.out.println("Expected: [7,0,8]");
        System.out.println("Explanation: 342 + 465 = 807");
        System.out.println("Test 1 " + (linkedListEquals(result1, new int[]{7, 0, 8}) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Example 2: l1 = [0], l2 = [0]
        // Expected output: [0]
        ListNode l1_2 = createLinkedList(new int[]{0});
        ListNode l2_2 = createLinkedList(new int[]{0});
        ListNode result2 = solution.addTwoNumbers(l1_2, l2_2);
        System.out.println("Example 2:");
        System.out.println("Input: l1 = [0], l2 = [0]");
        System.out.println("Output: " + linkedListToString(result2));
        System.out.println("Expected: [0]");
        System.out.println("Test 2 " + (linkedListEquals(result2, new int[]{0}) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Example 3: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        // Expected output: [8,9,9,9,0,0,0,1]
        ListNode l1_3 = createLinkedList(new int[]{9, 9, 9, 9, 9, 9, 9});
        ListNode l2_3 = createLinkedList(new int[]{9, 9, 9, 9});
        ListNode result3 = solution.addTwoNumbers(l1_3, l2_3);
        System.out.println("Example 3:");
        System.out.println("Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]");
        System.out.println("Output: " + linkedListToString(result3));
        System.out.println("Expected: [8,9,9,9,0,0,0,1]");
        System.out.println("Explanation: 9999999 + 9999 = 10009998");
        System.out.println("Test 3 " + (linkedListEquals(result3, new int[]{8, 9, 9, 9, 0, 0, 0, 1}) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Additional test case: Different lengths
        ListNode l1_4 = createLinkedList(new int[]{9, 9});
        ListNode l2_4 = createLinkedList(new int[]{1});
        ListNode result4 = solution.addTwoNumbers(l1_4, l2_4);
        System.out.println("Test 4:");
        System.out.println("Input: l1 = [9,9], l2 = [1]");
        System.out.println("Output: " + linkedListToString(result4));
        System.out.println("Expected: [0,0,1]");
        System.out.println("Explanation: 99 + 1 = 100");
        System.out.println("Test 4 " + (linkedListEquals(result4, new int[]{0, 0, 1}) ? "PASSED" : "FAILED"));
    }
    
    // Helper method to create linked list from array
    static ListNode createLinkedList(int[] nums) {
        if (nums.length == 0) return null;
        
        ListNode head = new ListNode(nums[0]);
        ListNode current = head;
        
        for (int i = 1; i < nums.length; i++) {
            current.next = new ListNode(nums[i]);
            current = current.next;
        }
        
        return head;
    }
    
    // Helper method to convert linked list to string
    static String linkedListToString(ListNode head) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        
        ListNode current = head;
        while (current != null) {
            sb.append(current.val);
            if (current.next != null) {
                sb.append(",");
            }
            current = current.next;
        }
        
        sb.append("]");
        return sb.toString();
    }
    
    // Helper method to check if linked list equals expected array
    static boolean linkedListEquals(ListNode head, int[] expected) {
        ListNode current = head;
        int i = 0;
        
        while (current != null && i < expected.length) {
            if (current.val != expected[i]) {
                return false;
            }
            current = current.next;
            i++;
        }
        
        return current == null && i == expected.length;
    }

    static class Solution {
        public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
            // Create a dummy head to simplify the logic
            ListNode dummy = new ListNode(0);
            ListNode current = dummy;
            int carry = 0;
            
            // Process both lists while at least one has remaining nodes or there's a carry
            while (l1 != null || l2 != null || carry != 0) {
                // Get values from current nodes (0 if node is null)
                int val1 = (l1 != null) ? l1.val : 0;
                int val2 = (l2 != null) ? l2.val : 0;
                
                // Calculate sum and new carry
                int sum = val1 + val2 + carry;
                carry = sum / 10;
                int digit = sum % 10;
                
                // Create new node with the digit
                current.next = new ListNode(digit);
                current = current.next;
                
                // Move to next nodes if they exist
                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;
            }
            
            // Return the result (skip dummy head)
            return dummy.next;
        }
    }
}


