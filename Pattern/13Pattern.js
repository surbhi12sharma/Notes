function pattern(n) {
    let ans = "", start = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            ans += start + " "
            start++
        }
        for(let j=i+1; j<=n; j++){
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