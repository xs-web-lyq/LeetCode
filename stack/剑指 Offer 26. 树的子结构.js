/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    // 先找到一个节点和B节点根节点相同的节点----再调用整树比对  is_Match 比对整棵树
    
    // 判断当前子树是否为空
    if(B == null) return false;
    if(A == null) return false;
    // 当当前根节点值相等，并且 整颗子树也相等 -- 直接返回true;

    if(A.val == B.val && is_Match(A,B)) return true; 
    
    // 当当前A树节点不等于 B树根节点时 -- 递归调用比对左子树 ， 右子树
    return isSubStructure(A.left,B) || isSubStructure(A.right,B);
};

// 比对整个子树
function is_Match(A , B){
    // 当B树遍历到空节点时返回 ture;
    if(B == null) return true;
    // 当A节点为null --- 说明找不到完整的A的子树和B相等
    if(A == null) return false;
    // 不相等直接返回false;
    if(A.val !== B.val) return false;
    // 递归遍历比对A和B树
    return is_Match(A.left,B.left) && is_Match(A.right,B.right)
}