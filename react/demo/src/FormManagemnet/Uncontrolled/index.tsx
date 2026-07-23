import { useRef } from "react";
export default function Index() {
    console.log("Rendering Uncontrolled Form");
    const ref = useRef<HTMLInputElement>(null);
    const showValue = () => {
        alert(ref.current?.value);
    }
    return(
        <>
            <input type = "text" placeholder = "Enter your name" ref={ref} />
            <button type="button" onClick={showValue}>
                Show Value
            </button>
        </>
    )
}