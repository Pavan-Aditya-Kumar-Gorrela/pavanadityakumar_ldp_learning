// export default function Index() {
//     const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         console.log(e);
//         console.log(e.type);
//         console.log(e.target);
//         console.log(e.currentTarget);
//         console.log(e.clientX);
//         console.log(e.clientY);
//         console.log(e.timeStamp);
//         console.log(e.ctrlKey);
//         console.log(e.shiftKey);
//     };

//     return (
//         <div>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

import {useState} from 'react';

export default function Index() {
    const [info , setInfo ] = useState({
        type: '',
        target: '',
        currentTarget: '',
        clientX: 0,
        clientY: 0,
        timeStamp: 0,
        ctrlKey: false,
        shiftKey: false,
    });

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setInfo({
            type: e.type,
            target: e.target.toString(),
            currentTarget: e.currentTarget.toString(),
            clientX: e.clientX,
            clientY: e.clientY,
            timeStamp: e.timeStamp,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
           
        });
        console.log(e);
        console.log(e.nativeEvent)
        
    }

    return (
        <div
            onClick={handleClick}
            style={{
                border: "2px solid black",
                padding: "40px",
                cursor: "pointer",
                userSelect: "none",
            }}
        >
            <h2>Click Anywhere Inside</h2>

            <p>Type: {info.type}</p>
            <p>X: {info.clientX}</p>
            <p>Y: {info.clientY}</p>
            <p>Ctrl: {String(info.ctrlKey)}</p>
            <p>Shift: {String(info.shiftKey)}</p>
        </div>
    )
}