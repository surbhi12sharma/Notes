function pattern(n){
    let ans = ""
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i; j++){
            ans +=j+1+" "
        }
        // console.log("\n")
        ans += "\n"
    }

    console.log(ans)
}

pattern(5)