from gettext import find


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
count = 1
def findInBST(root, target):
    global count
    if root is None:
        return False
    
    if root.data == target:
        return True

    count += 1
    if root.data < target:
        return findInBST(root.right, target)
    else:
        return findInBST(root.left, target)

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.left = Node(2)
root.right.right = Node(35)

print(findInBST(root, 35))
print(count)

#           15
#       10      25
#     2             35
#               