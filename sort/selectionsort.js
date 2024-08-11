function selectionsort(){
    let input =  [4, 1, 3, 9, 7]
    let ans = 0
    for(let i=0; i<input.length; i++){
        let min = i
        for(let j=i+1; j<input.length; j++){
            if(input[min]>input[j]){
                min = j
            }
        }
        swap(input, min,i)
    }
    console.log(input)
}


function swap(arr, start, end){
    let t = arr[start]
    arr[start] = arr[end]
    arr[end] = t
}

selectionsort()