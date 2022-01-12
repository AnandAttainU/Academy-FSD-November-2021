L = [1,2,3,4,5,6,7,8,9,10,11]
Target = 12

def binarySearch(L, Target):
    left = 0
    right = len(L)-1
    while left <= right:
        mid = (left + right) // 2

        if(L[mid] == Target):
            return True
        elif(L[mid] < Target):
            left = mid+1 
        else:
            right = mid-1
    return False

print(binarySearch(L, Target))