import React, { useContext, useState } from 'react'
import { BottomsectionContext } from '../contexts/BottomsectionContex'
import { TopsectionContext } from '../contexts/TopsectionContext'

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
        <div onClick={handleClick} className='flex items-center justify-between w-full h-[48px] p-2 border shadow rounded-md mt-3 cursor-pointer'>
            <div className='flex items-center justify-center'>
                <div className='ml-2'>{section.title}</div>
            </div>
        </div>
    )
}

export default DataBars