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

def levelOrderUsingQueue(root):
    if root is None:
        return

    queue = list()
    queue.append(root)

    while(len(queue)>0):
        var = queue.pop(0)
        print(var.data, end=" ")

        if var.left is not None:
            queue.append(var.left)
        if var.right != None:
            queue.append(var.right)

def printNodeAtLevel(root, l):
    if root is None:
        return

    if l == 1:
        print(root.data, end=" ")
        
    elif l!=1:
        printNodeAtLevel(root.left, l-1)
        printNodeAtLevel(root.right, l-1)

def levelOrderPrint(root):
    if root is None:
        return

    ht = heightOfTree(root)

    for i in range(1, ht+1):
        printNodeAtLevel(root, i)


root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.right = Node(2)
root.right.left = Node(35)
# root.right.left.right = Node(45)

levelOrderPrint(root)
print()




#           15
#       10      25
#         2   35 => l=3
#               
#   15 10 25 2 35 -> level order