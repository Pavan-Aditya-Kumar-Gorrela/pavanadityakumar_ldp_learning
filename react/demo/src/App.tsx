// import Index from './EventManagement/Fundamentals/index';
// import Index from './EventManagement/Bubbling/index';
// import Index from './EventManagement/Capturing/index';
// import Index from './EventManagement/preventDefault/index';
// import Index from './EventManagement/stopPropogation/index';
// import Index from './EventManagement/Delegation/index';
// import Index from './EventManagement/Priority/index';
// import Batch from './EventManagement/Priority/batch';
// import Index from './FormManagemnet/Fundamentals/index'
// import Index from './FormManagemnet/FormData/index'
// import Index from './FormManagemnet/Uncontrolled/index'
// import Index from './FormManagemnet/Controlled/index'
// import Index from './FormManagemnet/MultipleInputs/index'
// import Index from './FormManagemnet/Validation/index'
// import Index from './FormManagemnet/react-hook-form/index'
// import Index from './Router/BrowserRouter/index'
// import Index from './Router/OtherRouters/index'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/OtherRouters/index'
function App() {
  return (
    <>
      {/* <Index /> */}
       <RouterProvider router={router} />
      
    </>
  )
}

export default App;