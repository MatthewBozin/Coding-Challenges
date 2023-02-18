//MERGE TWO SORTED LISTS

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

console.assert(
  mergeTwoLists([], []) == [],
  "Returns empty array when given empty array."
);

console.assert(
  mergeTwoLists([0, 1, 2], []) == 0,
  "Properly sorts when given only one list."
);

console.assert(
  mergeTwoLists([1, 3, 5], [2, 4, 6]) == [1, 2, 3, 4, 5, 6],
  "Properly sorts when given two lists."
);
