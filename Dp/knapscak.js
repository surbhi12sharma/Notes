function knapSackFind(W, wt, val, idx) {
    // code here
    if (idx === 0) {
        if (wt < 0) {
            return val[0]
        }
        else {
            return 0
        }
    }
    let notTake = 0 + knapSackFind(W, wt, val, idx - 1)
    let take = Number.MIN_VALUE
    if (wt[idx] <= W) {
        take = val[idx] + knapSackFind(W - wt[idx], wt, val, idx - 1)

    }
    return Math.max(take, notTake)
}

function main() {
    let N = 3
    let W = 3 // 4
    let value = [1, 2, 3]
    let weight = [4, 5, 6] // 4, 5, 1
    console.log(knapSackFind(W, weight, value, N))
}

main()


//Tc-->O(2^n), sc->O(n)