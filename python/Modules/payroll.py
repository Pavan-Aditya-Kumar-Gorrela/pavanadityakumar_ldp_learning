print("payroll.py is loading...")

from employee import Employee

BONUS = 5000

def calculate_salary(emp):
    return emp.salary + BONUS

print("payroll.py is loaded")