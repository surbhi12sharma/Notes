function maxPoint(){
    const arr = [6, 2, 3, 4, 7, 2, 1, 7, 1], k = 4
    let left = 0, right = k-1
    while(left<=right){
        let sum = findSum(arr, left, right)
        console.log(sum)
        right--
    }
    // while()
}

function findSum(arr, left, right){
    let sum = 0
    for(let i=left; i<=right; i++){
        sum+=arr[i]
    }
    return sum
}
maxPoint()