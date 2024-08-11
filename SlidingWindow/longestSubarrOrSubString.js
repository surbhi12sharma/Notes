function subarr() {
    const arr = [2, 5, 1, 7, 10], k = 14
    const n = arr.length
    let ans = 0, left = 0, right = 0, sum = 0
    while (right < n) {
        sum += arr[right]
        while(sum>k){
            sum -= arr[left]
            left++
        }
        if(sum<=k){
            ans = Math.max(sum, ans)
        }
        right++
    }
    console.log(ans)
}

subarr()