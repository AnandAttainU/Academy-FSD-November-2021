n = int(input())
arr = list(map(int, input().split()))

hash_table = dict()

for i in range(n):
    if arr[i] in hash_table:
        hash_table[arr[i]] += 1
    else:
        hash_table[arr[i]] = 1

flag = False
for key, value in hash_table.items():
    if key == value:
        flag = True

if flag:
    print("YES")
else:
    print("NO")