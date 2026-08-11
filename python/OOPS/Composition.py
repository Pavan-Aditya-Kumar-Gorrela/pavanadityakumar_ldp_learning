# class Coach:
#     def train(self):
#         print("Training players")
#
#
# class Franchise:
#     def __init__(self):
#         self.coach = Coach()
#
#     def practice(self):
#         self.coach.train()
#
# team = Franchise()
# team.practice()














class Socket:

    def __init__(self, host: str, port: int):
        if not (1 <= port <= 65535):
            raise ValueError("Port must be between 1 and 65535.")
        self.host = host
        self.port = port
        self.connected = True
        print(f"Network Socket opened on {self.host}:{self.port}")

    def close(self):
        if not self.connected:
            raise RuntimeError("Socket is already closed.")
        self.connected = False
        print(f"Network Socket closed on {self.host}:{self.port}")


class ConnectionPool:

    def __init__(self, max_connections: int):
        if max_connections <= 0:
            raise ValueError("Maximum connections must be greater than 0.")
        self.max_connections = max_connections
        print(f"Pool allocated for {max_connections} active handles.")


class DatabaseConnection:

    def __init__(self, host: str, port: int):
        self.socket = Socket(host, port)
        self.pool = ConnectionPool(max_connections=5)

    def shutdown(self):
        try:
            self.socket.close()
            del self.pool
            print("Database Connection cleanly unwound.")

        except RuntimeError as e:
            print(f"Shutdown Error: {e}")


try:
    db = DatabaseConnection("127.0.0.1", 5432)
    db.shutdown()
    # db.shutdown()

except ValueError as e:
    print(f"Configuration Error: {e}")