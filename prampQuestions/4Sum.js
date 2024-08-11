/*function sum(arr, s){
    let ans = []
    let n = arr.length
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                for(let l= k+1; l<n; l++){
                    if(arr[i]+arr[j]+arr[k]+arr[l]===s){
                        ans.push([arr[i], arr[j], arr[k], arr[l]])
                    }
                }
            }
        }
    }
    return ans

}*/

function sum(arr, s){
    arr.sort((a,b)=>a-b)
    console.log(arr)
    let n = arr.length
    let ans = []
    for(let i=0; i<n; i++){
        if(i===0 || arr[i-1]!==arr[i]){
            for(let j=i+1; j<n; j++){
                let left = j+1, right = n-1
                while(left<right){
                    let sum = arr[i] + arr[j] + arr[left] + arr[right]
                    if(sum === s){
                        ans.push([arr[i], arr[j], arr[left], arr[right]])
                    }
                    if(sum<s){
                        // while(arr[left-1]===arr[left]){
                            left++
                        // }
                    }
                    else{
                        // while(arr[right-1]===arr[right]){
                            right--
                        // }
                    }
                }
            }
        }
    }
    return ans
}



console.log(sum([2, 7, 4, 0, 9, 5, 1, 3], 20))