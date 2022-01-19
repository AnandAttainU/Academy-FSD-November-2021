def isValid(st):
    stack = list()
    for ch in st:
        if ch == "(":
            stack.append(ch)
        elif ch == ")":
            if len(stack)==0:
                return "INVALID when pop failed"
            stack.pop()

    if len(stack) == 0:
        return "VALID"
    else:
        return "INVALID when stack not empty"

st = "(((())" # ((
print(isValid(st))
