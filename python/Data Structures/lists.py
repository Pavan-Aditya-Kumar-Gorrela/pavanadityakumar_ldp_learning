
fruits = ['orange', 'apple','lichi','kiwi','guava','lichi','apple']
print(fruits.count('lichi'))
print(fruits.index('apple'))
print(fruits.index('apple',4))
fruits.reverse()
print(fruits)
fruits.append('grapes')
print(fruits)
fruits.sort()
print(fruits)
print(fruits.pop())

stack = [3,4,5]
stack.append(100)
stack.append(101)
print(stack)
print(stack.pop())
stack.pop()
print(stack)

from collections import deque
queue = deque(["Tobey Magquire","Andrew Garfield", "Tom Holland"])
queue.append("Bruce Banner")
queue.appendleft("Punisher")
print(queue)
queue.pop()
print(queue)
queue.popleft()
print(queue)

squares = []
for x in range(10):
    squares.append(x**2)
print(squares)

cubes = [x**3 for x in range(10)]
print(cubes)

matrix = [[1,2,3],
          [3,4,5],
          [1,3,5]]
print(matrix)
transposed = [[row[i] for row in matrix] for i in range(3)]
print(transposed)
del transposed[1][1]
print(transposed)