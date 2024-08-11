function ThreeSum() {
    let arr = [0, -1, 2, -3, 1]
    arr.sort((a, b) => a - b)
    console.log(arr)
    let ans = []
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let left = i + 1, right = n - 1
        while (left < right) {
            console.log(i, left, right)
            if (arr[i] + arr[left] + arr[right] === 0) {
                ans.push([arr[i], arr[left], arr[right]])
                break
            }
            else if(arr[i]+arr[left]+arr[right]<0){
                left++
            }
            else{
                right--
            }

        } 
    }
    console.log(ans)
    return ans
}


ThreeSum()





//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */
 
class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
        let leaderArray = [arr[n-1]]
        // console.log(leaderArray)
        for(var i= n-2;i>=0;i--){
            let packElement = leaderArray[0]
            if(packElement<=arr[i]){
                leaderArray.unshift(arr[i])
            }
        }
        // console.log(leaderArray)
        return leaderArray
    }
}

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */
 
class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
        let leaderArray = [arr[n-1]]
        // console.log(leaderArray)
        for(var i= n-2;i>=0;i--){
            let packElement = leaderArray[0]
            if(packElement<=arr[i]){
                leaderArray.unshift(arr[i])
            }
        }
        // console.log(leaderArray)
        return leaderArray
    }
}