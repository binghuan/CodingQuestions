// Coding quest from Appier 20251027
// Binary tree node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Build the sample tree:
//        A
//       / \
//      B   C
//     / \  /
//    D  E F
const A = new TreeNode('A');
const B = new TreeNode('B');
const C = new TreeNode('C');
const D = new TreeNode('D');
const E = new TreeNode('E');
const F = new TreeNode('F');

A.left = B; A.right = C;
B.left = D; B.right = E;
C.left = F;

// Returns all leaf-to-root paths (bottom-up)
function allPathsBottomUp(root) {
  if (!root) return [];

  // Leaf: single path containing just the leaf
  if (!root.left && !root.right) return [[root.val]];

  const paths = [];

  // Gather left subtree paths, then right subtree paths (keeps left-to-right order)
  for (const child of [root.left, root.right]) {
    if (!child) continue;
    for (const path of allPathsBottomUp(child)) {
      // Since we're bottom-up, append the current node at the end
      paths.push([...path, root.val]);
    }
  }

  return paths;
}

const result = allPathsBottomUp(A);

// Print as requested: [D, B, A], etc.
for (const p of result) {
  console.log(`[${p.join(', ')}]`);
}

// Solution 2: 
let allPaths = [];
let currentPath = [];
function traverseAndCollectPaths(node) {
  if (!node) return;

  // Pre-order: add current node to the path
  currentPath.push(node.val);

  // If leaf node, add the path to allPaths
  if (!node.left && !node.right) {
    allPaths.push([...currentPath]);
  } else {
    // Continue traversing
    traverseAndCollectPaths(node.left, currentPath);
    traverseAndCollectPaths(node.right, currentPath);
  }

  // Backtrack: remove the current node from the path
  currentPath.pop();
  return allPaths;
}

traverseAndCollectPaths(A);
console.log(allPaths);
