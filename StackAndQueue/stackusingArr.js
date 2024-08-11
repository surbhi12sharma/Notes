const arr = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]
nextGreaterElement(arr)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums2) {
    let stack = []
    let n = nums2.length
    let ans = new Array(n).fill(-1)
    for (let i = n - 1; i >= 0; i--) {
        console.log(stack, nums2[i])
        if (stack.length === 0) {
            stack.push(nums2[i])
            ans[i] = -1
        }
        else if (stack[stack.length - 1] > nums2[i]) {
            stack.push(nums2[i])
            ans[i] = stack[stack.length - 1]
        }
        else if(stack[stack.length-1]<nums2[i]){
            console.log("stack-->",stack)
            while (stack[stack.length - 1] < nums2[i]) {
                stack.pop()
            }
            console.log("stack1-->",stack)
            if (stack.length === 0) {
                ans[i] = -1
                stack.push(nums2[i])
            }
            else {
                ans[i] = stack[stack.length - 1]
                stack.push(nums2[i])
            }
        }
    }
    console.log(ans)
};