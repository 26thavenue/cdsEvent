import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {}
});


const userName = import.meta.env.VITE_CDSSUMMIT_USERNAME
const cdsPassword = import.meta.env.VITE_SUPABASE_PASSWORD




export function AuthProvider({ children }:any) {
  
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("admin_token_cds") !== null
  );

  const login = (username:string, password:string) => {
    
    if (username == userName && password == cdsPassword) {

      localStorage.setItem("admin_token_cds", "my_admin_token_1239494949");
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem("admin_token_cds");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
