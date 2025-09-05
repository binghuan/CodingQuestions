//
// Created by binghuan on 2025/9/5.
//

#include <iostream>
#include <vector>
#include <queue>
#include <memory>  // for smart pointers
using namespace std;

/**
 * Definition for a binary tree node using smart pointers
 */
struct TreeNode {
    int val;
    unique_ptr<TreeNode> left;
    unique_ptr<TreeNode> right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, unique_ptr<TreeNode> l, unique_ptr<TreeNode> r)
        : val(x), left(std::move(l)), right(std::move(r)) {}
};

class Solution {
public:
    // Recursive approach - DFS with smart pointers
    unique_ptr<TreeNode> invertTree(unique_ptr<TreeNode> root) {
        // Base case: if root is null, return null
        if (!root) {
            return nullptr;
        }

        // Swap left and right children using std::move semantics
        swap(root->left, root->right);

        // Recursively invert left and right subtrees
        root->left = invertTree(std::move(root->left));
        root->right = invertTree(std::move(root->right));

        return root;
    }

    // Iterative approach using queue - BFS with smart pointers
    unique_ptr<TreeNode> invertTreeBFS(unique_ptr<TreeNode> root) {
        if (!root) {
            return nullptr;
        }

        queue<TreeNode*> q;  // Use raw pointers in queue for simplicity
        q.push(root.get());

        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();

            // Swap left and right children
            swap(node->left, node->right);

            // Add children to queue for processing
            if (node->left) q.push(node->left.get());
            if (node->right) q.push(node->right.get());
        }

        return root;
    }
};

// Helper function to create binary tree from vector using smart pointers
unique_ptr<TreeNode> createBinaryTree(const vector<int>& vals) {
    if (vals.empty()) {
        return nullptr;
    }

    auto root = make_unique<TreeNode>(vals[0]);
    queue<TreeNode*> q;  // Use raw pointers for queue operations
    q.push(root.get());

    int i = 1;
    while (!q.empty() && i < vals.size()) {
        TreeNode* node = q.front();
        q.pop();

        // Add left child
        if (i < vals.size() && vals[i] != -1) {  // -1 represents null
            node->left = make_unique<TreeNode>(vals[i]);
            q.push(node->left.get());
        }
        i++;

        // Add right child
        if (i < vals.size() && vals[i] != -1) {  // -1 represents null
            node->right = make_unique<TreeNode>(vals[i]);
            q.push(node->right.get());
        }
        i++;
    }

    return root;
}

// Helper function to print binary tree in level order
void printBinaryTree(const unique_ptr<TreeNode>& root) {
    if (!root) {
        cout << "[]" << endl;
        return;
    }

    queue<TreeNode*> q;
    q.push(root.get());
    vector<int> result;

    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();

        if (node) {
            result.push_back(node->val);
            q.push(node->left.get());
            q.push(node->right.get());
        } else {
            result.push_back(-1);  // -1 represents null
        }
    }

    // Restd::move trailing nulls
    while (!result.empty() && result.back() == -1) {
        result.pop_back();
    }

    cout << "[";
    for (int i = 0; i < result.size(); i++) {
        if (result[i] == -1) {
            cout << "null";
        } else {
            cout << result[i];
        }
        if (i < result.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;

    // Test case 1: [4,2,7,1,3,6,9] - automatic memory management with unique_ptr
    cout << "Test Case 1 (Smart Pointer - Automatic Memory Management):" << endl;
    vector<int> vals1 = {4, 2, 7, 1, 3, 6, 9};
    auto root1 = createBinaryTree(vals1);
    cout << "Original: ";
    printBinaryTree(root1);

    auto inverted1 = sol.invertTree(std::move(root1));
    cout << "Inverted: ";
    printBinaryTree(inverted1);
    cout << "Memory automatically cleaned up when inverted1 goes out of scope" << endl << endl;

    // Test case 2: [2,1,3] - automatic memory management
    cout << "Test Case 2 (Smart Pointer - Automatic Memory Management):" << endl;
    vector<int> vals2 = {2, 1, 3};
    auto root2 = createBinaryTree(vals2);
    cout << "Original: ";
    printBinaryTree(root2);

    auto inverted2 = sol.invertTreeBFS(std::move(root2));
    cout << "Inverted (BFS): ";
    printBinaryTree(inverted2);
    cout << "Memory automatically cleaned up when inverted2 goes out of scope" << endl << endl;

    // Test case 3: [] - empty tree
    cout << "Test Case 3 (Empty Tree):" << endl;
    vector<int> vals3 = {};
    auto root3 = createBinaryTree(vals3);
    cout << "Original: ";
    printBinaryTree(root3);

    auto inverted3 = sol.invertTree(std::move(root3));
    cout << "Inverted: ";
    printBinaryTree(inverted3);
    cout << "Memory automatically cleaned up" << endl << endl;

    // Test case 4: Single node [1]
    cout << "Test Case 4 (Single Node):" << endl;
    vector<int> vals4 = {1};
    auto root4 = createBinaryTree(vals4);
    cout << "Original: ";
    printBinaryTree(root4);

    auto inverted4 = sol.invertTree(std::move(root4));
    cout << "Inverted: ";
    printBinaryTree(inverted4);
    cout << "Memory automatically cleaned up when inverted4 goes out of scope" << endl << endl;

    // Demonstration of automatic cleanup with scope
    cout << "Scope-based Automatic Cleanup Demo:" << endl;
    {
        auto scopedTree = createBinaryTree({10, 20, 30});
        cout << "Tree created inside scope: ";
        printBinaryTree(scopedTree);
        cout << "Tree will be automatically deleted when leaving this scope..." << endl;
    }
    cout << "Scope exited - memory automatically freed!" << endl;

    cout << "\n=== All memory automatically managed - No manual cleanup needed! ===" << endl;
    return 0;
}
