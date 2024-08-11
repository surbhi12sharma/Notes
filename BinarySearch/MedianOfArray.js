function median() {
    let A = [1, 4, 5]
    let B = [2, 3, 6]
    let C = []
    for (let i = 0; i < A.length; i++) {
        C.push(A[i])
    }
    for (let j = 0; j < B.length; j++) {
        C.push(B[j])
    }
    C.sort((a, b) => a - b)
    let n = C.length
    const mid = Math.floor(n / 2)
    console.log(C[mid])
}

median()