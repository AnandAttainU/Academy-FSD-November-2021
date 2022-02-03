import time

def fib(n):
    if n==0:
        return 0
    if n==1:
        return 1
    return fib(n-1) + fib(n-2)

def fib_dp(n, dp):
    if n==0:
        return 0
    if n==1:
        return 1
    
    if dp[n] != None:
        return dp[n]
    ans = fib_dp(n-1, dp) + fib_dp(n-2, dp)
    dp[n] = ans
    return ans

def fib_tabular(n):
    dp = [-1]*(n+1)
    dp[0] = 0
    dp[1] = 1

    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

st_time = time.time()
fib_tabular(185)
end_time = time.time()

print(end_time-st_time)