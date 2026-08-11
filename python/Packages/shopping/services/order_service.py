from models import Order
from .inventory import inventory
from .billing import calculate_bill

orders = []

def place_order(customer, product_id, quantity):
    product = inventory.get(product_id)
    if product is None:
        print("Product not found")
        return
    if quantity > product.quantity:
        print("Insufficient Stock")
        return

    total = calculate_bill(product, quantity)
    product.quantity -= quantity
    order = Order(customer, product, quantity, total)
    orders.append(order)
    print("Order Successful")

def show_orders():
    print("\nOrders")
    for order in orders:
        print(order)