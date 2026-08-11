print("employee.txt.py is loading....")

company = "google"
employees = []

class Employee:

    def __init__(self, id , name , salary):
        self.id = id
        self.name = name
        self.salary = salary

    def display(self):
        print(f"{self.id} {self.name} {self.salary}")

def add_employee(emp):
    employees.append(emp)

def total_employees():
    return len(employees)

print("employee.txt.py is loaded!")