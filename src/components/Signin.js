import React from "react";

function Signin() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-center mb-5">Se connecter</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div className="mt-4">
            <label>Password:</label>
            <input type="password" required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div className="mt-4">
            <button className="w-full px-3 py-2 bg-blue-500 text-white rounded-md">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
