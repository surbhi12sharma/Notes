function pattern(n){
    let ans = ""
    for(let i=0; i<n; i++){
        for(let j=0; j<i; j++){
            ans += " "
        }
        for(let j=0; j<2*n-(2*i+1); j++){
            ans += "*"
        }
        for(let j=0; j<i; j++){
            ans += " "
        }
        // console.log("\n")
        ans += "\n"
    }

    console.log(ans)
}

pattern(5)