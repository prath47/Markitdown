import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import MarkdownEditor from "@uiw/react-markdown-editor";
import { EditorContext } from '../contexts/EditorContext';


const SimpleEditor = () => {
    const { value, setValue, completeText } = useContext(EditorContext);

return (
    <div className='w-full h-full'>
        <Navbar />
        <div className='min-w-[56rem] mx-auto my-0 py-[2.3rem] px-[3rem] h-[90%] flex justify-center'>
            <MarkdownEditor
                // enableEmoji={true}
                source={value}
                value={value}
                height="200px"
                onChange={(e) => setValue(e)}
                className="w-full"
                defaultValue="//some comment"
            />

        </div>
    </div>
)
}

export default SimpleEditor