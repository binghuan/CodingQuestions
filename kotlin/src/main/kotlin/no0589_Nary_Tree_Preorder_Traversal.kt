class Node(var `val`: Int) {
    var children: List<Node?> = listOf()
}

fun main() {

    /**
     * Definition for a Node.
     * class Node(var `val`: Int) {
     *     var children: List<Node?> = listOf()
     * }
     */
    class Solution {
        fun preorder(root: Node?): List<Int> {
            val result = arrayListOf<Int>();

            // Use depth-first search to traverse the binary tree
            // and record every node encountered.
            fun traversal(node: Node?) {

                if (node == null) {
                    return;
                }

                // Here is the point.
                result += node.`val`

                node.children.forEachIndexed { _, child ->
                    traversal(child);
                }
            }
            traversal(root);
            return result;
        }
    }
}
