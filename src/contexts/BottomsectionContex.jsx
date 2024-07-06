import { createContext, useContext, useEffect, useState } from "react";
import { readmeSectionsData } from '../../data.js'
import { EditorContext } from "./EditorContext.jsx";

export const BottomsectionContext = createContext()

export const BottomsectionContextProvider = ({ children }) => {
    const [bottomSections, setBottomSections] = useState(readmeSectionsData)
    // const { value, setValue, completeText } = useContext(EditorContext);

    useEffect(() => {
        // bottomSections.sort((a, b) => { return a.id < b.id })
    }, [setBottomSections])
    return (
        <BottomsectionContext.Provider value={{ bottomSections, setBottomSections }}>
            {children}
        </BottomsectionContext.Provider>
    )
}