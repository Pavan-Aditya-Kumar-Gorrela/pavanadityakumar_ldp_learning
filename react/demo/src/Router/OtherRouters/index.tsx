import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

// //Hash Roouter
// import { HashRouter as Router, Routes, Route } from "react-router-dom";

// export default function Index() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/profile/:id" element={<Profile />} />
//             </Routes>
//         </Router>
//     )
// }
    

// //Memory Roouter
// import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

// export default function Index() {
//     return (
//         <Router initialEntries={["/", "/dashboard", "/profile/1"]} initialIndex={0}>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/profile/:id" element={<Profile />} />
//             </Routes>
//         </Router>
//     )
// }

//Data Router
import { createBrowserRouter } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

export async function profileLoader({ params }: LoaderFunctionArgs) {
    console.log("Loader Executed");

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params}`
    );

    if (!response.ok) {
        throw new Response("User Not Found", {
            status: 404,
        });
    }

    return response.json();
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/profile/:id",
        element: <Profile />,
        loader: profileLoader,
    },
]);