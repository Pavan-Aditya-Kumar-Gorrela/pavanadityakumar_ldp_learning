import { useState,useTransition } from "react";

export default function UseTransition() {
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const list = Array.from({ length: 30000 }, (_, i) => `Item ${i}`);

  const filtered = list.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
            
            setText(e.target.value)
            startTransition(() => {
                setSearchTerm(e.target.value)
            });
        }}
      />
        {isPending && <p>Loading...</p>}
      {!isPending && filtered.map(item => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}