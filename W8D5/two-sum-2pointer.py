def twoSum(A, target):
    A.sort() # n logn
    p1 = 0 # 1
    p2 = len(A) - 1 # 1
    while p1<p2: # n
        if (A[p1]+A[p2] > target):
            p2 -= 1
        elif (A[p1] + A[p2] < target):
            p1 += 1
        elif (A[p1] + A[p2] == target):
            return "Pair exists"
    return "Pair does not exist" # 1

print(twoSum([6,4,8,11], 22))