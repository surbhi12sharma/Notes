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


function main() {
    const ds = new Disjoin(7)
    ds.unionByRank(1, 2)
    ds.unionByRank(2, 3)
    ds.unionByRank(4, 5)
    ds.unionByRank(6, 7)
    ds.unionByRank(5, 6)
    // Find 3 and 7 belong to same component or not 
    if (ds.findUParent(3) === ds.findUParent(7)) {
        console.log("same")
    }
    else {
        console.log("not same")
    }
    ds.unionByRank(3, 7)
    if (ds.findUParent(3) === ds.findUParent(7)) {
        console.log("same")
    }
    else {
        console.log("not same")
    }
}

main()

//Tc-> O(1)