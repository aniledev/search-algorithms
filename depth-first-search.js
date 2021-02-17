/*
In a DFS you start from a given node (usually the root) and traverse as far as you can down. 
When you reach a node, which has no children to visit or all nodes on its path have been visited, 
you start backtracking. Let's take a look at how this works. T
 */

class BinarySearchTree {
  // use constructor method to set up a basic binary search tree that is empty/null
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }
}
