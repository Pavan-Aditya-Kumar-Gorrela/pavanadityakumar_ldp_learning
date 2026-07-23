import { createContext, useContext, useState } from "react";

const Lang = createContext("English");

export default function Index() {
    const [language, setLanguage] = useState("English");

    return (
        <Lang.Provider value={language}>
            <h1>Current Language: {language}</h1>
            <button onClick={() => setLanguage("English")}>English</button>
            <button onClick={() => setLanguage("Spanish")}>Spanish</button>
            <Child />
        </Lang.Provider>
    );
}

function Child() {
    const language = useContext(Lang);
    return (
        <>
         <h1>
            {language === "English" ? "Hello!" : "¡Hola!"}
         </h1>
        </>
    )
}
