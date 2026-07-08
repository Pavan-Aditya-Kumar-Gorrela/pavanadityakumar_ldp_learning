import FilterSection from "../../organisms/FilterSection/FilterSection";
import EmployeeList from "../../organisms/EmployeeList/EmployeeList";
import type { employee } from "../../../types/employee";


interface EmployeeTemplateProps{
    employees: employee[];
    departments: string[];
    sortOptions: string[];
    onSearchClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDepartmentChange: (department: string) => void;
    onSortChange: (sortOption: string) => void;
    }


const EmployeeTemplate: React.FC<EmployeeTemplateProps> = ({ employees, departments, sortOptions,onSearchClick, onDepartmentChange, onSortChange }) => {
    
    return(
        <div>
            <FilterSection 
                departments={departments}
                sortOptions={sortOptions}
                onSearchClick={onSearchClick}
                onDepartmentChange={onDepartmentChange}
                onSortChange={onSortChange}
            />
            <EmployeeList 
                employees={employees}
            />
        </div>
    )
}

export default EmployeeTemplate;