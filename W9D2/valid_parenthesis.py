def isValid(st):
    ob = cb = 0
    for i in st:
        if i == "(":
            ob += 1
        elif i == ")":
            cb += 1
        if cb > ob:
            return "INVALID with cb>ob" # )(

    if ob == cb:
        return "VALID"
    else:
        return "INVALID with cb!ob"

st = "((())"
print(isValid(st))