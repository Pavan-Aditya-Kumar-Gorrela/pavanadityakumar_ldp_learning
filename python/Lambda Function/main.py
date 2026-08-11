products = [
    {"name": "Laptop", "price": 1200, "category": "electronics"},
    {"name": "Mouse", "price": 25, "category": "electronics"},
    {"name": "Shirt", "price": 45, "category": "apparel"},
    {"name": "Monitor", "price": 300, "category": "electronics"},
]

print("=" * 50)
print("1. FILTERING: Get electronics costing more than $50")
print("=" * 50)


expensive_tech = list(filter(lambda p: p["category"] == "electronics" and p["price"] > 50, products))
print(expensive_tech)


print("\n" + "=" * 50)
print("2. TRANSFORMING: Add 10% tax to all prices")
print("=" * 50)


taxed_products = list(map(lambda p: {**p, "price_with_tax": p["price"] * 1.10}, products))
for item in taxed_products:
    print(f"{item['name']}: ${item['price_with_tax']:.2f}")


print("\n" + "=" * 50)
print("3. SORTING: Sort products from cheapest to most expensive")
print("=" * 50)


cheapest_first = sorted(products, key=lambda p: p["price"])
for item in cheapest_first:
    print(f"{item['name']} - ${item['price']}")


print("\n" + "=" * 50)
print("4. RULE ENGINE: Calculate discount using a dictionary")
print("=" * 50)

discounts = {
    "BRONZE": lambda price: price * 0.95,  # 5% off
    "SILVER": lambda price: price * 0.90,  # 10% off
    "GOLD":   lambda price: price * 0.80,  # 20% off
}

cart_total = 100
user_tier = "GOLD"


final_price = discounts[user_tier](cart_total)
print(f"Original: ${cart_total} | {user_tier} Member Pays: ${final_price:.2f}")


print("\n" + "=" * 50)
print("5. FIXING THE LOOP TRAP: Creating functions inside a loop")
print("=" * 50)


multipliers = [lambda x, i=i : x*i for i in range(1, 4)]

print(f"Multiply 10 by 1: {multipliers[0](10)}")
print(f"Multiply 10 by 2: {multipliers[1](10)}")
print(f"Multiply 10 by 3: {multipliers[2](10)}")