class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def printList(head):
    cur = head
    while cur != None:
        print(cur.data, end = " ")
        cur = cur.next

head1 = Node(5)
head1.next = Node(15)
head1.next.next = Node(25)
head1.next.next.next = Node(50)
head1.next.next.next.next = head1.next