import Navbar from "../molecules/Navbar";
import Heading from "../atoms/Heading";

const HeroSection = () => {
    return (
        <>
            <div style={{color: "aliceblue"}}>
                <Navbar />
                <Heading title="Welcome to the Developer Dashboard!!!" size={40} />
               
            </div>
        </>
    )
}

export default HeroSection;