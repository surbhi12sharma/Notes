function pattern(n){
    let ans = "",  arr = ["A","B","C","D","E","F","G","H","I","J","K"]
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            ans += " "
        }
        let breakPoint = Math.floor((2*i+1)/2)
        let ch = 1
        for(let j=1; j<=breakPoint; j++){
            ans += arr[j-1]
        }
        for(let j= breakPoint-1; j>0; j--){
            ans += arr[j-1]
        }
        for(let j=0; j<n-i-1; j++){
            ans += " "
        }
        // console.log("\n")
        ans += "\n"
    }

    console.log(ans)
}

pattern(5)