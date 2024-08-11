let row = 4, col = 5
let val = 1
let ans = new Array(row).fill().map(()=>new Array(col).fill(-1))
for(let i=0; i<col; i++){
    for(let j=0; j<row; j++){
        console.log(i, j )
        ans[i][j] = val
        val = val+1
        // console.log("**",j, i)
    }
}

console.log(ans)