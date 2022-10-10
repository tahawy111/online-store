import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen/index";

function App() {
  const isSignin = false;
  return (
    <div className="App" style={{ background: "#f4f4f8", height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isSignin ? <HomeScreen /> : <Navigate to="/signin" />}
          />
          <Route path="/signin" element={<SigninScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
