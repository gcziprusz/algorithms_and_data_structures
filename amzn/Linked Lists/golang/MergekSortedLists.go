/**
Merge with Divide And Conquer
Intuition & Algorithm

This approach walks alongside the one above but is improved a lot. 
We don't need to traverse most nodes many times repeatedly

Pair up \text{k}k lists and merge each pair.

After the first pairing, \text{k}k lists are merged into k/2k/2 
lists with average 2N/k2N/k length, then k/4k/4, k/8k/8 and so on.

Repeat this procedure until we get the final sorted linked list.

Thus, we'll traverse almost NN nodes per pairing and merging, and repeat 
this procedure about \log_{2}{k}log 2k times.
**/
 
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
	listsLen := len(lists)
	if listsLen == 0 {
		return nil
	} else if listsLen == 1 {
		return lists[0]
	}

	for len(lists) > 1 {
		list1, list2 := lists[0], lists[1]
		merged := mergeLists(list1, list2)

		lists = lists[2:]
		lists = append(lists, merged)
	}
	return lists[0]
}

func mergeLists(listA, listB *ListNode) *ListNode {
	res := &ListNode{}
	dummyHead := res
	for listA != nil || listB != nil {
		if listA == nil {
			res.Next = listB
			break
		}
		if listB == nil {
			res.Next = listA
			break
		}

		if listA.Val < listB.Val {
			res.Next = listA
			res = res.Next
			listA = listA.Next
		} else {
			res.Next = listB
			res = res.Next
			listB = listB.Next
		}
	}
	return dummyHead.Next
}
