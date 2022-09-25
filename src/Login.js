import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
const Login = () => {
  const Navigate = useNavigate();

  const [state, setState] = useState({ username: "", password: "" });
  const [eye, setEye] = useState(false);

  const Tooglebtn = () => {
    setEye((prevEye) => !prevEye);
  };

  const handleLogin = () => {
    axios({
      url: "    https://credobackend.herokuapp.com/add",
      method: "POST",
      withCredentials:false,
      headers: {},
      data: { username: state.username, password: state.password },
    })
      .then((loginData) => {
        localStorage.setItem("authorization", loginData.data.authToken);//doubt here how data.authtoken
        Navigate("/data");
      })
      .catch((err) => {
        alert("user doesnt exist");
        console.log(err)
      });
  };

  return (
    <div className="login_container">
      <div className="login">
        <h1 className="loginh1">Logo</h1> <br />
        <p>Enter your credentials to access your account</p> <br />
        <input
          className="logininput"
          type="text"
          id="userid"
          placeholder="UserName"
          onChange={(e) => {
            setState({ ...state, username: e.target.value });
          }}
        />{" "}
        
        <div className="input-element-wrapper">
          <input
            className="logininput"
            type={eye ? "text":"password"}
            id="passwordLI"
            placeholder="Password"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
          <button className="eye"  onClick={Tooglebtn}>
            {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <button className="signinbtn" onClick={handleLogin}>
          Sign In
        </button>{" "}
        <br />
        <p
          onClick={() => {
            Navigate("/signup");
          }}
          className="signuptext"
        >
          Sign Up
        </p>
      </div>
      <p className="footer" onClick={() => {
            Navigate("/signup");
          }}>Don't have an account? SignUp</p>
    </div>
  );
};

export default Login;