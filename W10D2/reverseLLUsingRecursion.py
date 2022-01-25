class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def printList(head):
    cur = head
    while cur != None:
        print(cur.data, end = " ")
        cur = cur.next

def reverseLLUsingRecursion(head, prev):
    if head == None:
        return None

    if head.next == None:
        head.next = prev
        new_head = head
        return new_head

    new_head = reverseLLUsingRecursion(head.next, head)
    head.next = prev
    return new_head

    

head1 = Node(5)
head1.next = Node(15)
head1.next.next = Node(25)
head1.next.next.next = Node(50)

print("head1 linked list: ")
printList(head1)
print()

h = reverseLLUsingRecursion(head1, None)
print("reversed linked list: ")
printList(h)
print()