def merge(A, start1, end1, start2, end2): # p1 0, end1 = 2, p2 = 3, end2 = 5
    Left = A[start1:end1+1]
    Right = A[start2: end2+1]

    p1 = 0
    p2 = 0
    k = start1
    while p1 < len(Left) and p2 < len(Right):
        if Left[p1] < Right[p2]:
            A[k] = Left[p1]
            p1 += 1
        else:
            A[k] = Right[p2]
            p2 += 1
        k += 1
    
    while p1 < len(Left):
        A[k] = Left[p1]
        p1 += 1
        k += 1
    while p2 < len(Right):
        A[k] = Right[p2]
        p2 += 1
        k += 1

def mergeSort(A, left, right):
    if left >= right:
        return
    
    mid = (left + right)//2

    mergeSort(A, left, mid)
    mergeSort(A, mid+1, right)

    merge(A, left, mid, mid+1, right)

A = [2, 8, 5, 14, 10, 3]
mergeSort(A, 0, 5)
print(A)
