
function isSumProperty(root) {
    //your code here
    if (root == null) return 0
    let child = 0
    if (root.left !== null) {
        child = root.left.data
    }
    if (root.right !== null) {
        child = root.right.data
    }
    if (child > root.data) root.data = child
    else {
        if (root.left !== null) {
            root.left.data = root.data
        }
        if (root.right !== null) {
            root.right.data = root.data
        }
    }

    isSumProperty(root.left)
    isSumProperty(root.right)

    let total = 0
    if (root.left !== null) {
        total += root.left.data
    }
    if (root.right !== null) {
        total += root.right.data
    }
    if (root.left || root.right) {
        root.data = total
    }
}