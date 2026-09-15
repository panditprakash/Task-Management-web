import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

/**
 * Global Authentication Provider
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  /**
   * Restore user after refresh.
   */
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const response = await api.get("/user/profile");

        setUser(response.data.user);
      } catch {
        localStorage.removeItem("token");
      }
    };

    loadUser();
  }, []);

  /**
   * Save login information.
   */
  const login = (userData, token) => {
    localStorage.setItem("token", token);

    setUser(userData);
  };

  /**
   * Logout user.
   */
  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Context hooks are intentionally exported with the provider for convenient use.
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
