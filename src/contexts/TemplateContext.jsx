import { createContext, useState } from "react";
import { readmeSectionsData } from "../../data";

export const TemplateContext = createContext()

export const TemplateContextProvider = ({ children }) => {
    const [template, setTemplate] = useState(JSON.parse(JSON.stringify(readmeSectionsData)))
    return (
        <TemplateContext.Provider value={{template , setTemplate}}>
            {children}
        </TemplateContext.Provider>
    )
}