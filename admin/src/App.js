import "./App.css";
import SigninScreen from "./screens/SigninScreen";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { isAuth } = useSelector((state) => state.user);
  return (
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
    </div>
  );
}

export default App;
