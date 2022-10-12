import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
          <h4 className="mt-5 text-center">Signin To Admin Dashboard</h4>
          <div style={{ padding: "4rem" }}>
            <TextField
              label="Email"
              name="email"
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
