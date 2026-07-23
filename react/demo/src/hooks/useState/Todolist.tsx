import { useState } from "react";

export default function BooleanState() {
  const [todoList, setTodoList] = useState<string[]>([]);

  return(
    <>
        <input type="text" onKeyDown={(e) => {
            if(e.key === "Enter") {
                setTodoList([...todoList, e.currentTarget.value])
                e.currentTarget.value = ""
            }
        }} />

        <ul>
            {todoList.map((todo, index) => (
                <>
                <li key={index}>{todo}</li>
                <button onClick={() => {
                    const newTodoList = [...todoList];
                    newTodoList.splice(index, 1);
                    setTodoList(newTodoList);
                }}>
                    Delete
                </button>
                </>
            ))}
        </ul>   
    </>
  )
}