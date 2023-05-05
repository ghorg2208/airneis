import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthContextProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const login = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser({});
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
