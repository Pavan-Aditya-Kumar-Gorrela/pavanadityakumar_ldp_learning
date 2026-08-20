"""
================================================================================
SINGLETON DESIGN PATTERN
================================================================================
    1. __new__ based singleton (classic, not thread-safe)
    2. __new__ + __init__ guard (avoids re-initialization on repeat calls)
    3. classmethod factory (get_instance())
    4. Decorator-based singleton
    5. Metaclass-based singleton
    6. Thread-safe singleton (double-checked locking)
    7. Borg / Monostate pattern (shared state instead of shared identity)
================================================================================
"""

import threading
import time
from functools import wraps


# ==============================================================================
# 1. CLASSIC __new__ BASED SINGLETON  (simplest form, NOT thread-safe)
# ==============================================================================
class SingletonNew:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, value=None):
        self.value = value
        print(f"[SingletonNew] Initialized  with value={value!r}")

# ==============================================================================
# 2. __new__ + __init__ GUARD  (prevents re-initialization)
# ==============================================================================
class SingletonNewInit:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self, value=None):
        if self._initialized:
            return
        self.value = value
        self._initialized = True
        print(f"[SingletonNewInit] Initialized ONCE with value={value!r}")


# ==============================================================================
# 3. CLASSMETHOD FACTORY  (get_instance() style )
# ==============================================================================
class SingletonClassMethod:

    _instance = None

    def __init__(self, value=None):
        if SingletonClassMethod._instance is not None:
            raise RuntimeError(
                "Use SingletonClassMethod.get_instance() instead of direct "
                "instantiation."
            )
        self.value = value

    @classmethod
    def get_instance(cls, value=None):
        if cls._instance is None:
            cls._instance = cls(value)
        return cls._instance


# ==============================================================================
# 4. DECORATOR-BASED SINGLETON
# ==============================================================================
def singleton(cls):
    instances = {}

    @wraps(cls)
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    return get_instance


@singleton
class SingletonDecorator:
    def __init__(self, value=None):
        self.value = value
        print(f"[SingletonDecorator] Initialized ONCE with value={value!r}")


# ==============================================================================
# 5. METACLASS-BASED SINGLETON
# ==============================================================================
class SingletonMeta(type):

    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]


class SingletonMetaExample(metaclass=SingletonMeta):
    def __init__(self, value=None):
        self.value = value
        print(f"[SingletonMetaExample] Initialized ONCE with value={value!r}")


# ==============================================================================
# 6. THREAD-SAFE SINGLETON  (double-checked locking, __new__ based)
# ==============================================================================
class SingletonThreadSafe:
    _instance = None
    _lock = threading.Lock()  # one lock, shared by all threads

    def __new__(cls, *args, **kwargs):
        with cls._lock:  # only one thread inside at a time
            if cls._instance is None:
                cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, value=None):
        with self._lock:
            if not hasattr(self, "_initialized"):
                time.sleep(0.05)
                self.value = value
                self._initialized = True
                print(f"Initialized once with value={value!r} "
                      f"(thread={threading.current_thread().name})")

# ==============================================================================
# 7. BORG / MONOSTATE PATTERN
# ==============================================================================
class Borg:
    _shared_state = {}

    def __new__(cls, *args, **kwargs):
        obj = super().__new__(cls)
        obj.__dict__ = cls._shared_state
        return obj

    def __init__(self, value=None):
        if value is not None:
            self.value = value

"""
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Main Method
++++++++++++++++++++++++++++++++++++++++++++++++++++++++
"""
if __name__ == "__main__":
    print("=" * 70)
    print("1/2. __new__ based singletons")
    print("=" * 70)
    b1 = SingletonNew(value="first")
    b2 = SingletonNew(value= "second")
    print("Same instance?", b1 is b2, )
    a1 = SingletonNewInit(value="first")
    a2 = SingletonNewInit(value="second")  # ignored — already initialized
    print("Same instance?", a1 is a2, "| value:", a1.value)

    print("\n" + "=" * 70)
    print("3. classmethod factory singleton")
    print("=" * 70)
    b1 = SingletonClassMethod.get_instance(value="config-A")
    b2 = SingletonClassMethod.get_instance(value="config-B")  # ignored
    print("Same instance?", b1 is b2, "| value:", b1.value)

    print("\n" + "=" * 70)
    print("4. decorator-based singleton")
    print("=" * 70)
    c1 = SingletonDecorator(value="alpha")
    c2 = SingletonDecorator(value="beta")  # ignored
    print("Same instance?", c1 is c2, "| value:", c1.value)

    print("\n" + "=" * 70)
    print("5. metaclass-based singleton")
    print("=" * 70)
    d1 = SingletonMetaExample(value="x")
    d2 = SingletonMetaExample(value="y")  # ignored
    print("Same instance?", d1 is d2, "| value:", d1.value)

    print("\n" + "=" * 70)
    print("6. THREAD-SAFETY STRESS TEST (10 threads creating at once)")
    print("=" * 70)

    def worker():
        print(SingletonThreadSafe(value=threading.current_thread().name).value)

    threads = [threading.Thread(target=worker) for _ in range(5)]
    [t.start() for t in threads]
    [t.join() for t in threads]

    print("\n" + "=" * 70)
    print("7. Borg / Monostate pattern")
    print("=" * 70)
    e1 = Borg(value="shared-1")
    e2 = Borg()
    print("Same OBJECT identity? ", e1 is e2, "(expected False)")
    print("Same STATE (value)?   ", e1.value == e2.value, "(expected True)")
    e2.value = "changed-via-e2"
    print("e1.value after e2 changes it:", e1.value)