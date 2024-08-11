function main(arr, x){
    //your code here
    // arr.sort((a,b)=>a-b)
    const len = arr.length
    let low = 0, high = len-1
    let ansLow = len, ansHigh=len
    if(x<arr[0]){
        return [-1, arr[0]]
    }
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]<=x){
            ansLow = arr[mid]
            low = mid+1
        }
        else{
            ansHigh = arr[mid]
            high = mid-1
        }
    }
    return [ansLow, ansHigh]
}
console.log(main([5, 6, 8, 9, 6, 5, 5, 6], 10))