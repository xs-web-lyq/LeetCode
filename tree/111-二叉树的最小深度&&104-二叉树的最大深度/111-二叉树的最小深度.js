// ### 解题思路
// 方法一：可以使用深度优先遍历解决

// 方法二：使用广度优先遍历解决
// 借助队列
// 遍历二叉树，弹出队头节点--将对头节点的左右子节点推入队列---直到遍历到第一个叶子节点，直接返回其深度值，结束遍历。

// 想到使用广度优先遍历-->如何记录遍历节点的层级--想到推入队列元素为数组[root,l（层级）]

// ### 代码

// ```javascript
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
var minDepth = function(root) {
    // <!-- 深度优先遍历解决 -->
    // let res = 10000;
    // const dfs = (root,l)=>{
    //     if(!root){ return ;}
    //     if(!root.left && !root.right) res = Math.min(res,l)
    //     dfs(root.left,l+1);
    //     dfs(root.right,l+1)
    // }
    // if(!root){res = 0}
    // else{ dfs(root,1);}
    // return res;

    // <!-- 广度优先遍历解决 -->
    if(!root) {return 0;}
    const q = [[root,1]];
    while(q.length){
        const [n,l] = q.shift();
        if(!n.left && !n.right){
            return l;
        }
        if(n.left) q.push([n.left,l + 1]);
        if(n.right) q.push([n.right,l + 1])
    }
};
