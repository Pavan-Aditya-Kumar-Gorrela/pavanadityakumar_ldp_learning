class Customer:
    def __init__(self, cid, cname):
        self.cid = cid
        self.cname = cname

    def __str__(self) -> str:
        return f"{self.cid} - {self.cname}"