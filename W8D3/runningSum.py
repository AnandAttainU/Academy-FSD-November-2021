def runningSum(A):
    R = []
    R.append(A[0]) # R[0] = A[0]
    for i in range(1, len(A)):
        R.append(A[i] + R[i-1])
    return R

def sumOfIJ(R, i, j):
    if i == 0:
        return R[j]
    return R[j] - R[i-1]

R = runningSum([1, 3, -4, 5, 6, 1, 2])
i = 0
j = 4
print(sumOfIJ(R, i, j))