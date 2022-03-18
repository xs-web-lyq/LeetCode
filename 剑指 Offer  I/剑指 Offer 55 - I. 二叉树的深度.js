/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let res = 0;
    // 创建深度优先遍历函数，，并传递两个参数
    // 参数一：节点，参数二：节点所在层；
    dfs=(root, l)=>{
        if(!root){return 0;}
        // 判断是否为叶子节点，如果为叶子节点将所在层，与res进行比较取最大
        if(!root.left && !root.right){res = Math.max(res,l)}
        // 递归遍历，左子树，右子树，并将层数加一
        dfs(root.left,l + 1);
        dfs(root.right, l + 1);
    }
    dfs(root,1);
    return res;
};