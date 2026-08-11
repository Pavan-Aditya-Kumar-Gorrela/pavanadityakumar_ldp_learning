mySet = {1,2,3}
print(mySet)

duplicate = {1,1,2,3,4,4,56,66,3,4}
print(duplicate)

original = {1, True, 0 , False}
print(original)
print(len(original))
print(type(original))

thisSet = set(("google",1, True  ))
print(thisSet)
print(type(thisSet ))

#access set items
print("google" in thisSet)
print("zemoso" in thisSet)

#add set items
thisSet.add("zemoso")
print(thisSet)
subSet = {False , "bill gates"}
myList = ["I AM A LIST"]
thisSet.update((subSet))
thisSet.update((myList))
print(thisSet)

#remove
thisSet.remove("I AM A LIST")
print(thisSet)
thisSet.discard("korea")
print(thisSet.pop())
thisSet.clear()
print(thisSet)
# del thisSet

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
sett = set1.union(set2)
print(sett)
set1.update(set2)
print(set1)

set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}
set5 = set1 | set2 | set3 |set4
print(set5)
y = (4, 9, 8)
z = set5.union(y)
print(z)

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1.intersection(set2) # use & op for same
print(set3)

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set1.intersection_update(set2)
print(set1)

set1 = {"apple", 1,  "banana", 0, "cherry"}
set2 = {False, "google", 1, "apple", 2, True}
set3 = set1.intersection(set2)
print(set3)

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"} # use - for same
set3 = set1.difference(set2)
print(set3)

#frozen set
x = frozenset({"apple", "banana", "cherry"})
print(x)
print(type(x))

