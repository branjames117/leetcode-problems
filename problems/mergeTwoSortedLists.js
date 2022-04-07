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

// lay the groundwork
class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoLists = function (list1, list2) {
  // create a new linked list with its first node
  let finalList = new Node();

  /* 
  At this point, finalList looks like this:
  {
    val: 0,
    next: null
  }
  */

  // establish it as the head of the list so we don't lose the reference to the head as we build it out
  let head = finalList;

  // as long as a NEXT exists in both input lists, carry on
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

    /*
    After the first iteration, finalList will look like this:
    {
      val: 0,
      next: {
        val: 1,
        next: null
      }
    }

    After the second iteration, finalList will look like this:
    {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 2,
          next: null,
        }
      }
    }

    And so on, so in each comparison check we are seeing which of the currently tracked value in either list is the lowest, then setting that as the value of the next object in our new list, while also moving the pointer forward in the list that won out
    */

    // move our reference to the list down a level
    finalList = finalList.next;
  }

  // It's possible that one linked list is shorter than the other, so we can just add the remainder of the last linked list.

  if (list1 !== null) finalList.next = list1;
  if (list2 !== null) finalList.next = list2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};

// linked lists are something to wrap a head about
