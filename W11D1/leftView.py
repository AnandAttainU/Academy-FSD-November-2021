from re import L


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

max_level = 0
def leftView(root, cur_level):
    global max_level
    if root is None:
        return

    if cur_level > max_level:
        print(root.data, end=" ")
        max_level = cur_level
    leftView(root.left, cur_level + 1)
    leftView(root.right, cur_level + 1)

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.right = Node(2)
root.right.left = Node(35)
# root.right.left.right = Node(45)

leftView(root, 1)
print()




#           15
#       10      25
#         2   35 => l=3
#               
#   15 10 25 2 35 -> level order