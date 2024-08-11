function main() {
    const graph = [[1, 1, 0, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 1, 1], [1, 1, 0, 1, 0]]
    const n = graph.length, m = graph[0].length
    let visited = new Array(n).fill(0).map(() => new Array(m).fill(0))
    let set = new Set()
    let matrix = [[0, 1], [0, -1], [1, 0], [-1, 1]]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] === 1 && visited[i][j] === 0) {
                const arr = []
                dfs(i, j, arr, graph, visited, matrix, n, m, i, j)
                set.add(arr)
            }
        }
    }
    console.log(set)
}

function dfs(row, col, arr, graph, visited, matrix, n, m, row0, col0) {

    visited[row][col] = 1
    arr.push([row - row0, col - col0])
    for (let i = 0; i < matrix.length; i++) {
        let [mRow, mCol] = matrix[i]
        let nRow = row + mRow
        let nCol = col + mCol
        if (nRow >= 0 && nCol >= 0 && mRow < n && nCol < m && graph[nRow][nCol] === 1 && visited[nRow][nCol] === 0) {
            dfs(nRow, nCol, arr, graph, visited, matrix, n, m, row0, col0)
        }
    }

}

main()


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const set = new Set(wordList)
    let alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // bfs(beginWord, endWord, set, alp)
    return 5
};

function bfs(beginWord, endWord, set, alp) {
    let queue = beginWord
    while (queue.length !== 0) {
        let currWord = queue.shift()
        for (let i = 0; i < currWord.length; i++) {
            let orignalWorld = currWord
            for (let j = 0; j < alp.length; j++) {
                let changeWord = currWord.subString(0, i) + apl[i] + currWord.substring(i + 1, currWord.length)
                console.log(changeWord)
            }
        }
    }
}