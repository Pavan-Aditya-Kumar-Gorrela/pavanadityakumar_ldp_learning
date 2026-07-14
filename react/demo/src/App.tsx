import Parent from "./ParentVsChildComponents/Rerendering/Parent";
// import Parent from "./ParentVsChildComponents/renderingOrder/Parent";
// import Parent from "./ClassVsFunctionalComponents/LifecycleComponents/class-function/Parent";
// import FunctionalParent from "./ClassVsFunctionalComponents/LifecycleComponents/class-function/FunctionalParent";
import UserPage from "./MUI/UserPage";
function App() {

  return (
    <>
      
      {/* <Parent props={undefined as never} /> */}
      {/* <FunctionalParent /> */}
      <Parent />
      <UserPage />
    </>
  )
}


export default App
