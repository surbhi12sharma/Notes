function pattern(n){
    let ans = ""
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            ans += "* "
        }
        // console.log("\n")
        ans += "\n"
    }

    console.log(ans)
}

pattern(5)