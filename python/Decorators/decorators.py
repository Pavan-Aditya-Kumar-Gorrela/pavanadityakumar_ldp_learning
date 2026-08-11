from functools import wraps

def changecase(func):
    def myinner():
        return func().upper()
    return myinner

@changecase
def greet():
    return "pavan"

@changecase
def welcome():
    return "welcome ADITYA!!!"

print(greet())
print(welcome())

# arguments

def padding(func):
    def inner(line):
        return f"{func(line):-^100}"
    return inner

@padding
def caption(text):
    return text

print(caption("great power comes with great responsibility"))


# *args , **kwargs
def join(func):
    def inner(*args, **kwargs):
        result = func(*args,**kwargs)
        return "->".join(result)
    return inner
@join
def address(name , addr):
    return [name , addr]

print(address("Aditya", "Rajamundry"))

# decorator with args
def strip(n):
    def strip(func):
        @wraps(func)
        def inner(word):
            if n == "l":
                res = func(word).lstrip()
            else:
                res = func(word).rstrip()
            return res
        return inner
    return strip

@strip("l")
def test1(word1):
    return word1

@strip("r")
def test2(word2):
    return word2


print(test1("      Pavan                 "))
print(test2("                 Aditya              "))

print(test2.__name__)

