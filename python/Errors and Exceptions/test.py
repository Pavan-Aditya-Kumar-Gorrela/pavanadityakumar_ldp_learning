# try:
#     salary = int(input())
# except ValueError:
#     print("Not a number")
#
# except OverflowError:
#     print("Huge number")
# except Exception:
#     print("Something else")

try:
    x = int(input())
except (ValueError, TypeError):
    print("Invalid Input")
else:
    print("Happy Coding")
finally:
    print("This is a final test")


def demo():
   try:
       return 10
   finally:
       print("Cleanup")

print(demo())

