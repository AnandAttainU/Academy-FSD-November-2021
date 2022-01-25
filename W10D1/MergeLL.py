class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def printList(head):
    cur = head
    while cur != None:
        print(cur.data, end = " ")
        cur = cur.next

def merge(head1, head2):
    p1 = head1
    p2 = head2
    head3 = None
    cur = None
    while p1 != None and p2 != None:
        if p1.data < p2.data:
            if head3 == None:
                head3 = Node(p1.data)
                cur = head3
            else:
                cur.next = Node(p1.data)
                cur = cur.next
            p1 = p1.next
        else:
            if head3 is None:
                head3 = Node(p2.data)
                cur = head3
            else:
                cur.next = Node(p2.data)
                cur = cur.next
            p2 = p2.next
    while p1 != None:
        cur.next = Node(p1.data)
        cur = cur.next
        p1 = p1.next
    while p2 != None:
        cur.next = Node(p2.data)
        cur = cur.next
        p2 = p2.next
    return head3
    
def reverseLL(head):
    prev = None
    cur = head
    while cur != None:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev


head1 = Node(5)
head1.next = Node(15)
head1.next.next = Node(25)
head1.next.next.next = Node(50)

print("head1 linked list: ")
printList(head1)
print()

h = reverseLL(head1)
print("reversed linked list: ")
printList(h)
print()




