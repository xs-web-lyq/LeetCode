/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    // 记录nums数组长度
    let n = nums.length;
    // 如果长度为零，返回null
    if(!n) return null;

    // 取向下取整的下标为中间坐标
    let mid = Math.floor(n / 2);
    // 创建节点，并赋值
    let root = new TreeNode(nums[mid]);
    // 如果mid为零,也就是数组长度为一，直接返回root
    if(mid ===0) return root;

    // 数组长度不为一，递归调用使用slice数组方法截取数组。
    root.left = sortedArrayToBST(nums.slice(0,mid))
    root.right = sortedArrayToBST(nums.slice(mid+1,n))
    // 返回root节点。
    return root;
};
