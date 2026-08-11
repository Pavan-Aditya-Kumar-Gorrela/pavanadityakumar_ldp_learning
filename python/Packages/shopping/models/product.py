class Product:
    def __init__(self, pid, name, price, quantity):
        self.pid = pid
        self.name = name
        self.price = price
        self.quantity = quantity

    def __str__(self) -> str:
        return f"{self.pid} | {self.name} | ${self.price} | Stock: {self.quantity}"