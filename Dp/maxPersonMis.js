let entry = [1, 2, 5, 9, 5, 5]
let exit = [4, 5, 3, 12, 9, 12]
let arr =[]
for(let i=0; i<5; i++){
    arr.push([entry[i],1])
    arr.push([exit[i], -1])
}

arr.sort((a,b)=>{
    if(a[0]===b[0]){
        return a[1]-b[1]
    }
    else{
        return a[0]-b[0]
    }
})

console.log(arr)