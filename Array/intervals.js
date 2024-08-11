function findBusiestPeriod(data) {
    let currentVisitors = 0;
    let maxVisitors = 0;
    let busiestTime = 0;
    
    for (let i = 0; i < data.length; i++) {
        const [timestamp, count, entered] = data[i];
        
        if (entered === 1) {
            currentVisitors += count;
        } else {
            currentVisitors -= count;
        }
        
        // Check if this is the last data point or the next data point has a different timestamp
        if (i === data.length - 1 || data[i + 1][0] !== timestamp) {
            if (currentVisitors > maxVisitors) {
                maxVisitors = currentVisitors;
                busiestTime = timestamp;
            }
        }
    }
    
    return busiestTime;
}

// Example usage
const data = [
    [1487799425, 14, 1],
    [1487799425, 4, 1],
    [1487799425, 2, 1],
    [1487800378, 10, 0],
    [1487801478, 18, 0],
    [1487801478, 18, 1],
    [1487901013, 1, 0],
    [1487901211, 7, 1],
    [1487901211, 7, 0]
];

console.log(findBusiestPeriod(data));  // Output should be the timestamp of the busiest moment
