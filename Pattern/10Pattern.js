function pattern(n) {
    let ans = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            ans += "* "
        }
        // console.log("\n")
        ans += "\n"
    }
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            ans += "* "
        }
        // console.log("\n")
        ans += "\n"
    }

    console.log(ans)
}

pattern(5)