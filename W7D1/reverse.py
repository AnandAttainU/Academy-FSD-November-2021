def rev(str):
    if str == "":
        return ""

    return str[-1] + rev(str[:-1])

print(rev("abcde"))