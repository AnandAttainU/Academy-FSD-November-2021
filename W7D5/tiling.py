def tiling(n):
    if n == 1:
        return 1
    if n == 0:
        return 1
    ans  = tiling(n-1) + tiling(n-2)
    return ans

print(tiling(5))