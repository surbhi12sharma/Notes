function primes(V, adj) {
    // const pq = new MinPriorityQueue({ priority: (val) => val.weight });
    // pq.enqueu({ weight: 0, node: 0 })
    const graph = {
        0: [[1, 5], [2, 1]],
        1: [[0, 5], [2, 3]],
        2: [[0, 1], [1, 3]]
    }
    let spanTree = []
    const pq = [[0, 0, 0]]
    let visited = new Array(V).fill(0)
    let parent = new Array(V).fill(Infinity)
    let sum = 0
    while (pq.length > 0) {
        const [weight, node, parentNode] = pq.shift()
        if (visited[node] === 1) continue
        visited[node] = 1
        parent[node] = parentNode
        sum += weight
        for (const [adjNode, adjWt] of graph[node]) {
            if (visited[adjNode] === 0) {
                // pq.enqueue({ weight: adjWt, node: adjNode })
                pq.push([adjWt, adjNode])
                pq.sort((a, b) => a[0]- b[0])
            }
        }

    }
    console.log(parent)
    return sum
}

console.log(primes(3, [[0, 1, 5], [1, 2, 3], [0, 2, 1]]))

// TC->ElogE
//SC-> O(E)