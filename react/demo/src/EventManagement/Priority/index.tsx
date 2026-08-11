import { useState } from "react";

export default function Index() {
    const [pos, setPos] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div
            style={{ height: "100vh" }}
            onClick={(e) => {
                console.log("Click Event");
                console.log(e.clientX, e.clientY);
            }}
            onMouseMove={(e) =>
                setPos({
                    x: e.clientX,
                    y: e.clientY,
                })
            }
        >
            X : {pos.x}

            <br />

            Y : {pos.y}
        </div>
    );
}