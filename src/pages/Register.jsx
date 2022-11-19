import React, { useState, useNavigate } from "react";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //   console.log(email, password);
  const signIn = () => {
    createUser(email, password, navigate);
  };

  return (
    <div>
      <h1>Register</h1>
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
        <button type="button" onClick={signIn}>
          Sign In
        </button>
        <button type=" button">Continue with Google</button>
      </form>
    </div>
  );
};

export default Register;
