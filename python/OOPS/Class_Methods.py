class Player:
    default_type =  "Aggressive"
    def __init__(self, name , nationality):
        self.name = name
        self.nationality = nationality

    @classmethod
    def foreign_player(cls, name):
        return cls(name, "Foreign Player")
    @classmethod
    def change_type(cls, native):
        cls.default_type = native

print(Player.default_type)
gayle_333 = Player.foreign_player("Chris Gayle")
print(gayle_333.name)
print(gayle_333.nationality)
Player.change_type("Brutal")
print(Player.default_type)