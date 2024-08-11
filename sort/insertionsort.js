//Take an element and place it correct position
function insertionsort(){
    const arr = [14, 9, 15, 12, 6, 8, 13]
    for(let i=0; i<arr.length; i++){
        let j = i
        while(j>0 && arr[j-1]>arr[j]){
            swap(arr, j-1, j)
            j--
        }
    }
    console.log(arr)
}

function swap(arr, start, end){
    let t = arr[start]
    arr[start] = arr[end]
    arr[end] = t
}

insertionsort()
