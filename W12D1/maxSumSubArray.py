def findMaxSumSubarray(arr):
    n = len(arr)
    max_sum = 0

    for i in range(n):
        for j in range(i, n):
            sum = 0
            for k in range(i, j+1):
                sum += arr[k]
            max_sum = max(max_sum, sum)
    return max_sum

def kadaneAlgo(arr):
    n = len(arr)
    cur_sum = arr[0]
    max_sum = arr[0]
    for i in range(1, n):
        cur_sum = max(cur_sum + arr[i], arr[i])
        max_sum = max(cur_sum, max_sum)
    return max_sum

arr = [2, 5, -10, 7, -1, 8]
print(kadaneAlgo(arr))