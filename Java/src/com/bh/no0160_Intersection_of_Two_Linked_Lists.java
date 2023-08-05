package com.bh;

import com.bh.no0206_Reverse_Linked_List.ListNode;

import java.util.HashSet;

public class no0160_Intersection_of_Two_Linked_Lists {

    /**
     * Definition for singly-linked list.
     * public class ListNode {
     * int val;
     * ListNode next;
     * ListNode(int x) {
     * val = x;
     * next = null;
     * }
     * }
     */
    static
    public class Solution {
        public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
            HashSet<ListNode> nodes = new HashSet<>();
            while (headA != null) {
                nodes.add(headA);
                headA = headA.next;
            }

            while (headB != null) {
                if (nodes.contains(headB)) {
                    return headB;
                }

                headB = headB.next;
            }

            return null;

        }
    }


}
