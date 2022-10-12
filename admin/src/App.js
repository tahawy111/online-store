import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen/index";
import { useSelector } from "react-redux";

function App() {
  const { isAuth } = useSelector((state) => state.user);
  return (
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
    </div>
  );
}

export default App;
