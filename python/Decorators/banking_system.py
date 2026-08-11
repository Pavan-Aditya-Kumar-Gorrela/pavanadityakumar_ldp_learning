import random
import time
from functools import wraps


users = {
    "Aditya": {
        "logged_in": True,
        "role": "customer",
        "balance": 50000
    },
    "Manager": {
        "logged_in": True,
        "role": "admin",
        "balance": 0
    }
}

def login_required(func):
    @wraps(func)
    def wrapper(username, *args, **kwargs):
        if not users[username]["logged_in"]:
            print("login required")
            return
        return func(username, *args, **kwargs)
    return  wrapper

def admin_required(func):
    @wraps(func)
    def wrapper(username, *args, **kwargs):
        if not users[username]["role"] != "admin":
            print("Access denied")
            return
        return func(username, *args, **kwargs)
    return  wrapper

def logging(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("-" * 50)
        print("Transaction Started")
        result = func(*args, **kwargs)
        print("Transaction completed")
        print("-" * 50)

        return result

    return  wrapper

def execution_timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        end = time.perf_counter()
        print(f"Execution Time : {end - start:.5f} sec")
        return result
    return  wrapper

def retry(max_attempts):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except ConnectionError as e:
                    print(f"Attempt {attempt} Failed")
                    if attempt == max_attempts:
                        raise
        return wrapper
    return decorator


def cache_result(func):
    cache = {}
    @wraps(func)
    def wrapper(username):
        if username in cache:
            print("Returning Cached Balance")
            return cache[username]
        result = func(username)
        cache[username] = result
        return result
    return wrapper


def validate_amount(func):
    @wraps(func)
    def wrapper(username, amount):
        if amount <= 0:
            print("Invalid Amount")
            return
        return func(username, amount)
    return wrapper


@login_required
@validate_amount
@logging
@execution_timer
def deposit(username, amount):
    users[username]["balance"] = amount
    print(f"Deposited ${amount}")

@login_required
@validate_amount
@logging
@execution_timer
def withdraw(username, amount):
    if users[username]["balance"] < amount:
        print("Insufficient Funds")
        return
    users[username]["balance"] -= amount
    print(f"Withdrawn ${amount}")


@admin_required
@logging
def create_account(username, new_user):
    users[new_user] = {
        "logged_in": False,
        "role": "customer",
        "balance": 0
    }
    print(f"{new_user} Created")

@login_required
@cache_result
def get_balance(username):
    print("Fetching from Database...")
    time.sleep(2)
    return users[username]["balance"]



deposit("Aditya",5000)
withdraw("Aditya",3000)
print(get_balance("Aditya"))
print(get_balance("Aditya"))
create_account("Manager","Rahul")



