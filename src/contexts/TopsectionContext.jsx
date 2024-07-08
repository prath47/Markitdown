import { createContext, useEffect, useState } from "react";

export const TopsectionContext = createContext()

export const TopsectionContextProvider = ({ children }) => {
    const [topsections, setTopsections] = useState([])

    useEffect(() => {
     }, [topsections])
    return (
        <TopsectionContext.Provider value={{ topsections, setTopsections }}>
            {children}
        </TopsectionContext.Provider>
    )
}