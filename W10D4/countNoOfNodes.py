class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
# count = 0
# def countNoOfNodes(root):
#     global count
#     if root is None:
#         return
#     count = count + 1
#     countNoOfNodes(root.left)
#     countNoOfNodes(root.right)

def countOfNodesUsingRecursion(root):
    if root is None:
        return 0
    if root.left==None and root.right==None:
        return 1
    
    lnn = countOfNodesUsingRecursion(root.left)
    rnn = countOfNodesUsingRecursion(root.right)
    return lnn + rnn + 1
    

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.right = Node(2)
root.right.left = Node(35)

# countNoOfNodes(root)
# print(count)
print(countOfNodesUsingRecursion(root))

#           15
#       10      25
#         2   35