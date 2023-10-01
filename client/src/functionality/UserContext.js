import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to handle login
  const checkAuthorization = () => {
    // Checks if user session exists if not in dev mode
    fetch('/api/authorized')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setUser(null);
        }
      })
      .catch(error => {
        console.error("No user logged in.", error);
        setUser(null);
      });
  }

  useEffect(() => {
    checkAuthorization();
  }, []); 

  // Function to handle logout
  const logout = () => {
    setUser(null);
    fetch("/api/logout", {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setUser(null);
        }
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, checkAuthorization }}>
      {children}
    </UserContext.Provider>
  );
}