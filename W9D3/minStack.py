class MinStack:

    def __init__(self):
        self.normalStack = list()
        self.minStack = list()

    def push(self, val: int) -> None:
        self.normalStack.append(val)
        
        if (len(self.minStack) == 0):
            self.minStack.append(val)
        else:
            min_ele = min(self.minStack[-1], val)
            self.minStack.append(min_ele)
        
    def pop(self) -> None:
        self.normalStack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.normalStack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]