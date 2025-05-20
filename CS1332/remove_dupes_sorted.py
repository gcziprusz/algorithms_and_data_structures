# https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):

    def delete_iterative(self, head):
        if head == None:
            return None
        
        curr = head

        while curr != None and curr.next != None:
            if curr.val == curr.next.val:
                curr.next = curr.next.next
            else:
                curr = curr.next
        return head
    def delete_recursive(self, head):
        if head == None:
            return None
        
        head.next = self.delete_recursive(head.next)

        if head.next != None and head.val == head.next.val:
            return head.next

        return head


    def deleteDuplicates(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        # return self.delete_iterative(head)
        return self.delete_recursive(head)
