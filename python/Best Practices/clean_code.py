# ============================================================================
# 1. Meaningful Constants
# ============================================================================

PASS_MARK = 35
GST_RATE = 0.18


# ============================================================================
# 2. Single Responsibility Principle (SRP)
# One function should do one job.
# ============================================================================

def calculate_average(marks: list[int]) -> float:
    """Calculate the average marks."""
    return sum(marks) / len(marks)


def calculate_grade(average: float) -> str:
    """Return grade based on average."""
    if average >= 90:
        return "A"
    elif average >= 75:
        return "B"
    elif average >= PASS_MARK:
        return "C"
    return "Fail"


def display_result(name: str, average: float, grade: str) -> None:
    """Display student report."""
    print("\n----- Student Report -----")
    print(f"Name    : {name}")
    print(f"Average : {average:.2f}")
    print(f"Grade   : {grade}")


# ============================================================================
# 3. DRY (Don't Repeat Yourself)
# ============================================================================

def print_line() -> None:
    """Print a separator line."""
    print("-" * 30)


# ============================================================================
# 4. KISS (Keep It Simple, Stupid)
# ============================================================================

def is_eligible(age: int) -> bool:
    """Return True if age is eligible to vote."""
    return age >= 18


# ============================================================================
# 5. Early Return (Avoid Deep Nesting)
# ============================================================================

def withdraw(balance: float, amount: float) -> None:
    """Withdraw money if possible."""

    if amount <= 0:
        print("Amount should be greater than zero.")
        return

    if amount > balance:
        print("Insufficient balance.")
        return

    print(f"Withdraw Successful. Remaining Balance = {balance - amount}")


# ============================================================================
# 6. Avoid Magic Numbers
# ============================================================================

def calculate_gst(price: float) -> float:
    """Calculate GST."""
    return price * GST_RATE


# ============================================================================
# 7. Small Functions
# ============================================================================

def square(number: int) -> int:
    return number * number


def cube(number: int) -> int:
    return number * number * number


# ============================================================================
# 8. Exception Handling
# ============================================================================

def divide(a: float, b: float) -> float:
    """Safely divide two numbers."""

    if b == 0:
        raise ValueError("Cannot divide by zero.")

    return a / b


# ============================================================================
# 9. Descriptive Boolean Function
# ============================================================================

def is_even(number: int) -> bool:
    return number % 2 == 0


# ============================================================================
# 10. Avoid Duplicate Logic
# ============================================================================

def print_title(title: str) -> None:
    print_line()
    print(title)
    print_line()


# ============================================================================
# MAIN
# ============================================================================

def main() -> None:

    print_title("Clean Code Demo")

    student_name = "Aditya"
    student_marks = [80, 92, 88]

    average = calculate_average(student_marks)
    grade = calculate_grade(average)

    display_result(student_name, average, grade)

    print_line()

    print("Eligible to Vote :", is_eligible(21))
    print("GST on 1000      :", calculate_gst(1000))
    print("Square of 5      :", square(5))
    print("Cube of 5        :", cube(5))
    print("Is 10 Even?      :", is_even(10))

    print_line()

    withdraw(5000, 2000)

    print_line()

    try:
        print("Division :", divide(20, 5))
    except ValueError as error:
        print(error)


if __name__ == "__main__":
    main()