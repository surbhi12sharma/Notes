function pattern(n) {
    let ans = "", start=1;
    for (let i = 0; i < n; i++) {
        if(i%2===0){
            start = 1
        }
        else{
            start = 0
        }
        for (let j = 0; j <i; j++) {
            ans += start +" "
            start = 1-start
        }
        // console.log("\n")
        ans += "\n"
    }
    console.log(ans)
}

pattern(5)