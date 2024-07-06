import { createContext, useEffect, useState } from "react";
import { readmeSectionsData } from '../../data.js'

export const BottomsectionContext = createContext()

export const BottomsectionContextProvider = ({ children }) => {
    const [bottomSections, setBottomSections] = useState(readmeSectionsData)

    useEffect(() => { }, [setBottomSections])
    return (
        <BottomsectionContext.Provider value={{ bottomSections, setBottomSections }}>
            {children}
        </BottomsectionContext.Provider>
    )
}