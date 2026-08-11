from exceptions import *
from logger import log_error

class EmployeeProcessor:

    def __init__(self, filename):
        self.filename = filename

    def process(self):
        try:
            with open(self.filename) as file:
                for line in file:
                    try:
                        self.process_record(line.strip())
                    except Exception as e:
                        log_error(e)
        except FileNotFoundError:
            print("Employee file Not found")
        except PermissionError:
            print("Permission Denied")
        except Exception as e:
            print("Unexpected Error")
            log_error(e)
        finally:
            print("All tests are completed")

    def process_record(self, record):
        data = record.split(",")
        if len(data) != 3:
            raise InvalidRecord("Record shouls conatin exactly 3 fields")
        emp_id , name , salary = data

        if not emp_id.isdigit():
            raise InvalidEmployeeID(emp_id)

        salary = float(salary)

        if salary < 0:
            raise InvalidSalary(salary)

        print(f"{name} -> Net Salary : {salary + 5000}")
