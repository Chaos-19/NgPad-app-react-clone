import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

interface Props {
    children: React.ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
    const [courseContent, setCourseContent] = useState<string>("home");

    return (
        <ApplicationContext.Provider
            value={{ courseContent, setCourseContent }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export default AppContextProvider;
