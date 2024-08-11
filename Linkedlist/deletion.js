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
    let curr = head, k = 3, prev = null
    if (k === 1) {
        curr = curr.next
        return curr
    }
    if (k === 5) {
        while (curr.next.next !== null) {
            curr = curr.next
        }
        curr.next = null
        return head
    }
    for (let i = 1; i < k; i++) {
        prev = curr
        curr = curr.next
    }
    prev.next = prev.next.next
    console.log(prev, curr)
    return head
};