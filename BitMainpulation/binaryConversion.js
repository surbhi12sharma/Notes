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
    findDecimal(ans)
}
//Binary to decimal
function findDecimal(num) {
    let ans = 0, res = 0
    let arr = num.split("").reverse()
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i] * (2 ** i)
    }
    console.log(ans)
}


//Once complemet
function onceComplement(num) {
    let binaryNum = findBinary(num).split("").reverse()
    console.log(binaryNum, typeof (binaryNum))
    let carry = 1
    for (let i = 0; i < binaryNum.length; i++) {
        if (carry === 1 && binaryNum[i] === 1) {
            binaryNum[i] = 0
            carry = 1
        }
        else if (carry === 1 && binaryNum[i] === 0) {
            binaryNum[i] = 1
            carry = 0
        }
    }
    console.log(binaryNum+1)
}

onceComplement(13)
