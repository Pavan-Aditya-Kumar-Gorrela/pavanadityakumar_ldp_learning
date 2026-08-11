"""
===========================================================
                Basic Functions
===========================================================
"""

def welcome():
    print("Hello World")
welcome()

# with parameters
def greet(name: str):
    print(f"Hi {name} , nice to meet you!!")
greet("Aditya")

# Positional Arguments
def student(name, age):
    print(name, age)

student("Aditya", 21)

# Keyword Arguments
student(age=21, name="Rahul")

# Default Arguments
def greet(name="Guest"):
    print(f"Welcome {name}")

greet()
greet("Aditya")

# Positional Only Arguments (/)
def divide(a, b, /):
    print(a / b)

divide(20, 5)
# divide(a=20,b=5)   # Error

# Keyword Only Arguments (*)
def create_account(*, username, password):
    print(username, password)

create_account(username="admin", password="1234")
# create_account("admin","1234")   # Error

# Variable Positional Arguments (*args)
def total(*numbers):
    print(sum(numbers))

total(10)
total(10, 20)
total(10, 20, 30)
total(10, 20, 30, 40)

# Variable Keyword Arguments (**kwargs)
def profile(**details):
    print(details)
profile(name="Aditya", age=21, city="Hyderabad")

# return values
def add(a:int , b: int) -> int:
    return a + b
print(add(100,9876))

# print vs return
def print_name(name:str):
    print(name)

def return_name(name:str)-> str:
    return name

print_name("Pavan")
value = return_name("Aditya")
print(value)

# return None
val = print_name("Kumar")
print(val)

# return multiple values
def student():
    return "Scott Boland", "Cricket Australia" , "Test Cricket"

name , board , format_ = student()
print(name, board,format_)

# Calling One Function From Another
def square(number):
    return number * number

def cube(number):
    return square(number) * number

print(cube(4))

# Function Alias
def hello():
    print("Hello World")

say_hello = hello
say_hello()
print(hello)
ref = hello
ref()

# Local Variables
def employee():
    employee_name = "John"
    employee_salary = 50000
    print(employee_name)
    print(employee_salary)
employee()

# Pure function
def multiply(a, b):
    return a * b

print(multiply(5, 6))
print(multiply(5, 6))

# Impure function
counter = 0
def increment():
    global counter
    counter += 1
    return counter

print(increment())
print(increment())
print(increment())

# Built-in Functions
numbers = [10, 30, 50, 20]
print(len(numbers))
print(max(numbers))
print(min(numbers))
print(sum(numbers))
print(sorted(numbers))

# Higher Order Executor
def process(function, value):
    print(function(value))

def square(number):
    return number * number

def cube(number):
    return number ** 3

process(square, 5)
process(cube, 5)

# lambda functions
names = [
    "Aditya",
    "Rahul",
    "Anil",
    "John"
]

print(
    list(
        filter(
            lambda name: name.startswith("A"),
            names
        )
    )
)

# higher order functions
from functools import reduce
numbers = [1, 2, 3, 4, 5]
names = ["Aditya", "Rahul", "John", "Joe","Trump"]
print(list(map(lambda square: square*square,numbers)))
print(list(filter(lambda x : x%2 == 0 , numbers)))
print(reduce(lambda x,y: x*y, numbers))
print(list(zip(names,numbers)))
for index, name in enumerate(names):
    print(index, name)

# recursion
def menu(choice):
    if choice == 0:
        return
    print("Current Choice :", choice)
    menu(choice - 1)
menu(5)

# nested functions
def operations():
    def add(a, b):
        return a + b
    def subtract(a, b):
        return a - b
    def multiply(a, b):
        return a * b
    print(add(10, 20))
    print(subtract(20, 10))
    print(multiply(10, 5))

operations()

# closures
def wallet(balance):
    def withdraw(amount):
        nonlocal balance
        if amount <= balance:
            balance -= amount
        return balance
    return withdraw
money = wallet(5000)
print(money(1000))
print(money(2000))
print(money(3000))

# decorators
from functools import wraps

def logger(function):

    @wraps(function)
    def wrapper(*args, **kwargs):
        print(f"Calling {function.__name__}")
        return function(*args, **kwargs)

    return wrapper
@logger
def add(a, b):
    return a + b

print(add(10, 20))\

# generators
def get_squares_gen(n):
    for i in range(n):
        yield i ** 2

my_gen = get_squares_gen(1000000)

print(next(my_gen))  # Output: 0
print(next(my_gen))  # Output: 1
print(next(my_gen))  # Output: 4

# methods
text = "python programming"

print(text.upper())
print(text.lower())
print(text.title())
print(text.capitalize())
print(text.swapcase())

numbers = [30, 10, 50]

numbers.append(100)
numbers.extend([200, 300])
numbers.insert(1, 20)
print(numbers)

student = {
    "name": "Aditya",
    "age": 21
}

print(student.keys())
print(student.values())
print(student.items())

from datetime import datetime
today = datetime.now()

print(today.date())
print(today.time())
print(today.year)
print(today.month)
print(today.day)