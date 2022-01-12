M = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [10,11,12]
    ]
r = len(M)
c = len(M[0])


for i in range(c):
    j = c - i - 1
    print(M[i][j])