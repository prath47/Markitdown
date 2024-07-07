import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import { IoReload } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import SectionCards from '../Components/SectionCards';
import DataBars from '../Components/DataBars';
import MonacoEditor, { Editor, loader } from '@monaco-editor/react'
import MarkdownEditor from '@uiw/react-markdown-editor';
import { BottomsectionContext } from '../contexts/BottomsectionContex';
import { TopsectionContext } from '../contexts/TopsectionContext';
import { EditorContext } from '../contexts/EditorContext';
import { SelectedSectionContext } from '../contexts/SelectedSection';

const EditorPage = () => {
  // const [value, setValue] = useState('# Hi, *Pluto*!')
  const editorRef = useRef()
  const { bottomSections } = useContext(BottomsectionContext)
  const { value, setValue, completeText } = useContext(EditorContext);
  const { topsections, setTopsections } = useContext(TopsectionContext)
  const { selectedValue, setSelectedValue } = useContext(SelectedSectionContext)
  const [markdown, setMarkdown] = useState(selectedValue)

  const handleEditorChange = (value) => {
    setValue(value);

  };

  const monacoEditorRef = useRef(null)
  const handleEditorDidMount = (editor) => {
    monacoEditorRef.current = editor
  }

  const updateFunction = () => {
    this.forceUpdate();
  }

  useEffect(() => {
    console.log("Main page updated")
  }, [value, setTopsections]);


  return (
    <div className='w-full h-[90%]'>
      <Navbar />

      <div className='md:grid p-4 lg:p-8 h-full w-full gap-2 md:grid-cols-10'>
        {/* //sections */}
        <div className='hidden md:block w-full md:col-span-2 h-[36rem] 3xl:h-[60rem] p-1 rounded-md'>
          <div className='flex items-center justify-between text-[#57dece]'>
            <div className=''>Section</div>
            <div className='flex items-center justify-between gap-1'>
              <div><IoReload /></div>
              <div>Reset</div>
            </div>
          </div>
          {/* //what is added till now */}
          <div className='p-1 max-h-full overflow-y-scroll'>
            <div className='text-[0.8rem] min-h-full'>Click on a section below to edit the contents</div>

            {/* card */}
            <div>
              {topsections.map((section, ind) => (
                <SectionCards key={ind} section={section} ind={ind} />
              ))}
            </div>


            <div className='mt-10'>
              {/* Click on a section below to add it to your readme */}
              <div className='text-[0.78rem]'>Click on a section below to add it to your readme</div>
              <div className='flex items-center justify-between w-full h-[48px] p-2 border shadow rounded-md mt-3'>
                <input type="text" className='w-full' placeholder='Search...' />
              </div>
              <div className='flex items-center justify-center w-full h-[48px] p-2 border shadow rounded-md mt-3'>
                <button className='flex items-center justify-center'>+ Custom Section</button>
              </div>
              {bottomSections.map((section, ind) => (
                <DataBars key={ind} section={section} ind={ind} />
              ))}
            </div>
          </div>

        </div>

        <div className='w-full block md:col-span-4 md:p-1 p-8 h-full'>
          <div className='flex items-center justify-between'>
            <div className='text-[#57dece]'>Editor</div>
          </div>
          <div className='h-[94%] 3xl:h-[60rem] border border-1 rounded-lg'>
            <Editor
              width={`100%`}
              // ref={editorRef}
              language={"markdown"}
              value={selectedValue}
              theme="vs-dark"
              onChange={handleEditorChange}
              className=""
              onMount={handleEditorDidMount}
              keepCurrentModel='false'
              defaultValue=''
            // loading={<Loading />}
            />
          </div>
        </div>
        <div className='w-full md:col-span-4 h-full p-1'>
          <div className='flex items-center justify-between'>
            <div className='text-[#57dece]'>Preview</div>
          </div>
          <div className='h-[36rem] 3xl:h-[60rem] p-6 border-2 border-black rounded-lg overflow-y-scroll'>

            <MarkdownEditor.Markdown
              // enableEmoji={true}
              source={value}
              value={value}
              onChange={handleEditorChange}
              className="max-w-full"
              defaultValue="//some comment"
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorPage