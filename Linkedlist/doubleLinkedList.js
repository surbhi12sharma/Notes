class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function doubleLinkedList() {
    let arr = [1, 5, 6]
    let temp = new Node(-1)
    let head = temp
    // console.log(temp)
    for (let i = 0; i < arr.length; i++) {
        let curr = new Node(arr[i])
        curr.prev = temp
        temp.next = curr
        temp = temp.next
        // console.log(temp.data)
    }
    return head.next
}

function insertion() {
    let head = doubleLinkedList()
    let curr = head
    console.log(curr)
    let p = 2, x = 6
    while (head !== null && p !== 0) {
        // console.log(head.data)
        head = head.next
        p--
    }
    let temp = new Node(x)
    temp.prev = head
    let temp2 = head.next
    head.next = temp
    temp.next = temp2

    // console.log(curr)
    while (curr !== null) {
        console.log(curr.data)
        curr = curr.next
    }
}

function deletion() {
    let head = doubleLinkedList()
    if (head === null) {
        return null
    }
    let curr = head
    let x = 5
    let prev = null
    if (curr.data === x) {
        curr = curr.next
        curr.prev.next = null
        curr.prev = null
        head = curr
    }
    else {
        while (curr !== null) {
            if (curr.data === x) {
                console.log("found")
                break
            }
            // console.log(prev.data, curr.data)
            prev = curr
            curr = curr.next
        }
        if (prev.next !== null) prev.next = curr.next
        curr.next = null
        curr.prev = null
        if (prev.next !== null) prev.next.prev = prev
    }
    traverse(head)
}

function reverse() {
    let head = doubleLinkedList()
    if (head === null || head.next === null) {
        return head;
    }
    let prev1 = null
    let curr = head
    while (curr !== null) {
        prev1 = curr.prev
        curr.prev = curr.next
        curr.next = prev1
    }
    console.log(prev1)
    traverse(prev1.prev)
    // console.log(temp.data, temp.prev.data)

}

function traverse(node) {
    while (node !== null) {
        console.log(node.data)
        if (node.next !== null) {
            console.log("next-->", node.next.data)
        }
        node = node.next
    }
}

function twoSum() {
    let head = doubleLinkedList()
    let curr = head
    let left = head
    let target = 6
    while(curr.next!==null){
        curr = curr.next
    }
    // console.log(curr)
    let right = curr
    while(left!==right){
        let sum = left.data+right.data
        console.log(sum)
        if(sum===target){
            return [left.data, right.data]
        }
        if(sum>target){
            right = right.prev
        }
        else{
            left = left.next
        }
    }
}
// insertion()
// deletion()
// reverse()
console.log(twoSum())

