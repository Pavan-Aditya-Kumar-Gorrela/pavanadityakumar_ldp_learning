import SearchBar from "../../molecules/SearchBar/SearchBar";
import DepartmentFilter from "../../molecules/DepartmentFilter/DepartmentFilter";
import SortDropdown from "../../molecules/SortDropdown/SortDropdown";

interface FilterSectionProps {
    departments: string[];
    sortOptions: string[];
    onSearchClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDepartmentChange: (department: string) => void;
    onSortChange: (sortOption: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ departments, sortOptions, onSearchClick, onDepartmentChange, onSortChange }) => {

    const filterSectionStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginBottom: "20px"
    }

    return (
        <div style={filterSectionStyle}>
            <SearchBar
                SearchPlaceholder="Search employees..."
                onChange={onSearchClick}
            />
            <DepartmentFilter
                departments={departments}
                onDepartmentChange={onDepartmentChange}
            />
            <SortDropdown
                departments={sortOptions}
                onExpChange={onSortChange}
            />
        </div>
    )
}

export default FilterSection;
