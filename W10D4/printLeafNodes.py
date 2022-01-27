class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def printLeafNodes(root):
    if root is None:
        return
    if root.left == None and root.right == None:
        print(root.data, end=" ")
    printLeafNodes(root.left)
    printLeafNodes(root.right)

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.right = Node(2)
root.right.left = Node(35)

printLeafNodes(root)

#           15
#       10      25
#         2   35