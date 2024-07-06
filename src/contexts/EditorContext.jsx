import { createContext, useContext, useEffect, useState } from "react";
import { TopsectionContext } from "./TopsectionContext";
import { readmeSectionsData } from "../../data";

export const EditorContext = createContext()

export const EditorContextProvider = ({ children }) => {
    // const { topsections, setTopsections } = useContext(TopsectionContext)


    const [value, setValue] = useState('');

    const completeText = (topsections) => {
        var text = '';
        topsections.forEach(e => {
            text += e.readmeSection;
        });
        setValue(text);
    }

    useEffect(() => {
        // completeText()
    }, [completeText, setValue])
    return (
        <EditorContext.Provider value={{ value, setValue, completeText }}>
            {children}
        </EditorContext.Provider>
    )
}