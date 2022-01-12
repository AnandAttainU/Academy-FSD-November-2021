count = 0
def hello():
    global count
    if count == 3:
        return
    print("Hello!")
    count += 1
    hello()
    
    
    
hello()
