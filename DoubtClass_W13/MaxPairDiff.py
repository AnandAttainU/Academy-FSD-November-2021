# Approach - 1 -> O(n)

n = int(input())
arr = list(map(int, input().split()))

max_diff = -1
mini = float("+inf")

for i in range(n):
    mini = min(mini, arr[i])
    if arr[i] - mini > 0:
        max_diff = max(max_diff, arr[i] - mini)
            
print(max_diff)



# Approach - 2 -> Non optimal -> O(n^2)
# n = int(input())
# arr = list(map(int, input().split()))

# max_diff = -1
# for i in range(n):
#     for j in range(i+1, n):
#         if arr[j] > arr[i]:
#             max_diff = max(max_diff, arr[j] - arr[i])
            
# print(max_diff)