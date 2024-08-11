// Array Index & Element Equality

// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

function indexEqualsValueSearch(arr){
    const n = arr.length
    for(let i=0; i<n; i++){
        if(arr[i]===i){
            return i
        }
    }
    return -1
}


console.log(indexEqualsValueSearch([-8,0,2,5]))
console.log(indexEqualsValueSearch([-1,0,3,6]))