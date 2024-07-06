import { createContext, useEffect, useState } from "react";
import { readmeSectionsData } from '../../data.js'

export const BottomsectionContext = createContext()

export const BottomsectionContextProvider = ({ children }) => {
    const [bottomSections, setBottomSections] = useState(readmeSectionsData)

    useEffect(() => {
        // bottomSections.sort((a, b) => { return a.id < b.id })
    }, [setBottomSections])
    return (
        <BottomsectionContext.Provider value={{ bottomSections, setBottomSections }}>
            {children}
        </BottomsectionContext.Provider>
    )
}