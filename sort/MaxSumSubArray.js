//Max sum in sub-arrays

function findSubArray() {
    const arr = [4, 3, 1, 5, 6]
    // const arr = [5, 4, 3, 1, 6]
    let maxSum = 0, sum = 0, n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let res = findSum(arr.slice(i, j + 1))
            console.log(res)
            sum = res[0] + res[1]
            maxSum = Math.max(sum, maxSum)
        }
    }
    console.log(maxSum)
}

function findSum(arr) {
    let smallest = arr[0], secsmallest = -1
    for (let i = 1; i < arr.length; i++) {
        if (smallest >arr[i]) {
            secsmallest = smallest
            smallest = arr[i]
        }
        else if (smallest < arr[i] && arr[i] < secsmallest) {
            secsmallest = arr[i]
        }
    }
    return [smallest, secsmallest]
}

findSubArray()