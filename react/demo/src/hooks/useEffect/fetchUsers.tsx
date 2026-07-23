import { useState , useEffect } from "react";

export default function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
     alert("Users Loading....");
  },[])
  useEffect(()=>{
        setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data));
        }, 3000)
    },[]);

    return(
        <>
        {users.map((user:{id:number, name:string})=>(
            <div key={user.id}>
                <h2>{user.name}</h2>
            </div>
        ))}
        </>
    )
}