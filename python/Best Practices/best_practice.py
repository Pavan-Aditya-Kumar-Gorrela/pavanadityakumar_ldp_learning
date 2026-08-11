
# ==========================
# CONSTANTS
# ==========================

PI = 3.14159


# ==========================
# FUNCTIONS
# ==========================

def add(number1: float, number2: float) -> float:
    """Returns the sum of two numbers."""
    return number1 + number2


def subtract(number1: float, number2: float) -> float:
    """Returns the difference of two numbers."""
    return number1 - number2


def multiply(number1: float, number2: float) -> float:
    """Returns the product of two numbers."""
    return number1 * number2


def divide(number1: float, number2: float) -> float:
    """
    Returns the division result.

    Raises:
        ValueError if number2 is zero.
    """
    if number2 == 0:
        raise ValueError("Cannot divide by zero.")

    return number1 / number2


def calculate_circle_area(radius: float) -> float:
    """Returns the area of a circle."""
    return PI * radius * radius


# ==========================
# MAIN FUNCTION
# ==========================

def main() -> None:

    first_number = 20
    second_number = 10

    print("Addition       :", add(first_number, second_number))
    print("Subtraction    :", subtract(first_number, second_number))
    print("Multiplication :", multiply(first_number, second_number))
    print("Division       :", divide(first_number, second_number))

    radius = 5

    print("Circle Area    :", calculate_circle_area(radius))


# ==========================
# PROGRAM STARTS HERE
# ==========================

if __name__ == "__main__":
    main()