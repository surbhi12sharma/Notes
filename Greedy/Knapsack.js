function Knapsack() {
    const n = 3, W = 50, value = [60, 100, 120], weight = [10, 20, 30]
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push([value[i], weight[i]])
    }
    arr.sort((a, b) => b[0] / b[1] - a[0] / a[1])
    console.log(arr)
    let currWeight = 0, finalValue = 0
    for (let i = 0; i < n; i++) {
        let [val, w] = arr[i]
        // console.log(currWeight, w)
        if (currWeight + w <= W) {
            currWeight += w
            finalValue += val
        }
        else {
            let remaing = W - currWeight
            console.log("remaing", remaing)
            finalValue += Math.floor(val / w) * remaing
            // console.log(W, currWeight, w)
            console.log("finalValue1-->", finalValue)
            break
        }
    }
    console.log("finalValue-->", finalValue)
}

Knapsack()


class Item {
    constructor(weight, value) {
        this.weight = weight;
        this.value = value;
    }
}

function fractionalKnapsack(capacity, items) {
    // Sort items by value-to-weight ratio in descending order
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;
    for (const item of items) {
        if (capacity === 0) break;
        if (item.weight <= capacity) {
            // If the item can be fully taken
            capacity -= item.weight;
            totalValue += item.value;
        } else {
            // Take the fraction of the remaining capacity
            totalValue += item.value * (capacity / item.weight);
            capacity = 0;
        }
    }

    return totalValue;
}

// Example usage:
const items = [
    new Item(10, 60),
    new Item(20, 100),
    new Item(30, 120)
];

const capacity = 50;
console.log(fractionalKnapsack(capacity, items)); // Output: 240
