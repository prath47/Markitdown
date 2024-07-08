import React, {
  createRef,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Navbar from "../Components/Navbar";
import { IoReload } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import SectionCards from "../Components/SectionCards";
import DataBars from "../Components/DataBars";
import MonacoEditor, { Editor, loader } from "@monaco-editor/react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { BottomsectionContext } from "../contexts/BottomsectionContex";
import { TopsectionContext } from "../contexts/TopsectionContext";
import { EditorContext } from "../contexts/EditorContext";
import { SelectedSectionContext } from "../contexts/SelectedSection";
import { CurrentObjectContext } from "../contexts/CurrentObjectContext";
import { readmeSectionsData } from '../../data'
import { TemplateContext } from "../contexts/TemplateContext";

const EditorPage = () => {
  // const [value, setValue] = useState('# Hi, *Pluto*!')
  // const editorRef = createRef();
  const { bottomSections } = useContext(BottomsectionContext);
  const { value, setValue, completeText } = useContext(EditorContext);
  const { topsections, setTopsections } = useContext(TopsectionContext);
  const { selectedValue, setSelectedValue } = useContext(SelectedSectionContext);
  const { currentObject, setCurrentObject } = useContext(CurrentObjectContext)
  const { template, setTemplate } = useContext(TemplateContext)

  const handleEditorChange = async (val) => {
    const tempVal = val.length ? val : '';
    const section = { ...currentObject };

    const temp = template;
    console.log(temp)
    console.log(readmeSectionsData)

    var tempTopSections = [...topsections];
    tempTopSections[section.ind].readmeSection = tempVal;

    setTopsections(tempTopSections)
    completeText(tempTopSections)
    completeTextCalculate();

    // readmeSectionsData = temp;
    setTemplate(temp)
  };
  const completeTextCalculate = async () => {
    var text = '';
    topsections.forEach(e => {
      text += e.readmeSection;
    });
    setValue(text);
  }

  useEffect(() => {
  }, [value, setTopsections, handleEditorChange]);

  return (
    <div className="w-full h-[90%]">
      <Navbar />

      <div className="md:grid p-4 lg:p-8 h-full w-full gap-2 md:grid-cols-10">
        {/* //sections */}
        <div className="hidden md:block w-full md:col-span-2 h-[36rem] 3xl:h-[60rem] p-1 rounded-md">
          <div className="flex items-center justify-between text-[#57dece]">
            <div className="">Section</div>
            <div className="flex items-center justify-between gap-1">
              <div>
                <IoReload />
              </div>
              <div>Reset</div>
            </div>
          </div>
          {/* //what is added till now */}
          <div className="p-1 max-h-full overflow-y-scroll">
            <div className="text-[0.8rem] min-h-full">
              Click on a section below to edit the contents
            </div>

            {/* card */}
            <div>
              {topsections?.map((section, ind) => (
                <SectionCards key={ind} section={section} ind={ind} />
              ))}
            </div>

            <div className="mt-10">
              {/* Click on a section below to add it to your readme */}
              <div className="text-[0.78rem]">
                Click on a section below to add it to your readme
              </div>
              <div className="flex items-center justify-between w-full h-[48px] p-2 border shadow rounded-md mt-3">
                <input
                  // onChange={(e) => handleSearch(e)}
                  type="text" className="w-full" placeholder="Search..." />
              </div>
              <div className="flex items-center justify-center w-full h-[48px] p-2 border shadow rounded-md mt-3">
                <button className="flex items-center justify-center">
                  + Custom Section
                </button>
              </div>
              {bottomSections.map((section, ind) => (
                <DataBars key={ind} section={section} ind={ind} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full block md:col-span-4 md:p-1 p-8 h-full">
          <div className="flex items-center justify-between">
            <div className="text-[#57dece]">Editor</div>
          </div>
          <div className="h-[94%] 3xl:h-[60rem] border border-1 rounded-lg">
            {selectedValue.length ? <Editor
              width={`100%`}
              language={"markdown"}
              value={selectedValue}
              theme="vs-dark"
              onChange={handleEditorChange}
              className=""
              keepCurrentModel="false"
            /> : <h1>Select from the left</h1>}
          </div>
        </div>
        <div className="w-full md:col-span-4 h-full p-1">
          <div className="flex items-center justify-between">
            <div className="text-[#57dece]">Preview</div>
          </div>
          <div className="h-[36rem] 3xl:h-[60rem] p-6 border-2 border-black rounded-lg overflow-y-scroll">

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
  );
};

export default EditorPage;
