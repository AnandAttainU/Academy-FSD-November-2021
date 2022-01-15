def solve(A): # [1,2,3,3,5]
    hash_table = dict() #{} O(1)
    for i in range(len(A)): # 0,1,2,3,4 O(n)
        hash_table[i+1] = 0 # {1:0, 2:0, 3:0, 4:0, 5:0}
    for i in range(len(A)): #O(n)
        hash_table[A[i]] += 1 # {1:1, 2:1, 3:2, 4:0, 5:1}
    for k,v in hash_table.items():# n * O(1) = O(n)
        if v == 2:
            rep = k
        if v == 0:
            mis = k
    return [rep, mis]

print(solve([1,2,3,3,4])) # O(3n) = O(n)