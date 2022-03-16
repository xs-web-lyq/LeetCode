



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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    // 如果是空树则返回空数组
    if(!root) return [];
    // 设置队列，协助层序遍历---通过向队列中推入数组起到同时记录节点和节点所在层级的作用
    const q = [root];
    // 设置结果数组
    const res = [];
    // 不断向队列中推入弹出元素
    while(q.length){
        // 使用len记录每层的元素个数
        let len = q.length;
        // 首先向结果数组中推入一个空数组
        res.push([]);
        // while循环将每一层的节点弹出队列，并将全部下一层节点推入队列
        while(len--){
            const n = q.shift();
            // 将此层的数据推入结果数组新推入的数组中
            res[res.length -1].push(n.val);
            // 将n节点左右子节点的节点和层级以数组的形式推入队列
            if(n.left){q.push(n.left)}
            if(n.right){q.push(n.right)}
        }

    }
    return res
};

// 解题思路
// 首先二叉树的层序遍历--->就是二叉树的广度优先遍历，首先将元素通过广度优先遍历输出显示。无问题后
// 其次想如何记录每个元素的层级，想到111题-二叉树的最小深度，通过数组同时记录节点和节点的层级。。记录完层级后
// 最后想如何将相同层级的节点值放到同一数组中---因为记录的层级数和数组下标一致，所以我们可以通过层级判断此层级的在结果数组此下标中是否已经存在数据，如果不存在就向结果数组中push一个数组，，，如果存在就将节点值推入对应下标的数组中。然后返回结果数组

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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    // 如果是空树则返回空数组
    if(!root) return [];
    // 设置队列，协助层序遍历---通过向队列中推入数组起到同时记录节点和节点所在层级的作用
    const q = [[root,0]];
    // 设置结果数组
    const res = [];
    // 不断向队列中推入弹出元素
    while(q.length){
        // 弹出队头元素，将节点和层级分别赋值给n,和 level
        const [n,level] = q.shift();
        // 将弹出的队头元素推入结果数组，根据level，如果结果数组下标为level尚未有数据就推入一个数组，，如果存在数据就向存在的数组内推入单个元素
        if(!res[level]){
            res.push([n.val])
        }else{
            res[level].push(n.val)
        }
        // 将n节点左右子节点的节点和层级以数组的形式推入队列
        if(n.left){q.push([n.left,level+1])}
        if(n.right){q.push([n.right,level+1])}
    }
    return res
};