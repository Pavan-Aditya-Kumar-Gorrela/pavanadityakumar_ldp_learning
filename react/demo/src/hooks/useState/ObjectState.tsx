import {useState} from 'react'

export default function ObjectState() {
  const [user, setUser] = useState({name: '', age: 21});
  
  return(
    <>
        <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
    </>
  )
}