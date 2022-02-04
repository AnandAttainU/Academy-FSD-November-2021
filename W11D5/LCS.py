dp = [[None for _ in range(1005)] for _ in range(1005)]
def LCS(str1, str2, id1, id2):
    if id1>=len(str1) or id2>=len(str2):
        return 0
    if dp[id1][id2]!=None:
        return dp[id1][id2]
    ans = 0
    if str1[id1]==str2[id2]:
        ans = 1+LCS(str1, str2, id1+1, id2+1)
    else:
        ans = max(LCS(str1,str2,id1+1,id2),LCS(str1,str2,id1,id2+1))
    dp[id1][id2] = ans
    return ans

res = LCS("ABC","DEF",0,0)#3
print(res)