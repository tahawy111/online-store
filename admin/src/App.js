import "./App.css";
<<<<<<< HEAD
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen/index";
=======
import SigninScreen from "./screens/SigninScreen";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, Navigate } from "react-router-dom";
>>>>>>> frontend
import { useSelector } from "react-redux";

function App() {
  const { isAuth } = useSelector((state) => state.user);
  return (
<<<<<<< HEAD
    <div className="App" style={{ background: "#f1f6f7", height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <HomeScreen /> : <Navigate to="/signin" />}
          />
          <Route
            path="/signin"
            element={isAuth ? <Navigate to="/" /> : <SigninScreen />}
          />
        </Routes>
      </BrowserRouter>
=======
    <div className="App" style={{ background: "#f4f4f8", height: "100vh" }}>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <HomeScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={isAuth ? <Navigate to="/" /> : <SigninScreen />}
        />
      </Routes>
>>>>>>> frontend
    </div>
  );
}

export default App;
