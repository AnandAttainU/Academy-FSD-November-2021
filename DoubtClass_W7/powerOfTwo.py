def PowerOfTwo(N):
    i = 0
    while(2**i < N):
        i += 1
    if 2**i == N:
        return True
    return False

print(PowerOfTwo(16))