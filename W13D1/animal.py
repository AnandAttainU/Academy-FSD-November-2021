class Animal:
    def __init__(self):
        print("Animal constructor is called")
    
    def walk(self):
        print("Animal is walking")

class Dog(Animal):
    def __init__(self):
        super().__init__()
        print("Dog constructor is called")

    def bark(self):
        print("Dog is barking")

    def walk(self): # Method Overriding
        super().walk()
        print("Dog is walking")

if __name__=="__main__":
    # d = Dog()
    # d.walk()

    a = Animal()
    a.walk()