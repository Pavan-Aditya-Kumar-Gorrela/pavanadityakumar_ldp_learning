print("company package initiated")
PACKAGE_VERSION = "1.0"

from .employee import Employee
from .analytics import report

__all__ = ["Employee", "report"]