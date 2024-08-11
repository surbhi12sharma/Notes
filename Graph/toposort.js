// function main() {
//     // const graph = [[], [], [3], [1], [0, 1], [0, 2]]
//     const graph = [[],[0],[0],[0]]
//     const n = 4
//     let stack = []
//     let visited = new Array(n).fill(0)
//     for (let i = 0; i < n; i++) {
//         if (visited[i] === 0) {
//             dfs(graph, n, visited, i, stack)
//         }
//     }
//     console.log(stack)
//     let ans = []
//     while(stack.length!==0){
//         ans.push(stack.pop())
//     }
//     console.log(ans)
// }

// function dfs(graph, n, visited, node, stack) {
//     visited[node] = 1
//     if (graph[node].length === 0) {
//         for (let neg of graph[node]) {
//             if (visited[neg] === 0) {
//                 dfs(graph, n, visited, node, stack)
//             }
//         }
//     }
//     stack.push(node)
// }

// main()




main()
function main() {
    const n = 4, m = 10
    // const edges=[[0,1],[0,3],[3,4],[4,5],[5,6],[1,2],[2,6],[6,7],[7,8],[6,8]] 
    // const edges = [[], [], [3], [1], [0, 1], [0, 2]]
    const edges = [[],[0],[1],[2,3]]
    const src = 0
    let graph = {}
    let indegree = new Array(edges.length).fill(0)
    for (let i = 0; i < edges.length; i++) {
        graph[i] = []
    }
    for (let i = 0; i < edges.length; i++) {
        for(let j=0; j<edges[i].length; j++){
            let adj = edges[i][j]
            graph[i].push(adj)
            indegree[adj] += 1
        }
    }
    const queue = []
    for(let i=0; i<indegree.length; i++){
        if(indegree[i]===0){
            queue.push(i)
        }
    }
    let topo = []
    let count = 0
    console.log(queue, indegree)
    while(queue.length!==0){
        let node = queue.shift()
        console.log(node)
        count++
        topo.push(node)
        for(let neg of graph[node]){
            console.log("neg-->",neg)
            indegree[neg] -= 1
            if(indegree[neg]===0){
                queue.push(neg)
            }
        }
    }
    console.log(topo)
    if(edges.length===count){
        console.log("false")
    }
    else{
        console.log("true")
    }

    console.log("************")
    let stack = []
    let visited = new Array(edges.length).fill(0)
    for (let i = 0; i < edges.length; i++) {
        if (visited[i] === 0) {
            dfs(stack, graph, visited, i)
        }
    }
    // while(stack.length!==0){
    // console.log(stack.pop())
    // }
    console.log(stack.reverse())

}


function dfs(stack, graph, visited, node) {
    visited[node] = 1
    for (let neg of graph[node]) {
        if (visited[neg] === 0) {
            dfs(stack, graph, visited, neg)
        }
    }
    stack.push(node)
}
