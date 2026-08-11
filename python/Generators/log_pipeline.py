import time
import random

"""INFINITE GENERATOR"""
def simulate_log_stream():
    levels = ["INFO", "WARNING", "ERROR", "CRITICAL"]
    services = ["auth-service", "payment-service", "user-service"]
    messages = [
        "User login successful",
        "Database timeout occurred",
        "Unauthorized token attempt",
        "Payment gateway unresponsive",
        "Session created",
    ]

    counter = 1
    while True:
        level = random.choice(levels)
        service = random.choice(services)
        message = random.choice(messages)
        yield f"LOG-{counter} | {level} | {service} | {message}"
        counter += 1

"""CHAINING & PROCESSING"""
def parse_logs(log_stream):
    for raw_line in log_stream:
        parts = [p.strip() for p in raw_line.split("|")]
        yield {
            "id": parts[0],
            "level": parts[1],
            "service": parts[2],
            "message": parts[3]
        }

def filter_by_severity(parsed_stream, target_level):
    for log in parsed_stream:
        if log["level"] == target_level:
            yield log


"""send() & close()"""
def dynamic_threshold():
    threshold = 2
    critical_count = 0

    print(f"\n[Alert Engine Initialized] Default threshold: {threshold} events")

    try:
        while True:
            new_threshold = yield critical_count >= threshold
            if new_threshold is not None:
                print(f"\n[Alert Engine Config Updated] Threshold changed from {threshold} -> {new_threshold}")
                threshold = new_threshold
            critical_count += 1
    except GeneratorExit:
        print("[Alert Engine Shutdown] Cleanup complete.\n")


"""Delegation using `yield from`"""
def archive_old_logs():
    """Sub-generator 1: Archives mock old logs."""
    yield "ARCHIVE_2025_01.log: 1,420 entries archived"
    yield "ARCHIVE_2025_02.log: 2,100 entries archived"


def archive_current_logs():
    """Sub-generator 2: Archives mock current logs."""
    yield "ARCHIVE_2026_01.log: 4,890 entries archived"


def master_archive_reporter():
    """Delegates iteration to sub-generators using `yield from`."""
    yield "=== STARTING ARCHIVE AUDIT ==="
    yield from archive_old_logs()       # Delegates work
    yield from archive_current_logs()   # Delegates work
    yield "=== ARCHIVE AUDIT COMPLETE ==="

"""PIPELINE EXECUTION"""
if __name__ == "__main__":
    print("=" * 60)
    print("STAGE 1 & 2: GENERATOR PIPELINE & LAZY EVALUATION")
    print("=" * 60)

    raw_stream = simulate_log_stream()

    parsed_logs = parse_logs(raw_stream)

    error_logs = filter_by_severity(parsed_logs, target_level="ERROR")

    formatted_errors = (f"ALERT [{log['service']}]: {log['message']}" for log in error_logs)

    for _ in range(3):
        print(next(formatted_errors))
        time.sleep(0.3)

    print("\n" + "=" * 60)
    print("STAGE 3: BI-DIRECTIONAL COMMUNICATION (.send() & .close())")
    print("=" * 60)

    alert_system = dynamic_threshold()
    next(alert_system)

    print(f"Is Alert Triggered? -> {alert_system.send(None)}")
    print(f"Is Alert Triggered? -> {alert_system.send(None)}")

    alert_system.send(5)
    print(f"Is Alert Triggered after resetting threshold? -> {alert_system.send(None)}")

    alert_system.close()

    print("=" * 60)
    print("STAGE 4: DELEGATION WITH `yield from`")
    print("=" * 60)

    for report_line in master_archive_reporter():
        print(report_line)
