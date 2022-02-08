/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if(!root) return false
    // 设置 res 记录结果
    let res = false
    // dfs深度优先遍历函数，，进行递归调用---因为要计算路径总和因此必须将每个节点及其以上的节点和传入函数。
    const dfs = (n,s)=>{
        // 当递归到叶子节点时，判断是否与目标总和相同
        if(!n.left && !n.right && targetSum === s){
                res =  true ;
        }
        // 当左右子节点存在时--递归调用，并将当前路径和传递到函数中
        if(n.left) dfs(n.left,s+n.left.val)
        if(n.right) dfs(n.right,s+n.right.val)
    }

    dfs(root,root.val)
    return res
};