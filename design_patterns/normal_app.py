class Checkout:
    def calculate_price(self, amount, discount_type):
        if discount_type == "new_user":
            return amount * 0.80
        elif discount_type == "premium":
            return amount * 0.70
        elif discount_type == "festival":
            return amount * 0.60
        elif discount_type == "black_friday":
            return amount * 0.50
        else:
            return amount

checkout = Checkout()
print(checkout.calculate_price(1000, "premium"))
print(checkout.calculate_price(1000, "festival"))


"""
Consider more usecases such that it is very complex to implement every logic i.e:
   +-- New User logic
   +-- Premium logic
   +-- Festival logic
   +-- Black Friday logic
   +-- Christmas logic
   +-- Diwali logic
   +-- Student logic
   +-- Employee logic
   +-- VIP logic
   +-- Birthday logic
   +-- Coupon logic
   +-- Referral logic
   +-- ...
   
   add student:=
   elif discount_type == "student":
        return amount * 0.75
        
    which modifies class Checkout() everytime we add new usecase....
   
   Problem: 1.Managing checkout     2.Implementing every discount algorithm working
"""
