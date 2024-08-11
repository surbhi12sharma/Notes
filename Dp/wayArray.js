function main() {
    const A =[5, 1, 3, 2, 4]
    const n = A.length
    let ans = new Array(n).fill(-1)
    // let min = Math.min([...A])
    // let max = Math.max([...A])
    for (let i = 1; i < n; i=i+2) {
        console.log(A[i-1],A[i])
        if (A[i - 1] < A[i]) {
            ans[i - 1] = A[i]
            ans[i] = A[i - 1]
        }
        else {
            ans[i - 1] = A[i - 1]
            ans[i] = A[i]
        }
        if(n%2!==0){
            ans[n-1] = A[n-1]
        }
        console.log(ans)
    }
    console.log(ans)
    return ans
}

main()



A.sort()

for i in range(1,len(A),2):

    A[i],A[i-1]=A[i-1],A[i]

return