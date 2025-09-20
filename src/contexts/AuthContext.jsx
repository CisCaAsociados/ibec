import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulación de carga inicial
  useEffect(() => {
    // Aquí luego irá: onAuthStateChanged de Firebase
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const value = {
    currentUser,
    login: () => {},   // Luego conectaremos con Firebase Auth
    logout: () => {},
    signup: () => {},
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
