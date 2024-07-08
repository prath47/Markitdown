import { createContext, useContext, useEffect, useState } from "react";
import { TopsectionContext } from "./TopsectionContext";
import { readmeSectionsData } from "../../data";

export const EditorContext = createContext()

export const EditorContextProvider = ({ children }) => {
    const [value, setValue] = useState('');

    const completeText = async (topsections) => {
        var text = '';
        topsections.forEach(e => {
            text += e.readmeSection;
        });
        setValue(text);
    }

    useEffect(() => {
        // completeText()
    }, [completeText, setValue, value])
    return (
        <EditorContext.Provider value={{ value, setValue, completeText }}>
            {children}
        </EditorContext.Provider>
    )
}