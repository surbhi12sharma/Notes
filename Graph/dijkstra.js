// // //User function Template for javascript

// // /**
// //  * @param {number} V
// //  * @param {number[][][]} Adj
// //  * @param {number} S
// //  * @return {number[]}
// //  */
// // class Solution {
// //   //Function to find the shortest distance of all the vertices
// //   //from the source vertex S.
// //   dijkstra(V, Adj, S) {
// //     let distance = new Array(V).fill(Infinity);
// //     distance[S] = 0;
// //     const set = { 0: [[S, 0]] };
// //     while (Object.keys(set).length !== 0) {
// //       const topElement = Object.keys(set)[0]
// //       const [node, wt] = set[topElement].shift()
// //       if (set[topElement].length === 0) delete set[topElement]
// //       for (var i = 0; i < Adj[node].length; i++) {
// //         const [neighbour, weight] = Adj[node][i]
// //         const newWeight = weight + wt
// //         if (newWeight < distance[neighbour]) {
// //           distance[neighbour] = wt + weight
// //           if (set[newWeight] === undefined) set[newWeight] = []
// //           set[newWeight].push([neighbour, newWeight])
// //         }
// //       }
// //     }
// //     return distance
// //   }

// // }


// function dijkstra() {
//   const V = 2, adj = [[0, 1, 9], [1, 0, 9]], S = 0
//   let distance = new Array(V).fill(Infinity)
//   const graph = {}
//   for (let i = 0; i < V; i++) {
//     const [u, v, wt] = adj[i]
//     if (!graph[u]) {
//       graph[u] = []
//     }
//     // if (!graph[v]) {
//       // graph[v] = []
//     // }
//     graph[u].push([v, wt])
//     // graph[v].push([u, wt])
//   }
//   // console.log(graph)
//   distance[S]=0

// }

// dijkstra()


main()
function main() {
  let maxHeap = new MaxHeap()

  maxHeap.insert(3)
  maxHeap.insert(5)
  console.log(maxHeap)
}


function MaxHeap() {
  this.list = [];

  this.maxHeapify = (i) => {
    let n = this.list.length;
    let largest = i;
    let l = 2 * i + 1;   // left child index
    let r = 2 * i + 2;   // right child index

    if (l < n && this.list[l] > this.list[largest])   // if left child is greater than parent
      largest = l;
    if (r < n && this.list[r] > this.list[largest])  // if right child is greater than parent
      largest = r;

    if (largest !== i) {  // if largest element is not the parent (heap property violated, so restore it)
      [this.list[i], this.list[largest]] = [this.list[largest], this.list[i]];
      this.maxHeapify(largest);
    }
  }

  this.insert = (value) => {
    this.list.push(value);
    for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--)  // heapify the affected sub-tree
      this.maxHeapify(i);
  }

  this.delete = (value) => {
    // 1. Find the element to be deleted
    let i, n = this.list.length;
    for (i = 0; i < n; i++)
      if (this.list[i] === value) break;

    // 2. Swap that number with last element in the list & delete the last element
    [this.list[i], this.list[n - 1]] = [this.list[n - 1], this.list[i]];
    this.list.splice(n - 1);

    // 3. Heapify
    for (let i = parseInt(n / 2 - 1); i >= 0; i--)
      this.maxHeapify(i);
  }

  this.findMax = () => this.list[0];
  this.getMax = () => {
    let max = this.findMax();
    this.delete(max);
    return max;
  }
  this.size = () => this.list.length;
}



/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = buildGraph(flights, n); // Graph
  console.log(graph)
  const pq = new MinPriorityQueue({ priority: (val) => val.distance });
  pq.enqueue({ distance: 0, source: src }) // distance, source
  let dist = new Array(n).fill(Infinity)
  // console.log(dist, pq.dequeue().element)
  while (pq.size() > 0) {
    // console.log(pq)
    const { distance, source } = pq.dequeue().element
    // console.log(distance, source, graph[0])
    for (const [neg, cost] of graph[source]) {
      // console.log(neg, cost)
      const nextDistance = distance + cost
      if (nextDistance < dist[neg]) {
        dist[neg] = nextDistance
        pq.enqueue({ distance: cost, source: neg })
      }
    }
  }
  console.log(dist)
};

const buildGraph = (flights, n) => {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = []
  }
  for (let i = 0; i < flights.length; i++) {
    let [u, v, wt] = flights[i]
    graph[u].push([v, wt])
    graph[v].push([u, wt])
  }
  return graph;
};