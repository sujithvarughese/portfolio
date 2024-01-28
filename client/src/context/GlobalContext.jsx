import {createContext, useContext, useState} from "react";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [activeLink, setActiveLink] = useState("")

  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: "",
    message: "",
  })

  const showAlert = ({ type, message }) => {
    setAlertState({ isOpen: true, type, message })
  }

  const hideAlert = () => {
    setAlertState({ isOpen: false, type: "", message: "" })
  }

  return (
    <GlobalContext.Provider
      value={{
        activeLink,
        setActiveLink,
        alertState,
        showAlert,
        hideAlert
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalProvider, useGlobalContext }