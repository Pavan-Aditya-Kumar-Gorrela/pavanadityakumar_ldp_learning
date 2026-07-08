import Button from "../../atoms/Button/Button";

interface DepartmentFilterProps{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    value1 : string;
    value2 : string;
    value3 : string;
}

const DepartmentFilter:React.FC<DepartmentFilterProps> = ({onClick,value1,value2,value3}) => {
    return (
        <>  
            
            <select>
                <option value="">Select Department</option>
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
            </select>
            <Button title="Filter" color="green" onClick={onClick}/>
        </>
    )

}

export default DepartmentFilter;