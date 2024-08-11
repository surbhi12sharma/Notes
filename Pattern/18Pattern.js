function pattern(n){
    let ans = "",  arr = ["A","B","C","D","E","F","G","H","I","J","K"]
    for(let i=0; i<=n; i++){
        for(let j=n-i; j<=n; j++){
            ans += arr[j] +" "
        }
        // console.log("\n")
        ans += "\n"
    }

    console.log(ans)
}

pattern(4)