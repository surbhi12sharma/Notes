//Constant window

function sum (){
    const arr = [-1, 2, 3, 3, 4, 5, -1], k=4
    const n = arr.length
    let left = 0, right=k-1, sum=0, maxSum=-Infinity
    for(let i=left; i<=right; i++){
        sum += arr[i]
    }
    console.log(sum, left, right)
    while(right<n-1){
        sum = sum-arr[left]
        left++
        right++
        sum = sum+arr[right]
        maxSum = Math.max(sum, maxSum)
    }
    console.log(maxSum)
}
sum()