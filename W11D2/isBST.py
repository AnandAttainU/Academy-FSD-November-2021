from turtle import right


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def isValidBST(root):
    if root is None:
        return {
                "max_val": float("-inf"),
                "min_val": float("inf"),
                "isBST": True
                }
    if root.left is None and root.right is None:
        return {
                "max_val": root.data,
                "min_val": root.data,
                "isBST": True
                }
    
    left_ans = isValidBST(root.left) # returns a dictionary with 3 values
    right_ans = isValidBST(root.right) # return a dictionary with 3 values for right subtree

    if left_ans["isBST"] == True and right_ans["isBST"] == True and root.data > left_ans["max_val"] and root.data < right_ans["min_val"]:
        return {
                "max_val":right_ans["max_val"],
                "min_val":left_ans["min_val"],
                "isBST": True
                }
    else:
        return {
                "max_val":max(root.data, right_ans["max_val"]),
                "min_val":min(root.data,left_ans["min_val"]),
                "isBST": False
                }
        

root = Node(15)
root.left = Node(10)
root.right = Node(25)

root.left.left = Node(2)
root.right.right = Node(35)
# root.right.left.right = Node(45)

ans = isValidBST(root)
print(ans["isBST"])



#           15
#       10      25
#      2           35 
#               
#   15 10 25 2 35 -> level order