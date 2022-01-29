class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def heightOfTree(root):
    if root is None:
        return 0
    if root.left == None and root.right == None:
        return 1
    lh = heightOfTree(root.left)
    rh = heightOfTree(root.right)
    return max(lh, rh) + 1

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.right = Node(2)
root.right.left = Node(35)
# root.right.left.right = Node(45)

print(heightOfTree(root))


#           15
#       10      25
#         2   35
#               