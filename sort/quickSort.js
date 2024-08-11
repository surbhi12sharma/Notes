function quickSort(arr, low, high){
    
    if(low<high){
        let pivitIndex = findPivit(arr, low, high)
        quickSort(arr, low, pivitIndex-1)
        quickSort(arr, pivitIndex+1, high)
    }

}

function findPivit(arr, low, high){
    console.log("quick start")
    let pivot = arr[low]
    let i=low, j=high
    
    while(i<j){
        console.log(`i-->${i}, j--->${j}, ${arr[i]}, ${arr[j]}, ${pivot}`)
        while(arr[i]<=pivot && i<=high-1){
            i++
        }
        while(arr[j]>pivot && j>=low+1){
            j--
        }
        if(i<j){
            swap(arr, i, j)
        }
    }
    swap(arr, low, j)
    return j
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function quickSortStart() {
    console.log("start")
    let arr = [4, 6, 2, 5, 7, 9, 1, 3]
    let low = 0, high = arr.length-1
    quickSort(arr, low, high)
    console.log("ans-->", arr)
}

quickSortStart()