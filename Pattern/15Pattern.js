function pattern(n) {
    let ans = "", start = 1, arr = ["A","B","C","D","E","F"]
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n-i; j++) {
            ans += arr[j-1]
        }
        for(let j=i; j<=n; j++){
            ans += " "
        }
        // console.log("\n")
        ans += "\n"
        // console.log(ans)
    }
    console.log(ans)
}

pattern(5)
// 1 0 0 0 