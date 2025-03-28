import React, { createContext, useState } from "react";

export const CourseContext = createContext();

interface Props {
    children: React.ReactNode;
}

type CourseType ={
    title: string;
    icon: string;
    description: string;
    is_nested: boolean;
}

const CourseContextProvider = ({ children }: Props) => {
    const [courseContent, setCourseContent] = useState<CourseType>();

    return (
        <CourseContext.Provider
            value={{ courseContent, setCourseContent }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export default CourseContextProvider;
