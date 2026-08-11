x = 3   #int
X = 78
f = 3.14    #float
name = "Aditya" #string
boo = True #boolean
daysInYear = 365
daysInMonth = 30
numberFiles = 5

print(X)
print(x,"-", type(x))
print(f,"-", type(f))
print(name,"-", type(name))
print(boo , "-", type(boo))

print(x+ f)
print(x-f)
print(x*f)
print(f//x)
print(x**2)
print(str(x) + name)
print(name*x)
# print(name *f)
combination = name + " " + name
print(combination)
print(daysInYear, "days in a year ", daysInMonth, "days in month ", numberFiles, "files ")

        # 0000000000111
        # 0123456789012
string = "I am a string"
        # -------------
        # 1111000000000
        # 3210987654321

print(len(string))

#indexing
print(string[0])
print(string[2])
print(string[-1])

#slicing
print(string[0:9])
print(string[9:])
print(string[:9])
print(string[-4:])
print(string[0:12:2])   #string[start:stop:step]
print(string[::3])

# f-strings
a = 'My name is'
b = 'Aditya'
print(f"{a} {b}")

# replace()
s = "How are you Pavan?"
print(s)
s = s.replace("Pavan", "Aditya")
print(s)

s2 = "My name is India , I live in India!!!"
s2 = s2.replace("India", "England",1)
print(s2)


# join()
firstName = "Pavan Aditya Kumar"
lastName = "Gorrela"
fullName = " ".join((firstName,lastName))
print(fullName)

# find()
s3 = "Great Power comes with great responsibilities."
index = s3.find("Power")
print(index)

# split()
s4 = "Jhonny Jhonny Yes Papa"
words = s4.split()
print(words)

# random
import random
print(random.random())
print(random.randrange(0,10))
print(random.uniform(0,10))

# input()
# name = input("What is your name")
# print(name, "-", type(name))
#
# age = int(input("Age: "))
# print(age, "-", type(age))




