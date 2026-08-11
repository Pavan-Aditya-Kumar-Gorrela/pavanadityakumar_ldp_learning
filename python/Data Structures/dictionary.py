car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(car)
print(car["brand"])
print(len(car))
print(type(car))

person = dict(name = "John", age = 36, country = "Norway")
print(person)
print(person.keys())
print(person.values())
print(person.items())

#update
person["name"] = "Aditya"
person.update({"country": "India"})
print(person)

#add
person["isActive"] = False
person.update({"tone": "fluent"})
print(person)

#remove
person.pop("tone")
print(person)
print(person.popitem())
del person["age"]
print(person)

example = {
  (1,2,3) : "myTuple",
  [1,2,3] : "myList",
  {1,2,3} : "mySet"
}