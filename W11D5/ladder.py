import time
dp = [None for _ in range(100)]
def ladder(start_pos,n):
    if start_pos == n:
        return 1
    if start_pos > n:
        return 0
    if dp[start_pos]!=None:
        return dp[start_pos]
    one_step = ladder(start_pos+1, n)
    two_step = ladder(start_pos+2, n)
    ans = one_step + two_step
    dp[start_pos] = ans
    return ans
n = 135

st_time = time.time()
res = ladder(0, n)
end_time = time.time()
print(end_time-st_time)