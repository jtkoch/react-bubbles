import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {

  const [user, setUser] = useState({
    username: "Lambda School", 
    password: "i<3Lambd4"
  });

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log("You've logged in!", res.data.payload);

        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(error => {
        console.log("Log in error", error);
      })
  }

  return (
    <div className="loginForm">
      <form name="login">
        <div className="login-Input-Container">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </div>
        <div className="login-Input-Container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
