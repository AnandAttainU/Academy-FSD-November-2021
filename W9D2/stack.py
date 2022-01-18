stack = list()

def push(x):
    global stack
    stack.append(x)

def pop():
    global stack
    if isEmpty():
        return "No elements in the Stack from POP"
    return stack.pop()

def peek():
    global stack
    if isEmpty():
        return "No elements in the Stack from Peek"
    return stack[-1]

def isEmpty():
    global stack
    if len(stack)==0:
        return True
    else:
        return False

push(5)
push(77)
print(pop())
print(peek())
print(isEmpty())
pop()
print(isEmpty())
print(pop())
print(peek())

