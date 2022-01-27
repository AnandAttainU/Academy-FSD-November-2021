class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def preorder(root): # Root L R
    if root is None:
        return
    print(root.data, end=" ")
    preorder(root.left)
    preorder(root.right)

def inorder(root): # L Root R
    if root is None:
        return
    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)

def postorder(root): # L R Root
    if root is None:
        return
    postorder(root.left)
    postorder(root.right)
    print(root.data, end=" ")

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.right = Node(2)
root.right.left = Node(35)
preorder(root)
print()
inorder(root)
print()
postorder(root)
print()

#           15
#       10      25
#         2   35

# Pre -> 15 10 2 25 35
# In  -> 10 2 15 35 25
# Post -> 2 10 35 25 15
