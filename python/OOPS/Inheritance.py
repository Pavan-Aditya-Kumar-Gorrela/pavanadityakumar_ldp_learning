# class Person:
#     def __init__(self, name):
#         self.name = name
#
#     def introduce(self):
#         print("I am", self.name)
#
#
# class Player(Person):
#     def play(self):
#         print(self.name, "is playing.")
#
# p = Player("Chiku")
# p.introduce()
# p.play()
#
# # multiple inheritance
# class Batsman:
#     def bat(self):
#         print("Excellent batting")
#
#
# class Bowler:
#     def bowl(self):
#         print("Excellent bowling")
#
#
# class AllRounder(Batsman, Bowler):
#     def play(self):
#         print("Can do both")
#
#
# player = AllRounder()
#
# player.bat()
# player.bowl()
# player.play()
#
#
# # multilevel inheritance
# class Person:
#     def introduce(self):
#         print("I am a person")
#
#
# class Player(Person):
#     def play(self):
#         print("Playing cricket")
#
#
# class Captain(Player):
#     def lead_team(self):
#         print("Leading the team")
#
#
# captain = Captain()
#
# captain.introduce()
# captain.play()
# captain.lead_team()
#
#
# # hierarchical inheritance
#
# class Person:
#     def introduce(self):
#         print("I am a person")
#
#
# class Player(Person):
#     def play(self):
#         print("Playing cricket")
#
#
# class Coach(Person):
#     def train(self):
#         print("Training players")
#
#
# player = Player()
# coach = Coach()
#
# player.introduce()
# player.play()
#
# coach.introduce()
# coach.train()
#
#
# # hybrid inheritance
#
# class Person:
#     def introduce(self):
#         print("I am a person")
#
#
# class Player(Person):
#     def play(self):
#         print("Playing cricket")
#
#
# class Coach(Person):
#     def train(self):
#         print("Training players")
#
#
# class MentorPlayer(Player, Coach):
#     def guide(self):
#         print("Guiding young players")
#
#
# mentor = MentorPlayer()
#
# mentor.introduce()
# mentor.play()
# mentor.train()
# mentor.guide()














class BaseNotificationService:

    def __init__(self, sender_id: str):
        self.sender_id = sender_id

    def log_dispatch(self, recipient: str):
        print(f"[AUDIT] Notification sent by {self.sender_id} to {recipient}")

    def send(self, recipient: str, message: str):
        raise NotImplementedError("Subclasses must implement 'send'.")


class EmailNotificationService(BaseNotificationService):

    def __init__(self, sender_id: str, smtp_server: str):
        super().__init__(sender_id)
        self.smtp_server = smtp_server

    def send(self, recipient: str, message: str):
        if not recipient:
            raise ValueError("Recipient email cannot be empty.")
        if not message:
            raise ValueError("Message cannot be empty.")
        print(
            f"Connecting to {self.smtp_server}...\n"
            f"Email sent to {recipient}: '{message}'"
        )
        self.log_dispatch(recipient)


class SMSNotificationService(BaseNotificationService):

    def __init__(self, sender_id: str, twilio_sid: str):
        super().__init__(sender_id)
        self.twilio_sid = twilio_sid

    def send(self, recipient: str, message: str):
        if not recipient:
            raise ValueError("Recipient phone number cannot be empty.")
        if not message:
            raise ValueError("Message cannot be empty.")
        print(
            f"Twilio Gateway ({self.twilio_sid}): "
            f"SMS routed to {recipient} -> {message}"
        )
        self.log_dispatch(recipient)


try:
    email_svc = EmailNotificationService(
        "noreply@company.com",
        "smtp.mail.com"
    )
    email_svc.send("client@example.com", "Your order has shipped!")

    sms_svc = SMSNotificationService(
        "+91 6304228639",
        "+1 8897765025"
    )
    sms_svc.send("+1 8897765025", "Call me when you landed in India")

except ValueError as e:
    print(f"Notification Error: {e}")