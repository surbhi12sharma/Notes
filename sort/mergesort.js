function mergeSort(arr, low, high) {

    if(low>=high) return 0
    const mid = Math.floor((low+high)/2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)
}

function merge(arr, low, mid, high){
    // console.log(merge)
    let left = low, right=mid+1, temp=[]
    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left])
            left++
        }
        else{
            temp.push(arr[right])
            right++
        }
    }

    while(left<=mid){
        temp.push(arr[left])
        left++
    }

    while(right<=high){
        temp.push(arr[right])
        right++
    }

    for(let i=low; i<=high; i++){
        arr[i] = temp[i-low]
    }
}

function mergeSortStart() {
    let arr = [3, 1, 2, 4, 1, 5, 6, 2, 4]
    let low = 0, high = arr.length-1
    mergeSort(arr, low, high)
    console.log(arr)
}

mergeSortStart()