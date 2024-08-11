function minimumMultiplications() {
    // const input= [2, 5, 7]
    // const start = 3, end = 30, step = 0
    const input = [3, 4, 65]
    const start = 7, end = 66175, step=0

    const queue = [[start, step]]
    let dist = new Map()
    dist.set(src, 0)
    while (queue.length !== 0) {
        let [curr, step] = queue.shift()
        if (curr === end) {
            return step
        }
        for (let i = 0; i < input.length; i++) {
            const mul = (curr * input[i])%mod
            let oldDist = Infinity
            if(dist.has(input[i]))
            if(step+1<dist)
            queue.push([mul, step + 1])
        }
    }
}

console.log(minimumMultiplications())
