import React, { useContext, useEffect, useRef } from 'react'
import { IoReload } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { TopsectionContext } from '../contexts/TopsectionContext';
import { BottomsectionContext } from '../contexts/BottomsectionContex';
import { readmeSectionsData } from '../../data';
import { EditorContext } from '../contexts/EditorContext';
import { SelectedSectionContext } from '../contexts/SelectedSection';
import { CurrentObjectContext } from '../contexts/CurrentObjectContext';
import { TemplateContext } from '../contexts/TemplateContext';


const SectionCards = ({ section, ind }) => {
    const { value, setValue, completeText } = useContext(EditorContext);
    const { topsections, setTopsections } = useContext(TopsectionContext)
    const { selectedValue, setSelectedValue } = useContext(SelectedSectionContext)
    const { bottomSections, setBottomSections } = useContext(BottomsectionContext)
    const { currentObject, setCurrentObject } = useContext(CurrentObjectContext)
    const { template, setTemplate } = useContext(TemplateContext)


    const sectionRef = useRef()
    const handleReset = () => {
        const temp = [...template];
        const tempData = temp.find((data) => (section.id === data.id))
        var tempTopSections = [...topsections];
        tempTopSections.splice(ind, 1, tempData);
        setTopsections(tempTopSections)

        setSelectedValue('')
        completeText(tempTopSections)
        setTemplate(JSON.parse(JSON.stringify(temp)))
    }

    const handleDelete = async () => {
        var tempTopSections = topsections
        var tempBottomSections = bottomSections

        const id = section.id
        const data = readmeSectionsData.find((e) => e.id === id)
        tempBottomSections.push(data)
        await tempBottomSections.sort((a, b) => {
            return a.id - b.id
        });

        setBottomSections(tempBottomSections)
        tempTopSections = tempTopSections.filter((e) => e.id !== data.id)
        setTopsections(tempTopSections)
        completeText(tempTopSections)
        setSelectedValue('')
    }

    const handleClick = (e) => {
        e.preventDefault()
        completeText(topsections)
        setSelectedValue(section.readmeSection)
        setCurrentObject({section , ind})
    }

    const moverRef = useRef()
    const handleMoverClick = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        completeText(topsections)
    }, [setTopsections, setSelectedValue])
    return (
        <button
            ref={sectionRef}
            onClick={handleClick}
            className='flex items-center justify-between w-full h-[48px] p-2 gap-1 border shadow-sm rounded-md mt-2 active:bg-gray-300 focus:outline-none focus:ring transition duration-100 ease-in-out focus:ring-[#5ad4e1] focus:scale-[1.01] overflow-x-scroll z-10'>
            <div className='flex items-center justify-center'>
                <img
                    ref={moverRef}
                    onClick={handleMoverClick}
                    src="./drag.svg" alt="drag" className='w-6 md:w-4 h-full cursor-grab' />
                <div className='ml-2 text-base lg:text-md md:ml-1'>{section.title}</div>
            </div>
            <div className='flex items-center ml-2 justify-center text-gray-900 text-xl w-10 md:w-10 gap-1 z-10'>
                <IoReload
                    onClick={handleReset}
                    className='cursor-pointer transition duration-100 ease-in-out hover:scale-[1.5]' />
                <MdOutlineDelete
                    onClick={handleDelete}
                    className='cursor-pointer transition duration-100 ease-in-out hover:scale-[1.5]' />
            </div>
        </button>
    )
}

export default SectionCards