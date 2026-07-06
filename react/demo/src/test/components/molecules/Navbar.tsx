import Avatar from "../atoms/Avatar";
import Heading from "../atoms/Heading";
import hero from "../../assets/hero.png"

const Navbar = () => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", backgroundColor: "#1a181f", color:"aliceblue" }}>
                <Avatar imageUrl={hero} altText="Hero Image" />
                <Heading title="Developer Dashboard" size={24} />
            </div>
        </>
    )
}

export default Navbar;