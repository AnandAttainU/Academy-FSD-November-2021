# program to convert decimal to binary

def dec_to_bin(dec):
    binary = ""
    while dec > 0:
        rem = dec % 2
        dec = dec // 2
        binary += str(rem)
    return binary[::-1]

print(dec_to_bin(13))