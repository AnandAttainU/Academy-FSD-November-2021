## Given two sorted Array A, B. 
## We need to merge these two and get final array C as sorted.
# A = [1, 4, 6, 8, 9, 12]
# B = [3, 5, 7]
## C = [1, 3, 4, 5, 6, 7, 8, 9, 12]

def merge(A, B):
    C = list()
    for i in A:
        C.append(i)
    
    for j in B:
        C.append(j)
    # [1, 4, 6, 8, 9, 12, 3, 5, 7]
    
    C.sort() #O(n logn)
    return C

A = [1, 4, 6, 8, 9, 12]
B = [3, 5, 7]


# A = [1, 4, 6, 8, 9, 12]
# B = [3, 5, 7]
## C = [1, 3, 4, 5, 6, 7, 8, 9, 12]

def mergeInNtime(A, B):
    n = len(A)
    m = len(B)

    start1 = 0
    start2 = 0

    C = list()

    while start1 < n and start2 < m:
        if A[start1] < B[start2]:
            C.append(A[start1])
            start1 += 1
        else:
            C.append(B[start2])
            start2 += 1
    
    while start1 < n:
        C.append(A[start1])
        start1 += 1
    
    while start2 < m:
        C.append(B[start2])
        start2 += 1

    return C

print(mergeInNtime(A, B))