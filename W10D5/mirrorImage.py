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

def mirrorImage(root):
    if root is None:
        return
    #swapping
    root.left, root.right = root.right, root.left
    mirrorImage(root.left)
    mirrorImage(root.right)

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.right = Node(2)
root.right.left = Node(35)

preorder(root)
print()

mirrorImage(root)

preorder(root)
print()





#           15
#       10      25
#         2   35
#  

#           15
#       25        10
#         35    2
# 15 25 35 10 2