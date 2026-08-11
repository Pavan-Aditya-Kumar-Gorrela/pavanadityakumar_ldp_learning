class Player:

    def __init__(self, name, age, price):
        self.name = name
        self.age = age
        self.price =price

    @staticmethod
    def is_Eligible(age):
        return age >= 18

print(Player.is_Eligible(32))

class Auction:
    @staticmethod
    def minBid():
        print("Minimum Bid Price is 1 Cr")

Auction.minBid()