import {createContext, useContext, useState} from "react";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [activeLink, setActiveLink] = useState()

  return (
    <GlobalContext.Provider
      value={{
        activeLink,
        setActiveLink
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalProvider, useGlobalContext }