// main()

// function main(){
//     // const N = 4, M = 2
//     // const edge = [[0,1,2],[0,2,1]]
//     const N = 6, M = 7
//     const 
//     edge = [[0,1,2],[0,4,1],[4,5,4],[4,2,2],[1,2,3],[2,3,6],[5,3,1]]
//     const graph = {}
//     for(let i=0; i<N; i++){
//         graph[i] = []
//     }
//     for(let i=0; i<M; i++){
//         const [u, v, wt] = edge[i]
//         graph[u].push([v, wt])
//     }
//     console.log(graph)
//     const src = 0
//     let dist = new Array(N).fill(Infinity)
//     dist[src] = 0
//     const queue =[[0, 0]]
//     while(queue.length!==0){
//         let[ node, wt] = queue.shift()
//         for(let [neg, wt2] of graph[node]){
//             console.log(wt+wt2, dist[neg])
//             if(wt+ wt2<dist[neg]){
//                 dist[neg] = wt+wt2
//                 queue.push([neg, dist[neg]])
//             }
//         }
//     }
//     console.log(dist)
// }


function shortesPathDAC() {
    const n = 7, m = 8
    // const edges =[[0,1,2],[0,4,1],[4,5,4],[4,2,2],[1,2,3],[2,3,6],[5,3,1]]
    const edges = [[0, 4, 2], [0, 5, 3], [5, 4, 1], [4, 6, 3], [4, 2, 1], [6, 1, 2], [2, 3, 3], [1, 3, 1]]
    const graph = buildGraph(edges, n, m)
    // console.log(graph)
    let distance = new Array(n).fill(Infinity)
    distance[0] = 0
    let queue = [0]
    while (queue.length !== 0) {
        let node = queue.shift()
        for (let [neg, wt] of graph[node]) {
            let dist = distance[node] + wt
            if (dist < distance[neg]) {
                distance[neg] = dist
                queue.push(neg)
            }
        }
    }
    console.log(distance)
}

function buildGraph(edges, n, m) {
    const graph = {}
    for (let i = 0; i < n; i++) {
        graph[i] = []
    }
    for (let i = 0; i < m; i++) {
        let [u, v, wt] = edges[i]
        graph[u].push([v, wt])
    }
    return graph
}


shortesPathDAC()