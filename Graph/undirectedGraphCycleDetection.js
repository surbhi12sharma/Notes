function dfs(graph, src, visited, parent){
    visited[src] = 1
    console.log(src)
    for(let adj of graph[src]){
        if(visited[adj]===0){
            if(dfs(graph, adj, visited, src)===true){
                return true
            }
        }
        else if(adj!==parent){
            // console.log("cycle")
            return true
        }
    }
    return false
}
function bfs(graph, curr, visited){
    const queue=[[curr, -1]]
    visited[curr] = 1
    const dir = [[0,1],[0,-1],[1,0],[-1,0]]
    while(queue.length!==0){
        // console.log(queue)
        let [node, parent] = queue.shift()
        console.log(graph[node])
        for(let adj of graph[node]){
            if(visited[adj]===0){
                queue.push([adj, node])
                visited[adj] = 1
            }
            else if(adj!==parent){
                return true
            }
        }
    }
    return false

}

function main(){
    const graph={
        0: [1],
        1: [2, 4],
        2: [1, 3],
        3: [2, 4],
        4: [1, 3],
    }

    // const graph={
        // 0: [0],
        // 1: [2],
        // 2: [3],
        // 3: [],
        // 4: [1, 3],
    // }


    let v= 5
    // let v= 4

    let visited = new Array(v).fill(0)
    let visited1 = new Array(v).fill(0)

    for(let i=0; i<v; i++){
        if(visited[i]===0){
            console.log(dfs(graph, i, visited, -1)===true ? true : false )
            console.log(bfs(graph, i, visited1)===true ? 'cycle': 'No cycle')
        }
    }
}

main()