def NumberOfWays(row, col, n, m, mat):
    if row >= n:
        return 0
    if col >= m:
        return 0
    if mat[row][col] == 1:
        return 0
    if (row == n-1) and (col == m-1):
        return 1
    result = NumberOfWays(row, col+1, n, m, mat) + NumberOfWays(row+1, col, n, m, mat)
    return result

mat = [
       [0, 0, 1, 1],
       [1, 0, 0, 0],
       [1, 1, 1, 0] 
        ]
n = len(mat) # no of rows
m = len(mat[0]) # no of columns
print(NumberOfWays(0, 0, n, m, mat))