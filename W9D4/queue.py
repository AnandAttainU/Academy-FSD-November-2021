# Design a queue which supports push, pop, isEmpty()
queue = list()

def enqueu(x):
    global queue
    queue.append(x)

def dequeue():
    global queue
    if isEmpty():
        print("No element in the queue")
    return queue.pop(0)

def isEmpty():
    global queue
    # return len(queue) == 0
    if len(queue) == 0:
        return True
    else:
        return False

enqueu(5)
enqueu(77)
enqueu(12)
print(dequeue())
print(isEmpty())
print(queue)
print(dequeue())
print(dequeue())
print(isEmpty())

