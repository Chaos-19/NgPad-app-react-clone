import React, { createContext,useState } from "react";

export const ApplicationContext = createContext();

interface Props {
 children:React.ReactNode
}

const AppContextProvider = ({children}: Props) => {
  
  const [currentTab, setCurrentTab] = useState<string>('home');
  
  return <ApplicationContext.Provider value={{currentTab,setCurrentTab}}>
    {children} 
  </ApplicationContext.Provider>;
};

export default AppContextProvider;
