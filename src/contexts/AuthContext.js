import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({
    token: null,
    user: null,
  });

  const setAuthData = (data) => {
    setAuthInfo(data);
  };

  return (
    <AuthContext.Provider value={{ authInfo, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
