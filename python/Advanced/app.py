"""
1. High-Performance Containers (`collections`: deque, defaultdict, Counter, ChainMap, namedtuple)
2. Low-Level Memory & Binary Processing (`bytearray`, `memoryview`, `array.array`)
3. Standard Library Algorithmic Structures (`heapq`, `bisect`, `MappingProxyType`)
4. Specialized Numeric Objects (`Decimal`, `Fraction`, `frozenset`)
"""

import sys
from collections import deque, defaultdict, Counter, ChainMap, namedtuple
import array
from decimal import Decimal
from fractions import Fraction
from types import MappingProxyType
import heapq
import bisect


# ===================================================================
# MODULE 1: HIGH-PERFORMANCE CONTAINERS (`collections`)
# ===================================================================
def demonstrate_collections_module():
    print("=" * 65)
    print("MODULE 1: HIGH-PERFORMANCE CONTAINERS (collections)")
    print("=" * 65)

    # A. collections.deque (Fast O(1) double-ended queue & bounded sliding window)
    sliding_window = deque(maxlen=3)
    for val in [10, 20, 30, 40]:
        sliding_window.append(val)
    sliding_window.appendleft(5)
    sliding_window.rotate(1)
    print(f"1. Deque Window (Rotated)    : {list(sliding_window)}")

    # B. collections.defaultdict (Auto-initializing grouping)
    grouped_list = defaultdict(list)
    for category, item in [("tech", "laptop"), ("tech", "mouse"), ("book", "python_101")]:
        grouped_list[category].append(item)
    print(f"2. Defaultdict Grouping    : {dict(grouped_list)}")

    # C. collections.Counter (Multiset frequency counter & math)
    c1 = Counter("abracadabra")
    c2 = Counter("alacazam")
    print(f"3. Counter Most Common      : {c1.most_common(2)}")
    print(f"   Counter Multiset Union   : {dict(c1 | c2)}")

    # D. collections.ChainMap (Scoped dict searching without merging)
    cli_args = {"theme": "dark"}
    config_file = {"theme": "light", "port": 8080}
    env_defaults = {"port": 80, "host": "localhost"}
    scoped_config = ChainMap(cli_args, config_file, env_defaults)
    print(f"4. ChainMap Scoped 'theme'  : {scoped_config['theme']}")
    print(f"   ChainMap Scoped 'port'   : {scoped_config['port']}")

    # E. collections.namedtuple (Lightweight immutable record)
    Point2D = namedtuple("Point2D", ["x", "y"])
    p = Point2D(x=10, y=20)
    print(f"5. NamedTuple Attribute    : Point x={p.x}, y={p.y}")


# ===================================================================
# MODULE 2: LOW-LEVEL MEMORY & BINARY STRUCTURES
# ===================================================================
def demonstrate_low_level_memory():
    print("\n" + "=" * 65)
    print("MODULE 2: LOW-LEVEL MEMORY & BINARY STRUCTURES")
    print("=" * 65)

    # A. bytearray (Mutable sequence of bytes)
    buffer = bytearray(b"Hello World")
    buffer[0:5] = b"HYPER"
    print(f"1. Bytearray Mutation       : {buffer.decode()}")

    # B. memoryview (Zero-copy binary buffer slicing)
    data_buffer = bytearray(b"HEADER_DATA_FOOTER")
    mview = memoryview(data_buffer)
    payload_slice = mview[7:11]
    payload_slice[0:4] = b"INFO"
    print(f"2. Memoryview Zero-Copy Edit: {data_buffer.decode()}")

    # C. array.array (Contiguous C-style primitive arrays)
    # 'i' represents signed C-style integer
    int_array = array.array("i", [10, 20, 30, 40])
    int_array.append(50)
    print(f"3. Primitive C-Array Bytes  : Size={sys.getsizeof(int_array)} bytes | Values={int_array.tolist()}")


# ===================================================================
# MODULE 3: ALGORITHMIC STRUCTURES & READ-ONLY PROXIES
# ===================================================================
def demonstrate_algorithmic_structures():
    print("\n" + "=" * 65)
    print("MODULE 3: ALGORITHMIC STRUCTURES & READ-ONLY PROXIES")
    print("=" * 65)

    # A. heapq (Min-Heap / Priority Queue)
    priority_queue = []
    heapq.heappush(priority_queue, (3, "Low Priority Job"))
    heapq.heappush(priority_queue, (1, "Critical Security Alert"))
    heapq.heappush(priority_queue, (2, "Medium Priority Job"))

    top_task = heapq.heappop(priority_queue)
    print(f"1. Heapq Highest Priority   : {top_task}")

    # B. bisect (Binary Search & Sorted Insertion)
    sorted_stream = [10, 20, 40, 50]
    bisect.insort(sorted_stream, 30)  # O(log n) insertion in sorted order
    print(f"2. Bisect Sorted Insertion  : {sorted_stream}")

    # C. types.MappingProxyType (Immutable Read-Only Dict View)
    raw_dict = {"status": "ACTIVE", "role": "ADMIN"}
    read_only_proxy = MappingProxyType(raw_dict)
    print(f"3. Read-Only Dict View      : {read_only_proxy['status']}")
    try:
        read_only_proxy["status"] = "INACTIVE"
    except TypeError as e:
        print(f"   Protection Enforcement   : Caught {type(e).__name__} (Cannot mutate proxy)")


# ===================================================================
# MODULE 4: SPECIALIZED NUMERIC & SET OBJECTS
# ===================================================================
def demonstrate_specialized_numerics():
    print("\n" + "=" * 65)
    print("MODULE 4: SPECIALIZED NUMERIC & SET OBJECTS")
    print("=" * 65)

    # A. decimal.Decimal (Exact precision floating point arithmetic)
    float_sum = 0.1 + 0.2
    exact_decimal_sum = Decimal("0.1") + Decimal("0.2")
    print(f"1. Standard Float Precision : 0.1 + 0.2 = {float_sum}")
    print(f"   Decimal Exact Arithmetic : '0.1' + '0.2' = {exact_decimal_sum}")

    # B. fractions.Fraction (Exact rational numbers)
    f1 = Fraction(3, 4)
    f2 = Fraction(1, 2)
    print(f"2. Fraction Exact Math      : 3/4 + 1/2 = {f1 + f2}")

    # C. frozenset (Immutable, hashable set used as a dict key)
    admin_perms = frozenset(["READ", "WRITE", "DELETE"])
    guest_perms = frozenset(["READ"])

    role_dictionary = {
        admin_perms: "Administrator Role",
        guest_perms: "Guest Visitor Role"
    }
    print(f"3. Frozenset as Dict Key    : {role_dictionary[admin_perms]}")


# ===================================================================
# MAIN PIPELINE EXECUTION
# ===================================================================
if __name__ == "__main__":
    demonstrate_collections_module()
    demonstrate_low_level_memory()
    demonstrate_algorithmic_structures()
    demonstrate_specialized_numerics()