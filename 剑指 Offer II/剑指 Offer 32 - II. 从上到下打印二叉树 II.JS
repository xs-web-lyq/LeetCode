/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    //  如果root位空树，返回一个空数组
    if(!root) {return []}
    // 创建一个队列，并将根节点放入
    let q = [root];
    // 创建一个结果数组
    let res = [];
    // 当队列为空时，结束循环
    while(q.length){
        // 向结果数组推入一个空数组用于存放每一次的数据
        res.push([]);
        // 记录此时所在层的个数，即此时队列中的数据个数
        let len = q.length;
        // 循环将所在层的数据，全部遍历一遍，并将下一层的数据全部推入队列
        while(len--){
            let n = q.shift();
            res[res.length-1].push(n.val);
            if(n.left){q.push(n.left)}
            if(n.right){q.push(n.right)}
        }

    }
    return res;
};