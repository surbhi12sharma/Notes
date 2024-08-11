function bellmanFord() {
    // const edge = [[0, 1, 5], [1, 0, 3], [1, 2, -1], [2, 0, 1]]
    // const src = 2
    // const V = 3
    const V = 6
    const E = [[3, 2, 6], [5, 3, 1], [0, 1, 5], [1, 5, -3], [1, 2, -2], [3, 4, -2], [2, 4, 3]]
    const S = 0
    let dist = new Array(V).fill(Infinity)
    dist[S] = 0
    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, wt] of E) {
            if (dist[u] !== Infinity && dist[v] > dist[u] + wt) {
                dist[v] = dist[u] + wt
            }
        }
    }

    // To check cycle
    for (let [u, v, wt] of E) {
        if (dist[u] !== Infinity && dist[v] > dist[u] + wt) {
            dist[v] = -1
        }
    }

    console.log(dist)
}

//TC-> O()


bellmanFord()