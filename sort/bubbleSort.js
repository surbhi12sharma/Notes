function bubblesort(){

    let arr = [4,1,3,9,7]
    for(let i=n-1; i>=1; i--){
        for(let j=0; j<=i; j++){
            if(arr[j]>arr[j+1]){
                //swap
                const t = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = t
            }
        }
    }
    console.log(arr)
}

bubblesort()