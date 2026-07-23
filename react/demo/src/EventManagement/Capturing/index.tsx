// export default function Index() {
//     return (
//         <div
//             onClickCapture={() =>
//                 console.log("GrandParent Capture")
//             }
//             onClick={() =>
//                 console.log("GrandParent Bubble")
//             }
//             style={{
//                 padding: 40,
//                 border: "2px solid black",
//                 background: "#ffdede",
//             }}
//         >
//             <div
//                 onClickCapture={() =>
//                     console.log("Parent Capture")
//                 }
//                 onClick={() =>
//                     console.log("Parent Bubble")
//                 }
//                 style={{
//                     padding: 40,
//                     border: "2px solid black",
//                     background: "#d0ffd0",
//                 }}
//             >
//                 <button
//                     onClickCapture={() =>
//                         console.log("Button Capture")
//                     }
//                     onClick={() =>
//                         console.log("Button Bubble")
//                     }
//                 >
//                     Click
//                 </button>
//             </div>
//         </div>
//     );
// }


import { useState } from "react";

export default function Index() {

    const [logs, setLogs] = useState<string[]>([]);

    const log = (message: string) => {
        setLogs((prev) => [...prev, message]);
    };

    return (
        <>
            <div
                onClickCapture={() => log("🟥 Grand Parent Capture")}
                onClick={() => log("🟩 Grand Parent Bubble")}
                style={{
                    padding: 30,
                    background: "#ffb3b3",
                }}
            >
                <div
                    onClickCapture={() => log("🟨 Parent Capture")}
                    onClick={(e) => { 
                        log("🟦 Parent Bubble");
                        console.log(e.target);
                        console.log(e.currentTarget);
                    }}
                    style={{
                        padding: 30,
                        background: "#b3ffb3",
                    }}
                >
                    <button
                        onClickCapture={() =>
                            log("🟪 Button Capture")
                        }
                        onClick={() =>
                            log("⬜ Button Bubble")
                        }
                    >
                        Click
                    </button>
                </div>
            </div>

            <hr />

            {logs.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </>
    );
}