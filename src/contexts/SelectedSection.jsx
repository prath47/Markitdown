import { createContext, useEffect, useState } from "react";

export const SelectedSectionContext = createContext()

export const SelectedSectionContextProvider = ({ children }) => {
    const [selectedValue, setSelectedValue] = useState('')

    useEffect(()=>{
        console.log("called")
    },[setSelectedValue , selectedValue])
    return (
        <SelectedSectionContext.Provider value={{ selectedValue, setSelectedValue }}>
            {children}
        </SelectedSectionContext.Provider>
    )
}