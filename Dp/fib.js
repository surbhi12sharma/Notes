// // recussion

// function fibR(n) {
//     if (n <= 1) {
//         return n
//     }

//     return fibR(n - 1) + fibR(n - 2)
// }

// console.log(fibR(7))


// // Memorization
// function fibM(n, dp) {
//     // console.log(n, dp)
//     if (n <= 1) {
//         return n
//     }
//     if (dp[n] !== -1) {
//         return dp[n]
//     }
//     return dp[n] = fibM(n - 1, dp) + fibM(n - 2, dp)
// }

// let dp = new Array(7 + 1).fill(-1)
// console.log("dp-->", fibM(7, dp))

// // Top down
// function fibTD(n) {
//     let n1 = 0, n2 = 1
//     for (let i = 2; i <= n; i++) {
//         n3 = n2+n1
//         n1 = n2
//         n2 = n3
//     }
//     return n2
// }

// console.log("Top Down-->",fibTD(7))

// //Bottom Up
// // function fibBU(n){
    
// // }

function solution(S) {
    let n = S.length;
    let ans = S[0];
    
    for (let i = 1; i < n; i++) {
        let lastDigit = parseInt(ans[ans.length - 1]);
        let currentDigit = parseInt(S[i]);
        
        if (lastDigit + currentDigit <= 9) {
            let sum = lastDigit + currentDigit;
            ans = ans.slice(0, -1) + sum.toString();
        } else {
            ans += S[i];
        }
    }
    
    return ans;
}

// Example usage:
console.log(solution("32581"));  // Output: "559"
console.log(solution("1119812"));  // Output: "3992"
console.log(solution("226228"));  // Output: "4828"
