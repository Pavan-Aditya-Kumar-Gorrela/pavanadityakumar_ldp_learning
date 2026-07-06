import ProjectCard from "../molecules/ProjectCard";
import Heading from "../atoms/Heading";

const ProjectSection = () =>{
     const projects = [
    {
      title: "Dashboard",
      owner: "Aditya",
      status: "Completed",
      description: "Admin dashboard"
    },
    {
      title: "Portfolio",
      owner: "Rahul",
      status: "In Progress",
      description: "Personal website"
    },
    {
      title: "Chat App",
      owner: "Sneha",
      status: "Planning",
      description: "Real-time messaging"
    }
  ];

  return (
    <>
    <div style={{
        color: "aliceblue"
    }}>
    <Heading title="Project Section" size={35} />
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          owner={project.owner}
          status={project.status as "Completed" | "In Progress" | "Not Started"}
          description={project.description}
        />
      ))}
    </div>
    </div>
    </>
  )
}

export default ProjectSection;