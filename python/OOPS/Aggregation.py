# class Player:
#
#     def __init__(self, name):
#         self.name = name
#
#
# class Team:
#
#     def __init__(self, players):
#         self.players = players
#
#
#
# p1 = Player("Virat")
# team = Team([p1])
# del team
# print(p1.name)














class Developer:

    def __init__(self, name: str, skill: str):
        self.name = name
        self.skill = skill

    def __repr__(self):
        return f"Developer({self.name}, {self.skill})"

class Project:

    def __init__(self, project_name: str, developers: list[Developer] = None):
        if not project_name:
            raise ValueError("Project name cannot be empty.")
        self.project_name = project_name
        self.developers = developers if developers else []

    def assign_developer(self, dev: Developer):
        if not isinstance(dev, Developer):
            raise TypeError("Expected a Developer object.")

        self.developers.append(dev)

try:
    dev_a = Developer("Alex", "Python")
    dev_b = Developer("Rohan", "Kubernetes")
    ecommerce_project = Project("E-Commerce Portal", [dev_a, dev_b])
    del ecommerce_project
    print("Developer post-project lifespan check:")
    print(dev_a)

except (ValueError, TypeError) as e:
    print(f"Error: {e}")