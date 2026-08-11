# with open("employee.txt", "r") as file:
#     data = file.read()
# print(data)



# with open("employee.txt") as file:
#     records = file.readlines()
#     print(records)

bonus = 5000

with open("employee.txt") as f:
    for line in f:
        try:
            id , name , salary = line.strip().split(",")
            salary = float(salary)
            if salary < 0:
                raise ValueError("Negative Salary")
            print(name, salary + bonus)

        except Exception as e:
            print("Skipped: ", e)

with open("report.txt", "w") as file:
    file.write("Employee Report\n")
    file.write("-----------------\n")

with open("report.txt","a") as report:
    report.write("Generated Successfully\n")

lines = [

"Aditya\n",

"Rahul\n",

"Sai\n"

]

with open("report.txt","w") as file:
    file.writelines(lines)


with open("employee.txt") as file:
    print(file.tell())
    file.read(10)
    print(file.tell())
    file.seek(5)
    print(file.tell())

with open("sample.txt","w") as file:
    file.write("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    file.truncate(10)

with open("employee.txt") as source:
    with open("backup.txt","w") as destination:
        destination.write(source.read())

with open("error.log","a") as log:
    log.write("Invalid Salary Found\n")