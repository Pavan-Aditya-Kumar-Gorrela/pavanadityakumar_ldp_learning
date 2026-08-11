class Order:
    def __init__(self, customer, product, quantity, total):
        self.customer = customer
        self.product = product
        self.quantity = quantity
        self.total = total

    def __str__(self) -> str:
        return (
            f"{self.customer.cname} purchased "
            f"{self.quantity} x {self.product.name}"
            f" = ${self.total}"
        )