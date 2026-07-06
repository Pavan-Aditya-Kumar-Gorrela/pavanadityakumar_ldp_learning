import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import Badge from "../atoms/Badge";


interface ProjectCardProps {
    title : string;
    owner : string;
    status : "Completed" | "In Progress" | "Not Started";
    description : string;
}

const ProjectCard = ({title, owner, status, description}: ProjectCardProps) => {
    return (
        <div style={{  border: "1px solid black",borderColor:"white", width: "220px", background: "#01042e", padding: "10px", margin: "10px"}}>
            <Title text={title} />
            <Paragraph text={`Owner: ${owner}`} />
            <Badge text={status} color={status === "Completed" ? "green" : status === "In Progress" ? "orange" : "gray"} />
            <Paragraph text={description} />
        </div>
    )
}

export default ProjectCard;