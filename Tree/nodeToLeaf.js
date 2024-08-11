/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/// 65%
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let res = []
    findPath(root, res, [])
    console.log(res)
};

function findPath(root, res, path) {
    if (root === null) {
        return 0
    }
    path.push(root.val)

    if (root.left === null && root.right === null) {
        res.push([...path])
    }
    else {
        if (root.left !== null) findPath(root.left, res, path)
        if (root.right !== null) findPath(root.right, res, path)
    }
    path.pop()
}