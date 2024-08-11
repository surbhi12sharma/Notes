// 1. Sort all the edges according to weight
function kruskalAlgo(){
    const V = 5, edges = [[0, 1, 2], [0, 3, 6], [1, 2, 3], [1, 3, 8], [1, 4, 5], [4, 2, 7]]
    edges.sort((a,b)=>a-b)
    let mstWt = 0
    const ds = new Disjoin(V)

    for(let [u, v, wt] of edges){
        if (ds.findUParent(u) !== ds.findUParent(v)) {
            mstWt += wt
            console.log(u, v, wt)
            ds.unionByRank(u, v)
        }

    }
    console.log(mstWt)
}

class Disjoin {
    constructor(n) {
        this.rank = new Array(n).fill(0)
        this.parent = new Array(n)
        this.size = new Array(n)
        // this.parent2 = new Array(n).fill(1)
        for (let i = 0; i <= n; i++) {
            this.parent[i] = i
            // this.parent2[i] = i
        }
    }
    // find ultimate parent
    findUParent(node) {
        if (node === this.parent[node]) {
            return node
        }
        return this.parent[node] = this.findUParent(this.parent[node])
    }

    unionByRank(u, v) {
        // ulp_u -> ultiate parent of u
        const ulp_u = this.findUParent(u)
        const ulp_v = this.findUParent(v)
        if (ulp_u === ulp_v) return;
        if (this.rank[ulp_u] < this.rank[ulp_v]) {
            this.parent[ulp_u] = ulp_v
        }
        else if (ulp_v < ulp_u) {
            this.parent[ulp_v] = ulp_u
        }
        else {
            this.parent[ulp_v] = ulp_u
            this.rank[ulp_u]++
        }
    }
    unionBySize(u, v) {
        // ulp_u -> ultiate parent of u
        const ulp_u = this.findUParent(u)
        const ulp_v = this.findUParent(v)
        if (ulp_u === ulp_v) return;
        if (this.size[ulp_u] < this.size[ulp_v]) { 
            this.parent[ulp_u] = ulp_v
            this.size[ulp_v] += this.size[ulp_u]
        }
        else{
            this.parent[ulp_u] = ulp_v
            this.size[ulp_v] += this.size[ulp_u]
        }


    }
    // print() {
    // console.log("disjoin")
    // }
}

//Tc-> O(1)

kruskalAlgo()