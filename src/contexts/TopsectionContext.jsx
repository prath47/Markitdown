import { createContext, useEffect, useState } from "react";
import { readmeSectionsData } from '../../data'

export const TopsectionContext = createContext()

export const TopsectionContextProvider = ({ children }) => {
    const [topsections, setTopsections] = useState([])

    useEffect(() => {
     }, [setTopsections])
    return (
        <TopsectionContext.Provider value={{ topsections, setTopsections }}>
            {children}
        </TopsectionContext.Provider>
    )
}