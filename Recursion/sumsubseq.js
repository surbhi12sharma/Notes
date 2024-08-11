function findSum(arr, sum, idx, dp, sum1){

    if(idx>=arr.length){
        // let s = 0
        // for(let i=0; i<dp.length; i++){
        //     s += dp[i]
        // }
        // if(s === sum){
        //     console.log(dp)
        // }
        if(sum1===sum){
            console.log("found", dp)
            return true
        }
        else{
            return false
        }
        return 0
    }

    dp.push(arr[idx])
    sum1 += arr[idx]
    if(findSum(arr, sum, idx+1, dp, sum1)===true) {return true}
    dp.pop()
    sum1 -= arr[idx]
    if(findSum(arr, sum, idx+1, dp, sum1)=== true) {return true}
    return false
}


function main(){
    let arr = [1,2,1], sum=2
    let idx=0, sum1=0, dp=[]
    findSum(arr, sum, idx, dp, sum1)
}

main()