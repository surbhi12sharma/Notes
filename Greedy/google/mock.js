
/*Given a time (in 24-hour format) with missing digits marked as '?', we want to replace all of the question marks with digits (0-9) in such a way as to obtain a valid time. The earliest possible time is 00:00 and the latest valid time is 23:59.
Write a function:
class Solution { public int solution(String T); }
that, given a string T in the format "HH:MM", returns an integer denoting the number of valid times that can be obtained by replacing the question marks.
Examples:
Given T = "2?:45", the function should return 4. We can obtain four valid times: "20:45", "21:45", "22:45" and "23:45".
Given T = "?9:32", the function should return 2. Valid times are: "09:32" and "19:32".
Given T = "0?:?0", the function should return 60.
Given T = "?4:0?", the function should return 20.
Given T = "29:01", the function should return 0.
Assume that: T consists of exactly five characters; the third one is ':'; the others are digits (0-9) or '?'.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.*/


function solution(T, idx) {
    let count = 0
    let n = T.length, arrIdx = []
    for (let i = 0; i < n; i++) {
        if (T[i] === "?") {
            arrIdx.push(i)
        }
    }
    count = checkTime(arrIdx, T, n)
    return count
}

function checkTime(arr, T, n) {
    // let minTime = T
    // 5 9
    let hrs1 = 2, hrs2= 3, min1 = 5, min2 = 9
    // for(let i=0; i<arr.l?ength; i++){
        for(let i=0; i<hrs1; i++){
            if(i==)
        }
    // }
    
}
solution("0?:?0", 0)
solution("2?:45")