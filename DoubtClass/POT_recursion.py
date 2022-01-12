def POT(N):
    if N == 1:
        return True
    if (N%2==0):
        return POT(N/2)
    return False

print(POT(1024))