// Given a 2D array of characters, find the number of occurrences of a given search word. The word can be formed by moving up, down, left, right, and around 90-degree bends. You cannot reuse any cell while forming the word.


function findWord() {
    let N = 4, M = 5, target = "SNAKES", grid = [["S", "N", "B", "S", "N"], ["B", "A", "K", "E", "A"], ["B", "K", "B", "B", "K"], ["S", "E", "B", "S", "E"]]
    let ans = 0
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] === "S") {
                ans += bfs(i, j, N, M, target, grid)
                console.log("ans-->", ans)
            }
        }
    }
    return ans
}

function bfs(i, j, N, M, target, grid) {
    let str = ""
    let queue = [[i, j, "" + grid[i][j]], grid[i][j]]
    let count = 0
    let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let idx = 1
    while (queue.length !== 0) {
        let [row, col, word, nextalp] = queue.shift()
        console.log(word, nextalp)
        if (word === target) {
            count++
        }
        for (let [mRow, mCol] of dir) {
            const nRow = row + mRow
            const nCol = col + mCol
            if (isValid(nRow, nCol, idx, N, M, grid, target)) {
                queue.push([nRow, nCol, word + grid[nRow][nCol], grid[row][col]])
            }
        }

    }
    console.log(count)
    return count
}

function isValid(nRow, nCol, idx, N, M, grid, target) {
    return nRow >= 0 && nCol >= 0 && nRow < N && nCol < M 
}


findWord()