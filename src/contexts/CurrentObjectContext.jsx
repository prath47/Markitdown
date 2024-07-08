import { createContext, useEffect, useState } from "react";

export const CurrentObjectContext = createContext(null)

export const CurrentObjectContextProvider = ({ children }) => {
    const [currentObject, setCurrentObject] = useState({})

    useEffect(() => { 
    }, [currentObject])

    return (
        <CurrentObjectContext.Provider value={{currentObject , setCurrentObject}}>
            {children}
        </CurrentObjectContext.Provider>
    )
}