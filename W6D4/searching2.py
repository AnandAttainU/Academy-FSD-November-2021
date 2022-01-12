A = [1,1,2,2,2,2,3,3,4,4]
target = 2

def lowerBound(A, target):
    n = len(A)
    left = 0
    right = n-1

    ans = -1 # not found as of now
    while left <= right:
        mid = (left + right)//2
        if (A[mid]==target):
            ans = mid
            right = mid -1
        elif A[mid] > target:
            right = mid -1
        elif A[mid] < target:
            left = mid +1
    return ans

def upperBound(A, target):
    n = len(A)
    left = 0
    right = n-1

    ans = -1 # not found as of now
    while left <= right:
        mid = (left + right)//2
        if (A[mid]==target):
            ans = mid
            left = mid+1
        elif A[mid] > target:
            right = mid -1
        elif A[mid] < target:
            left = mid +1
    return ans

print(lowerBound(A, target), upperBound(A, target))
