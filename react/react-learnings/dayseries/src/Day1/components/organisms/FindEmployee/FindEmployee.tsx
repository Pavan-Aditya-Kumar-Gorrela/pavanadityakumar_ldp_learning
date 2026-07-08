import Employees from '../../../data/employees';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import DepartmentFilter from '../../molecules/DepartmentFilter/DepartmentFilter';
import SortByExp from '../../molecules/SortBy/SortByExp';
import { useState } from 'react';

const FindEmployee = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [sortByExp, setSortByExp] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchTerm(e.target.value);
    }

    const handleClickSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const searchKey = e.target.value.toLowerCase();
        const findEmp = Employees.find(emp => emp.name.toLowerCase().includes(searchKey));
        return findEmp
    }

    const handleDepartmentState = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDepartment(e.target.value);
    }
    
    const handleSortByExp = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortByExp(e.target.value);
    }
    
    const sortEmployeesByExperience = (employees) => {
        return employees.sort((a, b) => {
            if (sortByExp === 'asc') {
                return a.experience - b.experience;
            } else if (sortByExp === 'desc') {
                return b.experience - a.experience;
            }
            return 0;
        });
    }

    return (
        <>
            <div>
                <SearchBar onChange={handleClickSearch} onClick={handleClickSearch}/>
                <DepartmentFilter onClick={handleDepartmentState} value1="Design" value2="Product" value3="Engineering"/>
                <SortByExp onChange={handleSortByExp}/>
            </div>
        </>
    )

    
}


export default FindEmployee;