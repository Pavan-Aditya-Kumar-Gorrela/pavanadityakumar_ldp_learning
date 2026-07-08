import Select from "../../atoms/Select/Select";

interface DepartmentFilterProps {
    departments: string[];
    onDepartmentChange: (department: string) => void;
}

const DepartmentFilter: React.FC<DepartmentFilterProps> = ({ departments, onDepartmentChange }) => {
    const filterStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "10px"
    }

    return (
        <div style={filterStyle}>
            <label htmlFor="department-select">Filter by Department:</label>
            <Select options={departments} onChange={onDepartmentChange} />
        </div>
    )
}

export default DepartmentFilter;