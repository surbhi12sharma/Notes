//AND --> All true (true), one false ->false
function AndOp() {
    let a = 13, b = 7
    let res = 13 & 7
    console.log(res)
    let c = findBinary(13), d = findBinary(7)
    // let res2 = c&d
    // console.log(res2)
    let res2 = []
    for(let i=0; i<c.length; i++){
        res2.push()
    }
}

AndOp()

//Binary Number Conversion (1's & 2's complement)


//Decimal to Binary
//Tc/sc ->log2(n) 
function findBinary(num) {
    let ans = ""
    while (num >= 1) {
        if (num % 2 === 1) {
            ans += "1"
        }
        else {
            ans += "0"
        }
        num = Math.floor(num / 2)
        // console.log(num)
    }
    ans = ans.split("").reverse().join("")
    // console.log(ans)
    return ans
}