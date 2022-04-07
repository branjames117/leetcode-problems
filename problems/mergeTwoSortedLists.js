// solution 1, in which I fail miserably due to not having enough experience with linked lists
var mergeTwoLists = function (list1, list2) {
  // handle case of both lists being empty
  if (
    list1.val === 0 &&
    list1.next === null &&
    list2.val === 0 &&
    list2.next === null
  ) {
    return { val: 0, next: null };
  }

  // handle cases of one list being empty
  if (list1.val === 0 && list1.next === null) {
    return list2;
  }

  if (list2.val === 0 && list2.next === null) {
    return list1;
  }

  let mergedArr = [];

  function checkNodeEnds(listNode) {
    mergedArr.push(listNode.val);
    if (listNode.next === null) {
      return;
    } else {
      checkNodeEnds(listNode.next);
    }
  }

  checkNodeEnds(list1);
  checkNodeEnds(list2);

  mergedArr.sort((a, b) => a - b);

  function buildNode() {
    node = {};
    node.val = mergedArr.pop();
    if (mergedArr.length > 0) {
      node.next = buildNode();
    } else {
      node.next = null;
    }
  }

  return buildNode();
};

// solution 2, from Sonika Maheshwari at https://sonikamaheshwari067.medium.com/javascript-merge-two-sorted-lisnked-list-1233b0bdfb6f
var mergeTwoLists = function (list1, list2) {
  let finalList = new Node();
  let head = finalList;

  while (list1 !== null && list2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.

    if (list1.val < list2.val) {
      finalList.next = new Node(list1.val);
      list1 = list1.next;
    } else {
      finalList.next = new Node(list2.val);
      list2 = list2.next;
    }

    finalList = finalList.next;
  }

  // It's possible that one linked list is shorter than the other, so we can just add the remainder of the last linked list.

  if (list1 !== null) finalList.next = list1;
  if (list2 !== null) finalList.next = list2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};
