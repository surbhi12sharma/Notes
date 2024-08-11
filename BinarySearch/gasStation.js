

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution {

    findFloor(arr, n, x) {
        //your code here
        const len = arr.length
        let low = 0, high = len - 1
        let ans = n
        if (x < arr[0]) {
            return -1
        }
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (arr[mid] <= x) {
                ans = mid
                low = mid + 1
            }
            else {
                high = mid - 1
            }
        }
        return ans
    }

    // class Solution{
    //   public:
    // Function to find floor of x
    // n: size of vector
    // x: element whose floor is to find
    // int findFloor(vector<long long> arr, long long n, long long x){
    // Your code here
    // long long lo = 0;
    // long long hi = n-1;
    // long long ans = n;
    // if(x < arr[0]) return -1;
    // while(lo <= hi) {
    // int mid = lo+(hi-lo)/2;
    // if(arr[mid] <= x) {
    // ans = mid;
    // lo = mid + 1;
    // }
    // 		else hi = mid-1;
    // }	
    // 	return ans;
    // }
    // };

}