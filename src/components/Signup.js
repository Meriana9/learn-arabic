/* import React from "react";

function Signup() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-center mb-5">Inscription</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div className="mt-4">
            <label>Mot de passe:</label>
            <input type="password" required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div className="mt-4">
            <label>Confirmer le mot de passe:</label>
            <input type="password" required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div className="mt-4">
            <button className="w-full px-3 py-2 bg-blue-500 text-white rounded-md">Inscription</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup
 */

import React, { useContext, useState } from "react";
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setAuthData } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/register", { email, password });
      console.log(response.data);
      setAuthData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-center mb-5">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" required className="w-full px-3 py-2 mt-1 border rounded-md" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="mt-4">
            <label>Mot de passe:</label>
            <input type="password" required className="w-full px-3 py-2 mt-1 border rounded-md" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="mt-4">
            <label>Confirmer le mot de passe:</label>
            <input type="password" required className="w-full px-3 py-2 mt-1 border rounded-md" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
          </div>
          <div className="mt-4">
            <button type="submit" className="w-full px-3 py-2 bg-blue-500 text-white rounded-md">Inscription</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup
