import employee

print(id(employee))
print(type(employee))
print(employee.company)
print(employee.__dict__) #namespace

emp1 = employee.Employee(1 , "Aditya", 50000)
emp2 = employee.Employee(2,"Rahul",45000)

employee.add_employee(emp1.display())
employee.add_employee(emp2.display())

print(employee.total_employees())