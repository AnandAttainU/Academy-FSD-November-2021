# Approach 1
n = int(input())
st = str(n)
st = st[::-1] # reverse string
n = int(st)
print(n)


# Approach - 2

# n = int(input())
# rev = 0

# while(n>0):
#     rev = rev*10 + n%10
#     n = n//10

# print(rev)