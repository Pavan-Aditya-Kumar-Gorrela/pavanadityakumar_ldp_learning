# class Batsman:
#     def play(self):
#         print("Scores runs")
#
#
# class Bowler:
#     def play(self):
#         print("Takes wickets")
#
#
# class AllRounder:
#     def play(self):
#         print("Bats and bowls")
#
# virat_18 = Batsman()
# bhuvi = Bowler()
# jaddu = AllRounder()
#
# virat_18.play()
# bhuvi.play()
# jaddu.play()
#
#
# # duck typing
# class Batsman:
#     def play(self):
#         print("Scores runs")
#
#
# class Bowler:
#     def play(self):
#         print("Takes wickets")
#
#
# class Coach:
#     def play(self):
#         print("Coaches players")
#
#
# def start_match(person):
#     person.play()
#
#
# start_match(Batsman())
# start_match(Bowler())
# start_match(Coach())
#
#
# # Operator Polymorphism
# class Runs:
#     def __init__(self, runs,out):
#         self.runs = runs
#         self.out = out
#     def __add__(self, other):
#         return Runs(self.runs + other.runs, self.out + other.out)
#     def __sub__(self, other):
#         tot_runs = self.runs + other.runs
#         tot_outs = self.out + other.out
#         avg = tot_runs / tot_outs if tot_outs > 0 else float(tot_runs)
#         res = Runs(tot_runs, tot_outs)
#         res.avg = avg
#         return res
#
# match1 = Runs(100,0)
# match2 = Runs(51,1)
# match3 = Runs(75,1)
#
# total_runs = match1 + match2 + match3
# average = match1 - match2 - match3
# print("Total Runs: ")
# print(total_runs.runs)
# print("Average: ")
# print(average.avg)
#
#














class CreditCardProcessor:

    def __init__(self, card_number: str):
        self.card_number = card_number[-4:]

    def execute_payment(self, amount: float) -> str:
        if amount <= 0:
            raise ValueError("Payment amount must be greater than 0.")
        return f"Charged ${amount:.2f} to Credit Card ending in {self.card_number}"


class CryptoProcessor:

    def __init__(self, wallet_address: str):
        self.wallet_address = wallet_address

    def execute_payment(self, amount: float) -> str:
        if amount <= 0:
            raise ValueError("Payment amount must be greater than 0.")
        return f"Transferred ${amount:.2f} equivalent in BTC to {self.wallet_address[:6]}..."


class PayPalProcessor:

    def __init__(self, email: str):
        self.email = email

    def execute_payment(self, amount: float) -> str:
        if amount <= 0:
            raise ValueError("Payment amount must be greater than 0.")
        return f"Debited ${amount:.2f} from PayPal Account ({self.email})"


def checkout(payment_gateways: list, order_total: float):
    print("--- Processing Bulk Billing Run ---")
    try:
        for gateway in payment_gateways:
            print(gateway.execute_payment(order_total))

    except ValueError as e:
        print(f"Payment Error: {e}")

    except AttributeError:
        print("Payment Error: Invalid payment processor.")

gateways = [
    CreditCardProcessor("4111222233334444"),
    CryptoProcessor("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"),
    PayPalProcessor("buyer@store.com"),
]

checkout(gateways, 99.99)