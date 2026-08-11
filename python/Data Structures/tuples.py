myTuple = ("apple", "guava", "kiwi")
print(myTuple)
#indexing && slicing
print(myTuple[0])
print(myTuple[1])
print(myTuple[-1])
print(myTuple[:2])

thisTuple = ("Bill Gates", "Satya Nadella", "Sundar Pichai", "Satya Nadella")
print(thisTuple)
print(len(thisTuple))

tuple1 = ("apple",)
print(type(tuple1))
tuple2 = ("apple")
print(type(tuple2))

tuple3 = tuple(("Pavan",22, True))
print(tuple3)
print(type(tuple3))

#update the tuple
myList = list(tuple3)
myList[0] = "Aditya"
myList.append("Rajamundry")
myList.remove(1)
tuple3 = tuple(myList)
print(tuple3)
print(type(tuple3))

#unpack tuples
companies = ("Sundar Pichai", "Satya Nadella", "Sasan Goodarzi", "Satish Mahendra")
(google, microsoft , *intuit ) = companies
print(google)
print(microsoft)
print(intuit)

print(companies.count("Sundar Pichai"))
print(companies.index("Satya Nadella"))




tuple1 = (1,2,3,["Pavan"])
tuple1[3].append("Aditya")
print(tuple1)



