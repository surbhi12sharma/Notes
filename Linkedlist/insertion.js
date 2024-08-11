/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let k = 3, curr = head, newData = 7
    let temp = new ListNode(newData)
    if (k === 1) {
        temp.next = head
        return temp
    }
    if (k === 5) {
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = temp
        return head
    }
    if (k === 3) {
        for (let i = 1; i < k - 1; i++) {
            curr = curr.next
        }
        // console.log(curr)
        let temp2 = curr.next
        curr.next = temp
        temp.next = temp2
        return head
    }
    // console.log(head, temp)
};