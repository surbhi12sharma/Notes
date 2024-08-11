function subsequence(arr, idx, dp){
    if(idx>=arr.length){
        console.log(dp)
        return 0
    }

    dp.push(arr[idx])
    subsequence(arr, idx+1, dp)
    dp.pop()
    subsequence(arr, idx+1, dp)
    
}

function main(){
    let arr = [1,2,3]
    let idx = 0, dp=[]
    subsequence(arr, idx, dp)
}

main()