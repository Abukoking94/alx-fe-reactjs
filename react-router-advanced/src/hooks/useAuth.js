import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (callback) => {
    setIsAuthenticated(true);
    if (callback) callback();
  };

  const logout = (callback) => {
    setIsAuthenticated(false);
    if (callback) callback();
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
