import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginP = () => {
  const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({ username: "", password: "" });

  const login = (e) => {
    e.preventDefault();
    console.log(user);

    if (user.username === "abdulaziz" && user.password === "abd") {
      // navigate("/products");
      navigate("/home");
    } else {
      alert("Check info !");
    }
  };
  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
        <input
          type="text"
          name="username"
          value={user.username}
          // onChange={handleUsername}
          onChange={handleChange}
          placeholder="username"
        />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          // onChange={handlePassword}
          placeholder="password"
        />
        <br />
        <button type="submit" onClick={login}>
          LoginP
        </button>
      </form>
    </div>
  );
};

export default LoginP;
