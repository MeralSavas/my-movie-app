import React, { useState, useNavigate } from "react";
import { LoginWithEmail } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    LoginWithEmail(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={login}>
          Login
        </button>
        <button type=" button">Continue with Google</button>
      </form>
    </div>
  );
};

export default Login;
