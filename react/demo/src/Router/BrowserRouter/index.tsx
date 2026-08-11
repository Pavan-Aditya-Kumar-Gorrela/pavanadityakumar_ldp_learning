import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Index() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders/:id" element={<Orders />} />
            </Routes>
        </Router>
    )
}