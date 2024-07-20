import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  
  const contextValue = {
    isLoading,
    setIsloading,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

const useUserData = () => {
  const context = useContext(DataContext);

  return context;
};

export { ContextProvider, useUserData };