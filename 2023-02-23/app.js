//max depth of binary tree

//recursive solution
const maxDepth = (root) => {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
