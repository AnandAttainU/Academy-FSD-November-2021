class Payment:
    def __init__(self, amount) -> None:
        self.amount = amount

    def make_payment(self):
        print("initializing payment")
        self.pay()

    def pay(self):
        print("default payment method")

class COD(Payment):
    def __init__(self, amount) -> None:
        super().__init__(amount)
        self.amount = amount
    
    def pay(self):
        print("Paying via COD")
    
class UPI(Payment):
    def __init__(self, amount) -> None:
        super().__init__(amount)
        self.amount = amount

    def pay(self):
        print("Paying via UPI")

if __name__ == "__main__":
    # cod = COD(1000)
    # cod.make_payment()

    upi = UPI(2000)
    upi.make_payment()

    