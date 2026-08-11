# ##############################################
# # Encapsuilation
# # access-modifiers:
# #                   public: var
# #                   protected: _var
# #                   private: __var
# ##############################################
#
#
#
# class Student:
#     def __init__(self,age):
#         self.__age = age #Private
#
#     def get_age(self):
#         return self.__age
#     def set_age(self,age):
#         if age >0:
#             self.__age = age
#         else:
#             print("Invlaid Age")
#
# s = Student(20)
# print(s.get_age())
# s.set_age(21)
# print(s.get_age())
#
#
# class Player:
#
#     def __init__(self, name, age, price):
#         self.name = name
#         self.__age = age
#         self.price = price
#
#     def get_player(self):
#         print(f"######################################\n"
#               f"######## Name : {self.name} ##########\n"
#               f"######## Age : {self.__age} ##########\n"
#               f"######## Price : {self.price} ########\n")
#
#     def set_player(self,name, age, price):
#         self.name = name
#         self.__age = age
#         self.price = price
#
# virat_18 = Player("Virat Kohli", 37,"20Cr")
# rohit_45 = Player("Rohit Sharma", 39,"18Cr")
# bumrah_96 = Player("Jasprit Bumrah", 32,"18Cr")
# add_player = Player("", 0, "")
#
# virat_18.get_player()
# rohit_45.get_player()
# bumrah_96.get_player()
#
# add_player.set_player("Hardik Pandya", 32, "18Cr")
# add_player.get_player()














import datetime
class SecureBankAccount:

    def __init__(self, acc_holder: str, initial_deposit: float):
        self.acc_holder = acc_holder
        self.__balance = 0.0
        self.__transactions = []
        if initial_deposit > 0:
            self.deposit(initial_deposit)

    def deposit(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Deposit amount must be strictly positive.")
        self.__balance += amount
        self.__log_transaction("DEPOSIT", amount)
        return self.__balance

    def withdraw(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Withdrawal amount must be strictly positive.")
        if amount > self.__balance:
            raise ValueError("Insufficient funds: Overdraft denied.")
        self.__balance -= amount
        self.__log_transaction("WITHDRAWAL", amount)
        return self.__balance

    def get_statement(self) -> list[str]:
        return self.__transactions

    def __log_transaction(self, tx_type: str, amount: float):
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        record = (
            f"[{timestamp}] {tx_type}: "
            f"${amount:.2f} | Balance: ${self.__balance:.2f}"
        )
        self.__transactions.append(record)

try:
    account = SecureBankAccount("Bill Gates", 10000000.0)
    account.deposit(50000.0)
    account.withdraw(1116.0)
    print("\nTransaction Statement")
    print("-" * 50)
    print("\n".join(account.get_statement()))

except ValueError as e:
    print(f"Transaction Failed: {e}")

