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
 var levelOrderBottom = function(root) {
    let ans = [];
    getResult(root, 0 ,ans);
    for(let i = 0 , j = ans.length - 1; i < j ; i++ ,j--){
        [ans[i],ans[j]] = [ans[j],ans[i]];
    }
    return ans
};

function getResult(root , k , ans){
    if(root == null) return ;
    if(k == ans.length) ans.push([]);
    ans[k].push(root.val);
    getResult(root.left, k + 1, ans)
    getResult(root.right, k + 1, ans)
    return ;
}