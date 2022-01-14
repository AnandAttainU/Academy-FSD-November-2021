def solve(st):
    hash_table = dict() #set()
    n = len(st)

    max_len = 0

    start = 0
    end = 0

    while end < n:
        if st[end] not in hash_table:
            hash_table[st[end]] = end
            cur_len = end-start + 1
            max_len = max(max_len, cur_len)
            end += 1
        else:
            while st[end] in hash_table:
                hash_table.pop(st[start])
                start += 1
            hash_table[st[end]] = end
            end+=1

    return max_len

l = solve("ADOBECODEBANC")
print(l)