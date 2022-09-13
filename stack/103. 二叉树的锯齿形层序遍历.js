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
 var zigzagLevelOrder = function(root) {
    let ans = [];
    levelorder(root , 0 , ans);

    for(let i = 1 ; i < ans.length ; i = i + 2){
        reverse(ans[i]);
    }
    return ans;
};
function reverse(ans){
    for(let i = 0 , j = ans.length - 1 ; i < j ; i++ ,j--){
        [ans[i],ans[j]] = [ans[j],ans[i]]
    }
}
function levelorder(root, k ,ans){
    if(root == null) return;
    if(k == ans.length) ans.push([]);
    ans[k].push(root.val);
    levelorder(root.left,k + 1,ans)
    levelorder(root.right,k + 1,ans)
}