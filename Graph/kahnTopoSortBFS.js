function main(){
    // const graph = [[], [], [3], [1], [0, 1], [0, 2]]
    // const n=6
    const graph = [[],[0],[0],[0]]
    const n = 4
    let indegree = new Array(n).fill(0)
    for(let i=0; i<n; i++){
        for(let node of graph[i]){
            indegree[node] += 1
        }
    }
    const queue = []
    for(let i=0; i<indegree.length; i++){
        if(indegree[i]===0){
            queue.push(i)
        }
    }

    const topo=[]
    while(queue.length!==0){
        let node = queue.shift()
        topo.push(node)
        for(let neg of graph[node]){
            indegree[neg] -= 1
            if(indegree[neg]===0){
                queue.push(neg)
            }
        }
    }
    console.log(topo)
}

main()