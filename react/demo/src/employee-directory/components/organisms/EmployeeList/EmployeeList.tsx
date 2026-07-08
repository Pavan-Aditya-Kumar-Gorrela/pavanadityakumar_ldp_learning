import employees from "../../../data/employees";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

interface EmployeeListProps {
    employees: typeof employees;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {

    const EmployeeListStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",   
        gap: "20px",
        padding: "20px"
    }
    return (
        <div style = {EmployeeListStyle}>
            {employees.map(employee => (
                <EmployeeCard key={employee.id} {...employee} />
            ))}
        </div>
    )
}

export default EmployeeList;