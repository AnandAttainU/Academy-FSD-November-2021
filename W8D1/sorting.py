def selection_sort(A):
    # [9, 8, 4, 2, 5]
    
    for i in range(len(A)):
        min_ele = A[i]
        min_ele_idx = i
        for j in range(i, len(A)):
            if A[j] < min_ele:
                min_ele = A[j]
                min_ele_idx = j
        A[i], A[min_ele_idx] = A[min_ele_idx], A[i]
    return A

# [9, 8, 4, 2, 5]
def bubble_sort(A):
    n = len(A)
    for i in range(len(A)):
        for j in range(0, n-i-1):
            if A[j] > A[j+1]:
                A[j], A[j+1] = A[j+1], A[j]
    return A
    

A = [9, 8, 4, 2, 5]
print("bubble = ", bubble_sort(A))


