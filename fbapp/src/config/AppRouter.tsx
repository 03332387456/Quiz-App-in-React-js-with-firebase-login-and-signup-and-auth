import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import AdminPanel from "../Screens/AdminPanel";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
    <Route path="/AdminPanel" element={<AdminPanel />} />
     <Route path="/login" element={<Login />} />
     <Route path="/" element={<Signup />} />
    </Routes>
    </Router>
  );
}
