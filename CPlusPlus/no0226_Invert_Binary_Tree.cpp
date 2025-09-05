//
// Created by binghuan on 2025/9/5.
//

#include <iostream>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

/**
 * Definition for a binary tree node.
 */
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    // Recursive approach - DFS
    TreeNode* invertTree(TreeNode* root) {
        // Base case: if root is null, return null
        if (!root) return nullptr;

        // Swap left and right children
        TreeNode* temp = root->left;
        root->left = root->right;
        root->right = temp;

        // Recursively invert left and right subtrees
        invertTree(root->left);
        invertTree(root->right);

        return root;
    }

    // Iterative approach using stack - DFS
    TreeNode* invertTreeIterative(TreeNode* root) {
        if (!root) return nullptr;

        stack<TreeNode*> stk;
        stk.push(root);

        while (!stk.empty()) {
            TreeNode* node = stk.top();
            stk.pop();

            // Swap left and right children
            TreeNode* temp = node->left;
            node->left = node->right;
            node->right = temp;

            // Add children to stack for processing
            if (node->left) stk.push(node->left);
            if (node->right) stk.push(node->right);
        }

        return root;
    }

    // Iterative approach using queue - BFS
    TreeNode* invertTreeBFS(TreeNode* root) {
        if (!root) return nullptr;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();

            // Swap left and right children
            TreeNode* temp = node->left;
            node->left = node->right;
            node->right = temp;

            // Add children to queue for processing
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }

        return root;
    }
};

// Helper function to create binary tree from vector (level order)
TreeNode* createBinaryTree(const vector<int>& vals) {
    if (vals.empty()) return nullptr;

    TreeNode* root = new TreeNode(vals[0]);
    queue<TreeNode*> q;
    q.push(root);

    int i = 1;
    while (!q.empty() && i < vals.size()) {
        TreeNode* node = q.front();
        q.pop();

        // Add left child
        if (i < vals.size() && vals[i] != -1) {  // -1 represents null
            node->left = new TreeNode(vals[i]);
            q.push(node->left);
        }
        i++;

        // Add right child
        if (i < vals.size() && vals[i] != -1) {  // -1 represents null
            node->right = new TreeNode(vals[i]);
            q.push(node->right);
        }
        i++;
    }

    return root;
}

// Helper function to print binary tree in level order
void printBinaryTree(TreeNode* root) {
    if (!root) {
        cout << "[]" << endl;
        return;
    }

    queue<TreeNode*> q;
    q.push(root);
    vector<int> result;

    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();

        if (node) {
            result.push_back(node->val);
            q.push(node->left);
            q.push(node->right);
        } else {
            result.push_back(-1);  // -1 represents null
        }
    }

    // Remove trailing nulls
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

    // Test case 1: [4,2,7,1,3,6,9]
    cout << "Test Case 1:" << endl;
    vector<int> vals1 = {4, 2, 7, 1, 3, 6, 9};
    TreeNode* root1 = createBinaryTree(vals1);
    cout << "Original: ";
    printBinaryTree(root1);

    TreeNode* inverted1 = sol.invertTree(root1);
    cout << "Inverted: ";
    printBinaryTree(inverted1);
    cout << endl;

    // Test case 2: [2,1,3]
    cout << "Test Case 2:" << endl;
    vector<int> vals2 = {2, 1, 3};
    TreeNode* root2 = createBinaryTree(vals2);
    cout << "Original: ";
    printBinaryTree(root2);

    TreeNode* inverted2 = sol.invertTreeIterative(root2);
    cout << "Inverted (Iterative): ";
    printBinaryTree(inverted2);
    cout << endl;

    // Test case 3: []
    cout << "Test Case 3:" << endl;
    vector<int> vals3 = {};
    TreeNode* root3 = createBinaryTree(vals3);
    cout << "Original: ";
    printBinaryTree(root3);

    TreeNode* inverted3 = sol.invertTreeBFS(root3);
    cout << "Inverted (BFS): ";
    printBinaryTree(inverted3);
    cout << endl;

    // Test case 4: Single node [1]
    cout << "Test Case 4:" << endl;
    vector<int> vals4 = {1};
    TreeNode* root4 = createBinaryTree(vals4);
    cout << "Original: ";
    printBinaryTree(root4);

    TreeNode* inverted4 = sol.invertTree(root4);
    cout << "Inverted: ";
    printBinaryTree(inverted4);

    return 0;
}
