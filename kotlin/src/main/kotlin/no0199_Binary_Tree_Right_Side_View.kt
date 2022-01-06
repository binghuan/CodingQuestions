import TreeNode.TreeNode

fun main() {


    /**
     * Example:
     * var ti = TreeNode(5)
     * var v = ti.`val`
     * Definition for a binary tree node.
     * class TreeNode(var `val`: Int) {
     *     var left: TreeNode? = null
     *     var right: TreeNode? = null
     * }
     */
    class Solution {
        fun rightSideView(root: TreeNode?): List<Int> {

            val result = arrayListOf<Int>()
            var mySet = setOf<Int>()

            fun traverse(node: TreeNode, depth: Int) {

                if (node == null) {
                    return
                }

                if (!mySet.contains(depth)) {
                    mySet += depth
                    result += node.`val`
                }

                if (node.right != null) {
                    traverse(node.right!!, depth + 1)
                }

                if (node.left != null) {
                    traverse(node.left!!, depth + 1)
                }
            }
            root?.let { traverse(it, 0) }

            return result
        }
    }

    println(">> main")
}
