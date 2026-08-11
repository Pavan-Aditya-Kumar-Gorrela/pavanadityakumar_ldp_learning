from grade import calculate_grade
from marks import total,average

def generate(student, marks):
    avg = average(marks)
    print(student.name)
    print(total(marks))
    print(avg)
    print(calculate_grade(avg))