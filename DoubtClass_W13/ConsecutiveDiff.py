n = int(input())
arr = list(map(int, input().split()))
arr.sort()

max_diff = 0
for i in range(n-1):
    temp = arr[i+1] - arr[i]
    if temp > max_diff:
        max_diff = temp
        
print(max_diff)