###############################################################
"""
1. __init__
2. __del__
3. __str__
4. __repr__
5. __len__
6. __getitem__
7. __add__
8. __sub__
9. __eq__
10. __lt__
"""
###############################################################


"""
1. __init__
2. __del__
"""
class Match:
    def __init__(self, stadium):
        self.stadium = stadium
        print(f"IND vs AUS final match commenced in {stadium}")

    def __del__(self):
        print(f"IND vs AUS final match in {self.stadium} is postponed due to rain...")

commentator = Match(" Wankede Stadium, Mumbai")
del commentator

"""
3. __str__
4. __repr__
"""
class Player:

    def __init__(self, name , batting_style):
        self.name = name
        self.batting_style = batting_style

    def __str__(self):
        return f"Player: {self.name} (*{self.batting_style})"
    def __repr__(self):
        return f"Player(Name = '{self.name}', Batting Style = '{self.batting_style}')"

sharma = Player("Abhishek Sharma", "Left Handed")
gill = Player("Shubman Gill", "Right Handed")

print(str(sharma))
print(str(gill))
print(repr(sharma))
print(repr(gill))

"""
5. __len__
6. __getitem__
"""
class Team:
    def __init__(self, members):
        self.members = members

    def __len__(self):
        return len(self.members) + 7

    def __getitem__(self, item):
        return f"Team Captain: {self.members[item]}"

india = Team(["Virat Kohli", "Rohit Sharma", "Shreyas Iyer", "KL Rahul"])
print(len(india))
print(india[1])

"""
7. __add__
8. __sub__
"""
class Runs:
    def __init__(self, runs,out):
        self.runs = runs
        self.out = out
    def __add__(self, other):
        return Runs(self.runs + other.runs, self.out + other.out)
    def __sub__(self, other):
        tot_runs = self.runs + other.runs
        tot_outs = self.out + other.out
        avg = tot_runs / tot_outs if tot_outs > 0 else float(tot_runs)
        res = Runs(tot_runs, tot_outs)
        res.avg = avg
        return res

match1 = Runs(100,0)
match2 = Runs(51,1)
match3 = Runs(75,1)

total_runs = match1 + match2 + match3
average = match1 - match2 - match3
print("Total Runs: ")
print(total_runs.runs)
print("Average: ")
print(average.avg)


"""
9. __eq__
10. __lt__
"""

class Bowler:
    def __init__(self,wickets):
        self.wickets = wickets

    def __eq__(self, other):
        return self.wickets == other.wickets
    def __lt__(self, other):
        return self.wickets < other.wickets

bhuvi = Bowler(196)
bumrah = Bowler(191)

print(bhuvi == bumrah)
print(bumrah < bhuvi)