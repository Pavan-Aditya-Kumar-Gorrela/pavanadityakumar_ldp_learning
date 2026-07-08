import Card from "../../atoms/Card/Card";
import type { employee } from "../../../types/employee";
import Avatar from "../../atoms/Avatar/Avatar";


const EmployeeCard:React.FC<employee> = ({ id, name, role, department, avatarUrl }) => {

    return(
        <Card>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Avatar url={avatarUrl} />
                <div key={id}>
                    <h3>{name}</h3>
                    <p>{role}</p>
                    <p>{department}</p>
                </div>
            </div>
        </Card>
    )
}

export default EmployeeCard;