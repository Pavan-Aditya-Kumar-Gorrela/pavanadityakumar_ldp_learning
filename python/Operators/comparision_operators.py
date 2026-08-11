"""
==========================================================
        PYTHON COMPARISON OPERATORS
==========================================================

Comparison Operators:
1. ==   Equal To
2. !=   Not Equal To
3. >    Greater Than
4. <    Less Than
5. >=   Greater Than or Equal To
6. <=   Less Than or Equal To
7. is   Identity Operator
8. is not
9. in   Membership Operator
10. not in
==========================================================
"""

def print_title(title: str) -> None:
    print("\n" + "=" * 55)
    print(title.center(55))
    print("=" * 55)

# ==========================================================
# SAMPLE DATA
# ==========================================================

age = 21
voting_age = 18

marks = 82
pass_mark = 35

username = "aditya_63"
password= "P@van2004"

languages = ["Python", "Java", "Javascript"]

numbers = [10,20,30]
shallow_copy = numbers
deep_copy = numbers.copy()

# ==
print_title("1. EQUAL TO (==)")
print(age == voting_age)
print(username == "aditya_63")
print(marks == pass_mark)

# !=
print_title("2. NOT EQUAL TO (!=)")
print(age != voting_age)
print(1 != True)

# >
print_title("3. GREATER THAN (>)")
print(age > voting_age)
print(pass_mark > marks)

# <
print_title("4. LESS THAN (<)")
print(age < voting_age)
print(pass_mark < marks)

# >=
print_title("5. GREATER THAN OR EQUAL TO (>=)")
print(age >= 21)
print(pass_mark >= 35)

# <=
print_title("6. LESS THAN OR EQUAL TO (<=)")
print(age <= 30)
print(marks <= 100)

# is
print_title("7. IDENTITY (is)")
print(numbers is shallow_copy)
print(numbers is deep_copy)

# is not
print_title("8. IDENTITY (is not)")
print(numbers is not shallow_copy)
print(numbers is not deep_copy)

# in
print_title("9. MEMBERSHIP (in)")
print("Python" in languages)
print("C++" in languages)
print(20 in numbers)
print(100 in numbers)

# not in
print_title("10. MEMBERSHIP (not in)")
print("React" not in languages)
print("Python" not in languages)

# STRING COMPARISON
print_title("STRING COMPARISON")
print("Apple" == "Apple")
print("Apple" != "Banana")
print("cat" > "apple")
print("A" < "a")

# BOOLEAN COMPARISON
print_title("BOOLEAN COMPARISON")
print(True == 1)
print(False == 0)
print(True > False)

# NONE COMPARISON
print_title("NONE COMPARISON")
value = None
print(value is None)
print(value is not None)

# CHAIN COMPARISON
print_title("CHAIN COMPARISON")
number = 15
print(10 < number < 20)
print(1 <= number <= 100)

