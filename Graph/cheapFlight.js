/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const graph = buildGraph(flights); // Graph
    const stops = new Array(n).fill(Infinity); // Stops Value 
    const pq = new MinPriorityQueue({ priority: (val) => val.cost });
    pq.enqueue({ cost: 0, source: src, steps: 0 }); // cost, src, steps
  
    while (pq.size() > 0) {
      const { cost, source, steps } = pq.dequeue().element; // Get Source with Lowest Cost
  
      if (steps > stops[source] || steps > k + 1) continue; // Validate Steps
  
      stops[source] = steps; // Update Source Stops Values
  
      if (source === dst) return cost;
  
      if (graph[source] === undefined) continue;
      for (const [nextCity, nextCost] of graph[source]) {
        pq.enqueue({ cost: cost + nextCost, source: nextCity, steps: steps + 1 }); // Push next Cities
      }
    }
  
    return -1;
  };
  
  const buildGraph = (flights) => {
    const graph = {};
    for (const [start, end, cost] of flights) {
      if (graph[start] === undefined) graph[start] = [];
  
      graph[start].push([end, cost]);
    }
    return graph;
  };