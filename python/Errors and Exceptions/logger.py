from datetime import datetime

def log_error(error):
    print(f"[{datetime.now()}] {type(error).__name__} : {error}")