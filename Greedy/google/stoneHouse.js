//You are given 2 arrays representing integer locations of stores and houses (each location in this problem is one-dementional). For each house, find the store closest to it. Return an integer array result where result[i] should denote the location of the store closest to the i-th house. If many stores are equidistant from a particular house, choose the store with the smallest numerical location. Note that there may be multiple stores and houses at the same location.

// Input: houses = [5, 10, 17], stores = [1, 5, 20, 11, 16]
// Output: [5, 11, 16]


function findStoneAndHouse(houses, stores) {
    let n = houses.length, m = stores.length
    let ans = new Array(n).fill(Infinity)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (ans[i] >= houses[i]-stores[j]) {
                let location = stores[j]
                ans[i] = Math.min(ans[i], location)
            }
        }
    }
    console.log(ans)
}

findStoneAndHouse([5, 10, 17], [1, 5, 20, 11, 16])
// findStoneAndHouse([])