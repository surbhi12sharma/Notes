function shortestPathBurger() {
    let arr = [["B", "O", "O", "B"], ["O", "S", "O", "O"], ["O", "O", "O", "E"], ["B", "O", "O", "O"]]
    let ans = 0
    const n = arr.length, m = arr[0].length
    let visited = new Array(n).fill().map(() => new Array(m).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] === "S" && visited[i][j] === 0){
                bfs(i, j, visited, arr, n, m)
            }
        }
    }
    return ans
}

f
shortestPathBurger()