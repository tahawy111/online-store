import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/" element={<Login />} />
    </Routes>
  );
}

export default App;
