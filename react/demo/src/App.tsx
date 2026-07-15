import User from "./Props/types/Props"
import Greet from "./Props/DefaultValues/Props"
function App() {

  return (
    <>
      <User name="Alice" age={30} isAdmin={true} skills={["JavaScript", "TypeScript"]} onClick={() => console.log("Button clicked!")} />
      <Greet  />

    </>
    
  )
}


export default App
