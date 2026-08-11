from models import Product
inventory = {}

def add_product(product: Product):
    inventory[product.pid] = product
    print(product.name, "added")

def display_inventory():
    print("\nInventory")
    for product in inventory.values():
        print(product)