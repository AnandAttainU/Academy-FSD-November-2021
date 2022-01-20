# Next greater element on the right side of the list
def solve(A):
    n = len(A)
    stack = list()

    ans = [0] * len(A)
    
    for idx, val in enumerate(A):
        if len(stack) == 0:
            stack.append(idx)
        else:
            while len(stack)!=0 and A[stack[-1]] < val:
                x = stack.pop() 
                ans[x] = val
            stack.append(idx)  

    while len(stack)!=0:
        x = stack.pop()
        ans[x] = None
    return ans
        

print(solve([2,1,9,4,6,8,1,7]))