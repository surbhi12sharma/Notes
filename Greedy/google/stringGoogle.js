// Given a string with any format containing only english letters, replace every percent-sign-sorrounded word (%EXAMPLE%) with the corresponding variable given inside a dictionary passed as an argument. Example:

function replaceString(str, dir) {
    // console.log(str, dir.EXAMPLE)
    const n = str.length
    let start = -1, end = -1, newStr = ""
    let ans = ""
    for (let i = 0; i < n; i++) {
        if (str[i] === "%") {
            i++
            while (str[i] !== "%") {
                newStr += str[i]
                i++
            }
            console.log(newStr)
            ans+=dir[newStr]
            newStr = ""
            continue
        }
        // newStr="", start = 0
        ans += str[i]
    }
    return ans
}

console.log(replaceString("home/usr/lib/%EXAMPLE%", { EXAMPLE: "testfile.tx" }))
console.log(replaceString("Hi %USER% how are you doing today %DATE%?", { USER: "John", DATE: "01/01/2024" }))

