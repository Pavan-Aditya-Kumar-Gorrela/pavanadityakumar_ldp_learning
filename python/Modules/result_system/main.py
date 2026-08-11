from student import Student
from report import generate
from statistics import highest,lowest
from utils import separator
from config import COLLEGE_NAME

print(COLLEGE_NAME)
separator()
s = Student(1, "Aditya")
marks = [90,82,95,78,88]
generate(s, marks)
separator()
print(highest(marks))
print(lowest(marks))