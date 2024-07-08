import React, { useContext } from 'react'
import { BottomsectionContext } from '../contexts/BottomsectionContex'
import { TopsectionContext } from '../contexts/TopsectionContext'
import { SelectedSectionContext } from "../contexts/SelectedSection";

const DataBars = ({ section, ind }) => {
    const { topsections, setTopsections } = useContext(TopsectionContext)
    const { bottomSections, setBottomSections } = useContext(BottomsectionContext)

    const handleClick = () => {
        var tempBottomSections = bottomSections
        var tempTopSections = topsections

        const id = section.id
        const data = tempBottomSections.find((e) => e.id === id)
        tempTopSections.push(data)
        setTopsections(tempTopSections)
        tempBottomSections = tempBottomSections.filter((e) => e.id !== data.id)
        setBottomSections(tempBottomSections)
    }
    
    return (
        <div onClick={handleClick} className='flex transition duration-100 ease-in-out items-center justify-between w-full h-[48px] p-2 border shadow rounded-md mt-3 cursor-pointer'>
            <div className='flex items-center lg:justify-center overflow-x-scroll '>
                <div className='ml-0 md:ml-2 text-base ld:text-md'>{section.title}</div>
            </div>
        </div>
    )
}

export default DataBars