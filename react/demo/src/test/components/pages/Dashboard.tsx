import HeroSection from "../organisms/HeroSection";
import ProjectSection from "../organisms/ProjectSection";

const Dashboard = () => {
    return(
        <>
            <div  style={{ background: "#0c0a0f"}}>
                <HeroSection />
                <ProjectSection />
            </div>
        </>
    )
}

export default Dashboard;