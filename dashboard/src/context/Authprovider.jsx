import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: "",
  });

  return (
    <>
      <AuthContext.Provider value={{ authData, setAuthData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default Authprovider;
