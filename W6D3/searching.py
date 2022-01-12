List = ["apple", "banana", "grapes","mango"]
Target = "mango"

def search(List, Target):
    for i in range(len(List)):
        if(List[i]==Target):
            return True
    return False

def search2(List, Target):
    return Target in List

print(search2(List, Target))