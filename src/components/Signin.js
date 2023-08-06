import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      setAuthData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-center mb-5">Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label>Password:</label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-md"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
