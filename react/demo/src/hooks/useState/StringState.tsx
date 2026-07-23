import {useState} from 'react'

export default function StringState() {
  const [name, setName] = useState('')

  return(
    <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Hello {name}</h2>
    </>
  )

}