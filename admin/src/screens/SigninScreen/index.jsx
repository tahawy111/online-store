import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/user.actions";
import "./style.css";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = ({ target }) =>
    setFormData({ ...formData, [target.name]: target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ ...formData }));
    if (isAuth) {
      navigate("/");
    }
  };
=======
import { loginAction } from "../../actions/user.actions";
import "./style.css";
const SigninScreen = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(formData));
  };

>>>>>>> frontend
  return (
    <div className="bg">
      <div className="center-full">
        <Box
          component="form"
          className="form-bg"
          sx={{
            border: "1px solid grey",
            borderRadius: "15px",
          }}
          autoComplete="off"
        >
<<<<<<< HEAD
          <h4 className="mt-5 text-center">Signin To Admin Dashboard</h4>
=======
          <h4 className="text-center mt-5">Signin To Admin Panel</h4>
>>>>>>> frontend
          <div style={{ padding: "4rem" }}>
            <TextField
              label="Email"
              name="email"
<<<<<<< HEAD
=======
              type="email"
>>>>>>> frontend
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <TextField
              className="mt-3"
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <Button
              type="submit"
              className="mt-3"
              variant="contained"
              onClick={handleSubmit}
            >
              Signin
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SigninScreen;
