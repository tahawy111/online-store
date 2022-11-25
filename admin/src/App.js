import { useEffect } from "react";
import "./App.css";
import SigninScreen from "./screens/SigninScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CategoryScreen from "./screens/CategoryScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import { logout } from "./slices/userSlice";
import { getCategory } from "./actions/category.cations";

function App() {
  const dispatch = useDispatch();
  const { isAuth, userData } = useSelector((state) => state.user);
  const { isExpired } = useJwt(userData !== null ? userData.token : true);
  useEffect(() => {
    dispatch(getCategory());
  });
  useEffect(() => {
    if (isAuth && isExpired) {
      dispatch(logout());
    }
  }, [isExpired]);
  return (
    <div className="App" style={{ background: "#f4f4f8", height: "100vh" }}>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <HomeScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/product"
          element={isAuth ? <ProductScreen /> : <Navigate to="/signin" />}
        />
        <Route
          path="/category"
          element={isAuth ? <CategoryScreen /> : <Navigate to="/signin" />}
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
