import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import Navbar from "../Components/Navbar";
import { IoReload } from "react-icons/io5";
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
  const { bottomSections, setBottomSections } = useContext(BottomsectionContext);
  const { value, setValue, completeText } = useContext(EditorContext);
  const { topsections, setTopsections } = useContext(TopsectionContext);
  const { selectedValue, setSelectedValue } = useContext(SelectedSectionContext);
  const { currentObject, setCurrentObject } = useContext(CurrentObjectContext)
  const { template, setTemplate } = useContext(TemplateContext)

  const handleEditorChange = async (val) => {
    const tempVal = val.length ? val : '';
    const section = { ...currentObject };

    const temp = template;

    var tempTopSections = [...topsections];
    tempTopSections[section.ind].readmeSection = tempVal;

    setTopsections(tempTopSections)
    completeText(tempTopSections)
    completeTextCalculate();

    // readmeSectionsData = temp;
    setTemplate(temp)
  };

  const [searchBottomSection, setSeachBottomSection] = useState()
  const onClickSearch = () => {
    console.log("Clicked")
    setSeachBottomSection(JSON.parse(JSON.stringify(bottomSections)))
  }

  const handleSearch = (e) => {
    const searchVal = e.target.value
    if (searchVal === "") {
      setBottomSections(JSON.parse(JSON.stringify(searchBottomSection)));
      return;
    }

    const filterBySearch = bottomSections.filter((item) => {
      if (item.title.toLowerCase()
        .includes(searchVal.toLowerCase())) { return item; }
    })
    setBottomSections(filterBySearch);

  }

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
    <div className="w-full h-[90%] dark:text-white">
      <Navbar />

      <div className="md:grid p-4 lg:p-8 h-full w-full gap-2 md:grid-cols-10">
        {/* //sections */}
        <div className="hidden md:block w-full md:col-span-2 h-[36rem] 3xl:h-[60rem] p-1 rounded-md">
          <div className="flex items-center justify-between text-[#57dece]">
            <div className="">Section</div>
            <div className="hidden items-center justify-between gap-1">
              <div>
                <IoReload />
              </div>
              <div>Reset</div>
            </div>
          </div>
          {/* //what is added till now */}
          <div className="p-1 max-h-full overflow-y-scroll">
            <div className="text-[0.8rem] min-h-full mb-2">
              Click on a section below to edit the contents
            </div>
            <div className="text-[0.8rem] min-h-full">
              Double Click on the reset button to reset the section
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
                  onClick={onClickSearch}
                  onChange={(e) => handleSearch(e)}
                  type="text" className="w-full outline-none" placeholder="Search..." />
              </div>
              <div className="hidden items-center justify-center w-full h-[48px] p-2 border shadow rounded-md mt-3">
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
            <div className="text-[#57dece] m-2">Editor</div>
          </div>
          <div className="h-[93%] 3xl:h-[60rem] border border-1 rounded-lg">
            {selectedValue.length ? <Editor
              width={`100%`}
              language={"markdown"}
              value={selectedValue}
              theme="vs-dark"
              onChange={handleEditorChange}
              className=""
              keepCurrentModel="false"
            /> : <h1 className="text-base p-8 text-[#57dece]">Click On The Left Section To Edit</h1>}
          </div>
        </div>
        <div className="w-full md:col-span-4 h-full p-1">
          <div className="flex items-center justify-between">
            <div className="text-[#57dece] m-2">Preview</div>
          </div>
          <div className="h-[36rem] 3xl:h-[60rem] p-6 border-2 rounded-lg overflow-y-scroll">

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
