import EmployeeTemplate from "../../templates/EmployeeTemplate/EmployeeTemplate";
import {useState} from "react";
import employees from "../../../data/employees";

const EmployeePage: React.FC = () => {
    const departments = ["--Select Department--", "Engineering", "Product", "Design", "Data Science"];
    const sortOptions = ["Name", "Role", "Department"];
    const [selectedDepartment, setSelectedDepartment] = useState<string>("");
    const [selectedSortOption, setSelectedSortOption] = useState<string>("");
    const [searchKey, setSearchKey] = useState<string>("");

    const handleDepartmentChange = (department: string) => {
        setSelectedDepartment(department);
    }
   
    const handleSortChange = (sortOption: string) => {
        setSelectedSortOption(sortOption);
    }

    const handleSearchClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchKey((e.target as HTMLInputElement).value);
    }

    const filteredEmployees = [...employees].filter(
        (employee) =>{
            if(!searchKey) return true;
            const key = searchKey.toLowerCase();
            return employee.name.toLowerCase().includes(key);

        }).filter((employee) => {
            if(!selectedDepartment) return true;
            if(selectedDepartment === "--Select Department--") return true;
            return employee.department === selectedDepartment;
        }).sort((a, b) => {
            switch(selectedSortOption) {
                case "Name":
                    return a.name.localeCompare(b.name);
                case "Role":
                    return a.role.localeCompare(b.role);
                case "Department":
                    return a.department.localeCompare(b.department);
                default:
                    return 0;
            }
        })
    

    return (
        <div style={{ padding: "20px", backgroundColor: "skyblue" }}>
        <EmployeeTemplate
            employees = {filteredEmployees}
            departments={departments}
            sortOptions={sortOptions} 
            onSearchClick={handleSearchClick}
            onDepartmentChange={handleDepartmentChange}
            onSortChange={handleSortChange}
        />
        </div>
    )
}

export default EmployeePage;