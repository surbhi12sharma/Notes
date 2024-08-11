function pattern(n){
    let ans = "",  arr = ["A","B","C","D","E","F","G","H","I","J","K"]
    for(let i=0; i<n; i++){
        for(let j=i; j<=n; j++){
            ans += "*"
        }
        //space
        for(let j=0; j<i; j++){
            ans += " "
        }
        for(let j=n-i; j>0; j--){
            ans += "*"
        }
        ans += "\n"
    }

    console.log(ans)
}

pattern(5)