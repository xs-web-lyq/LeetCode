/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

 function getResult(root , arr){
    if(root == null) return ;
    if(root.left !== null) getResult(root.left,arr)
    arr.push(root.val);
    if(root.right !== null) getResult(root.right,arr)
    return ;
 }
var getAllElements = function(root1, root2) {
    let arr1 = [] , arr2 = [];
    getResult(root1,arr1);
    getResult(root2,arr2);
    let p1 = 0, p2 = 0;
    let res = [] , i = 0;
    while(p1 < arr1.length || p2 < arr2.length){
        if(arr1[p1] <= arr2[p2]){
            res[i++] = arr1[p1++]
        }else{
            res[i++] = arr2[p2++];
        }
    }
    return res;
};