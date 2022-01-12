mainnumber = input("Enter a number: ")

def facto(eachdigit):
    print("eachdigit: "+str(eachdigit))
    sol = 1
    for num in range(0, eachdigit):
        sol = sol*num
        print("num: "+str(num))
    print("sol: " +str(sol))
    return sol

for extractdigit in mainnumber:
    looptimes = len(mainnumber)
    extractdigit = int(extractdigit)
    
def sumFinal(sol):
    final = 0
    for finalanswer in range(looptimes):
        final += sol
    return final
print(facto(extractdigit))
