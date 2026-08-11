"""
==============================================================
        PYTHON CONTROL STATEMENTS & LOOPS
==============================================================

1. if
2. if-else
3. if-elif-else
4. Nested if
5. Ternary Operator
6. match-case
7. for loop
8. while loop
9. range()
10. break
11. continue
12. pass
13. Nested loops
14. for-else
15. while-else
16. Infinite loop
17. Practical Examples
==============================================================
"""

def title(text):
    print("\n" + "=" * 60)
    print(text.center(60))
    print("=" * 60)

# ==========================================================
# SAMPLE DATA
# ==========================================================

age = 21
marks = 82
password = "P@van2004"
numbers = [10, 20, 30, 40, 50]

# 1. if
title("1. IF")
if age >= 18:
    print("Eligible to Vote")

# 2. if else
title("2. IF ELSE")
if marks >= 35:
    print("Pass")
else:
    print("Fail")

# 3. if elif else
title("3. IF ELIF ELSE")
if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 35:
    print("Grade C")
else:
    print("Fail")

# 4. Nested if
title("4. NESTED IF")
if age >= 18:
    if password == "P@van2004":
        print("Access Granted")
    else:
        print("Wrong Password")

# 5. Ternary Operator
title("5. TERNARY OPERATOR")
result = "Pass" if marks >= 35 else "Fail"
print(result)

# 6. Match Case
title("6. MATCH CASE")
day = 3
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case _:
        print("Invalid Day")

# 7. for Loop
title("7. FOR LOOP")
for number in numbers:
    print(number)

# 8. range()
title("8. RANGE")
print("range(5)")
for i in range(5):
    print(i)

print("\nrange(2,7)")
for i in range(2, 7):
    print(i)

print("\nrange(10,0,-2)")
for i in range(10, 0, -2):
    print(i)

# 9. while Loop
title("9. WHILE LOOP")
count = 1
while count <= 5:
    print(count)
    count += 1

# 10. break
title("10. BREAK")
for number in numbers:
    if number == 30:
        break
    print(number)

# 11. continue
title("11. CONTINUE")
for number in numbers:
    if number == 30:
        continue
    print(number)

# 12. pass
title("12. PASS")
for number in numbers:
    if number == 30:
        pass
    print(number)

# 13. Nested Loops
title("13. NESTED LOOPS")
for row in range(3):
    for column in range(3):
        print(f"({row},{column})", end=" ")
    print()

# 14. for else
title("14. FOR ELSE")
search = 20
for number in numbers:
    if number == search:
        print("Found")
        break
else:
    print("Not Found")

# 15. while else
title("15. WHILE ELSE")
count = 1
while count <= 3:
    print(count)
    count += 1
else:
    print("Loop Completed")

# 16. Infinite Loop
title("16. INFINITE LOOP")
counter = 1
while True:
    print(counter)
    counter += 1
    if counter == 4:
        break