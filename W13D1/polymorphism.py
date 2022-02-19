class Shape:
    def __init__(self, name):
        self.name = name

class Square(Shape):
    def __init__(self, name, side):
        super().__init__(name)
        self.side = side
    
    def area(self):
        return self.side * self.side

class Rectangle(Shape):
    def __init__(self, name, x, y):
        super().__init__(name)
        self.x = x
        self.y = y

    def area(self):
        return self.x * self.y

if __name__ == "__main__":
    square = Square("Square", 5)
    print(f"The area of {square.name} is {square.area()}")

    rectangle = Rectangle("Rectangle", 5, 4)
    print(f"The area of {rectangle.name} is {rectangle.area()}")