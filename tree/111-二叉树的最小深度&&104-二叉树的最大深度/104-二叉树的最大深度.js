// 看到题目便要想到，深度优先遍历，dfs算法
// 但是dfs算法按照深度进行搜索，但如何记录每一个节点的深度呢。
// 通过设置 res变量记录每一节点层级，通过给dfs函数多传递一个参数此参数再每次深度递归调用是都会加一。
// 同时使用Math.max方法更新res最大层级。

// 这里dfs算法使用递归调用。

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
 * @return {number}
 */
 var maxDepth = function(root) {
    // 记录层级数
    let res = 0;
    // 编辑深度优先遍历函数dfs,第一个参数为节点，第二个参数为此节点所在的层级
    const dfs = (root,l)=>{
        if(!root) {return;}
        // 使用判断减少计算次数，只在叶子节点时进行计算出res最大值
        if(!root.left && !root.right) res = Math.max(res,l);
        // 递归遍历root左右子树，并将层级l加一
        dfs(root.left,l+1);
        dfs(root.right,l+1);
    }
    // 调用dfs函数并传递第一次级位1
    dfs(root,1);
    // return res;
}
