import Select from "../../atoms/Select/Select";

interface SortByExpProps {
    departments: string[];
    onExpChange: (department: string) => void;
}

const SortDropdown: React.FC<SortByExpProps> = ({ departments, onExpChange }) => {

    const sortStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "10px"
    }

    return (
        <div style={sortStyle}>
            <label htmlFor="sort-select">Sort by:</label>
            <Select options={departments} onChange={onExpChange} />
        </div>
    )
}

export default SortDropdown;