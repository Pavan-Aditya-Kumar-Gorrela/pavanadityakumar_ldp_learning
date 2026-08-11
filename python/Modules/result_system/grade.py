from config import PASS_MARK

def calculate_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 75:
        return "B"
    elif avg >= PASS_MARK:
        return "C"

    return "Fail"