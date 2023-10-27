import React, { useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("login")?true:false);

  const [userData, setUserData] = useState(localStorage.getItem("infoUser")?JSON.parse(localStorage.getItem("infoUser")):{});

  const onLogin = (infoUser) => {
    setLogin(true);
    localStorage.setItem("login", "true");
    setUserData(infoUser);
    localStorage.setItem("infoUser", JSON.stringify(infoUser));
  };
  const onLogout = () => {
    setLogin(false);
    localStorage.removeItem("login");
    setUserData({})
    localStorage.removeItem("infoUser")
  };

  return (
    <AuthContext.Provider value={{ login, onLogin, onLogout, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
