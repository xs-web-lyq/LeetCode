/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
    // 解题思路： 递归交换左右子树

    // 如果为空树或者为唯一节点数--直接返回
    if(root == null || (root.left == null && root.right == null)) return root;

    // 交换左右子树 es6 语法
    [root.left,root.right] = [root.right,root.left];
    // 递归调用交换左右子树的左右子树
    mirrorTree(root.left);
    mirrorTree(root.right);
    // 返回根节点。
    return root;
};