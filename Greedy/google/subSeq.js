// write a program to check whether string A contains string B as a subsequence or not. you can change at most 1 character in string B except the first character return the starting index of subsequence if found else return -1

function findSubSeq(word1, word2) {
    let j = 0, n = word1.length, m = word2.length, ans =  -1, start = word2[0]
    for (let i = 0; i<n; i++) {
        if(word1[i]==start){
            // ans += word1[i]
            // ans =  i
            // break
            i++
            j++
            if(word1[i]===word2[j]){
                ans = i
                break
            }
        }
        // else if(ans.length!==0 ){
            // ans += word2[j]
        // }
    }
    return ans
    
}
console.log(findSubSeq("abcbc", "cbed"))
console.log(findSubSeq("lhs", "rhs"))
console.log(findSubSeq("surbhi", "rbhi"))
