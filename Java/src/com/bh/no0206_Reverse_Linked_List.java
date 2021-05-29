package com.bh;

public class no0206_Reverse_Linked_List {

    /**
     * Definition for singly-linked list.
     * public class ListNode {
     * int val;
     * ListNode next;
     * ListNode() {}
     * ListNode(int val) { this.val = val; }
     * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public static void main(String[] args) {

        ListNode head = new ListNode();
        ListNode current = head;

        int[] intArray = new int[]{1, 2, 3, 4, 5};
        for (int i = 0; i < intArray.length; i++) {
            //intArray[i]
            current.val = intArray[i];

            if (i < intArray.length - 1) {
                current.next = new ListNode();
                current = current.next;
            }
        }

        System.out.println("[START]");

        no0206_Reverse_Linked_List s = new no0206_Reverse_Linked_List();
        s.reverseList(head);

        System.out.println("[END]");
    }
}
