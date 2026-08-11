from models import Product
from models import Customer
from services import (
    add_product,
    display_inventory,
    place_order,
    show_orders,
)

# Create Products
p1 = Product(101, "Laptop", 65000, 10)
p2 = Product(102, "Keyboard", 2500, 25)
p3 = Product(103, "Mouse", 1200, 30)

# Add to inventory
add_product(p1)
add_product(p2)
add_product(p3)

display_inventory()

# Customer
customer = Customer(1, "Aditya")

# Orders
place_order(customer, 101, 1)
place_order(customer, 103, 2)

show_orders()

display_inventory()