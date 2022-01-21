#[5, None]
class Node:
    def __init__(self, val):
        self.data = val
        self.next = None
head = Node(5)

def addNodeToTheEnd(X):
    # You have a head of a LinkedList and you want to add a new node
    # with value X at the end of the Linked List.
    global head
    if head == None:
        head = Node(X)
        return
    
    cur = head
    while cur.next != None:
        cur = cur.next

    cur.next = Node(X)

def addNodeAtTheStart(X):
    global head

    if head == None:
        head = Node(X)
        return
    new = Node(X)
    new.next = head
    head = new

def addNodeInTheMiddle(X, n): #O(n)
    global head

    if n==0:
        return

    count = 1
    cur = head
    while count != n:
        cur = cur.next
        count += 1
    
    new = Node(X)
    new.next = cur.next
    cur.next = new

def deleteAtTheEnd(): #O(n)
    global head

    prev = None
    cur = head

    while cur.next != None:
        prev = cur
        cur = cur.next
    prev.next = None

def deleteAtStart(): #O(1)
    global head
    if head is None:
        return
    head = head.next

def printLinkedList(): #O(n)
    global head
    cur = head
    while cur != None:
        print(cur.data)
        cur = cur.next

addNodeToTheEnd(10)
addNodeToTheEnd(50)
addNodeToTheEnd(100)
addNodeAtTheStart(2)
addNodeInTheMiddle(25, 3)
deleteAtTheEnd()
deleteAtStart()
printLinkedList()