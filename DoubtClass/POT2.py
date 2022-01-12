def pot(N):
    num = N
    while(num > 1 and num%2==0):
        num = num //2
    if num == 1:
        return True
    return False

print(pot(10))
