/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    return getHeight(root) >= 0
};

function getHeight(root){
    if(root == null) return 0;
    // 使用 l 接收当前节点左子树的高度 ，r 接收当当前节点右子树的高度；
    let l = getHeight(root.left);
    let r = getHeight(root.right);
    // 当 l 或 r 小于 0 ---说明 当前节点的子节点已经失去平衡直接返回 -2
    if(l < 0 || r < 0) return -2;
    // 当节点都平衡时， 到达一个节点 l 和 r 的高度差大于 1 时  --直接返回 -2；
    if(Math.abs(l - r) > 1) return -2;

    // 计算左右子树高度取最大高度 再加一得到当前节点高度
    return Math.max(l,r) + 1;
}