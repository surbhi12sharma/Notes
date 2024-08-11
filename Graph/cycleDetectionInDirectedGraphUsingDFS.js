function main(){
    const graph={
        1: [2],
        2: [3],
        3: [4, 7],
        4: [5],
        5: [6],
        6: [],
        7: [5],
        8: [9],
        9: [10],
        10: [8]
    }
    const n=10
    let res = true
    let visited = new Array(n+1).fill(0)
    let pathVis = new Array(n+1).fill(0)
    for(let i=1; i<n+1; i++){
        if(visited[i]===0 && pathVis[i]===0){
            res = dfs(i, graph, visited, pathVis)
        }
    }
    console.log(res)
}

function dfs(node, graph, visited, pathVis){
    visited[node] = 1
    pathVis[node] = 1
    for(let neg  of graph[node]){
        if(visited[node]===0){
            dfs(neg, graph, visited, pathVis)
            pathVis[neg] = 0
        }
        else if(visited[neg]===pathVis[neg]){
            return false
        }
    }
    return true
}

main()