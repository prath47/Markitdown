import { createContext, useContext, useEffect, useState } from "react";
import { TopsectionContext } from "./TopsectionContext";

export const EditorContext = createContext()

export const EditorContextProvider = ({ children }) => {
    const { } = useContext(TopsectionContext)
    const [value, setValue] = useState();

    const completeText = () => {
        var text = '';

    }
    useEffect(() => {

    }, [])
    return (
        <EditorContext.Provider>
            {children}
        </EditorContext.Provider>
    )
}