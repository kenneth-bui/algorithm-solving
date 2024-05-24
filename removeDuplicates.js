/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let last = (removed = new ListNode());
  while (head !== null) {
    if (removed.val !== head.val) removed.next = head;
    head = head.next;
    removed = removed.next;
  }
  return last.next;
};

console.log(deleteDuplicates([1, 2, 2, 3, 4, 7, 7, 8]));
