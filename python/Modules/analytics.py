print("analytics.py is loading...")

import employee

print(id(employee))
def highest_paid():
    if not employee.employees:
        return None

    return max(employee.employees, key = lambda e:e.salary)

print("analytics.py is loaded!")