// //         3   Target =6
// //     2
// // 1


// function main() {
//     let sum = 0
//     findTaget(root, sum, target)
// }

// function findTaget(root, sum, target) {
//     if (root === null) {
//         return 0
//     }
//     if (sum === target && root.left === null && root.right === null) {
//         return true
//     }
//     if (findTaget(root.left, sum + root.val, target) === true) { return true }//3, 3+2, 3+2+1
//     if (findTaget(root.right, sum + root.val, target) === true) { return true }

//     return false
// }


var temp =  "Hi"
function display(){
    console.log(temp)
    var temp = "bye"
}
display()