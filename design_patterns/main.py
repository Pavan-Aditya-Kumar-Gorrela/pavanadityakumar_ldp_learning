from abc import ABC, abstractmethod

class DiscountStrategy(ABC):
    @abstractmethod
    def calculate(self, amount):
        pass

class NewUserDiscount(DiscountStrategy):
    def calculate(self, amount):
        return amount * 0.80

class PremiumDiscount(DiscountStrategy):
    def calculate(self, amount):
        return amount * 0.70

class FestivalDiscount(DiscountStrategy):
    def calculate(self, amount):
        return amount * 0.60

class BlackFridayDiscount(DiscountStrategy):
    def calculate(self, amount):
        return amount * 0.50



class Checkout:
    def __init__(self, discount_type):
        self.discountType = discount_type

    def calculate(self, amount):
        return self.discountType.calculate(amount)

checkout1 = Checkout(PremiumDiscount())
print(checkout1.calculate(1000))

checkout2 = Checkout(FestivalDiscount())
print(checkout2.calculate(1000))


"""
We can more usecases without modifying Checkout Class , for suppose let us add StudentDiscount:

    class StudentDiscount:
        def calculate(self,amount):
            return amount * 0.75
    
    stu = Checkout(StudentDiscount())
    print(stu.calculate(1000))
"""