// User function Template for javascript
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

class Solution {
    // Function to find articulation points in an undirected graph.
    articulationPoints(V, adj) {
        // Code here
        let graph = buildGraph(V, adj)
        let visited = new Array(V).fill(0)
        let tin = new Array(n).fill(Infinity)
        let low = new Array(n).fill(Infinity)
        let mark = new Array(n).fill(0)
        let parent = new Array(n)
        parent[0] = -1
        let timer = 0
        for(let i=0; i<V; i++){
            if(visited[i]===0){
                dfs(i, parent, visited, tin, low, mark, timer, graph)
            }
        }
        let ans = []
        for(let i=0; i<V; i++){
            if(mark===1){
                ans.push(i)
            }
        }
        if(ans.length===0){
            return -1
        }
        return ans
        
    }
}

function dfs(node, parent, vis, tin, low, mark, timer, graph){
    vis[node] = 1
    tin[node] = timer
    low[node] = timer
    timer++
    let child =0
    for(let neg of graph[node]){
        if(neg ===  parent[node]) continue
        if(visited[neg]===0){
            low[node] = Math.min(low[node], low[neg])
            if(low[neg]>=tin[node] && parent[node]!==-1){
                mark[node] = 1
            }
            child++
        }
        else{
            low[node] = Math.min(low[node], tin[neg])
        }
    }
    if(child>1 && parent[node]!==-1){
        mark[node]=1
    }
}

function buildGraph(V, adj){
    const graph={}
    for(let i=0; i<V; i++){
        graph[i] = []
    }
    for(let [u, v] of adj){
        graph[u].push(v)
        graph[v].push(u)
    }
    return graph
}