def isPowerOfTwo(n):
    if n == 1 or n == 0:
        return True
    elif n%2 == 0:
        return isPowerOfTwo(n/2)
    return False

print(isPowerOfTwo(16))