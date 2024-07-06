import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { IoReload } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { TopsectionContext } from '../contexts/TopsectionContext';
import { BottomsectionContext } from '../contexts/BottomsectionContex';
import { readmeSectionsData } from '../../data';


const SectionCards = ({ section, ind }) => {
    const { topsections, setTopsections } = useContext(TopsectionContext)
    const { bottomSections, setBottomSections } = useContext(BottomsectionContext)

    const handleReset = () => {

    }

    const handleDelete = async () => {
        var tempTopSections = topsections
        var tempBottomSections = bottomSections

        const id = section.id
        const data = readmeSectionsData.find((e) => e.id === id)
        tempBottomSections.push(data)
        await tempBottomSections.sort((a , b)=>{
            console.log("running")
            return a.id - b.id
        });
        setBottomSections(tempBottomSections)
        console.log(tempBottomSections)
        tempTopSections = tempTopSections.filter((e) => e.id !== data.id)
        setTopsections(tempTopSections)
    }

    const handleClick = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
    }, [setTopsections])
    return (
        <button
            onClick={handleClick}
            className='flex items-center justify-between w-full h-[48px] p-2 gap-1 border shadow rounded-md mt-2 active:bg-gray-300 focus:outline-none focus:ring focus:ring-[#5ad4e1]'>
            <div className='flex items-center justify-center'>
                <img src="../public/drag.svg" alt="drag" className='w-6 md:w-4 h-full cursor-grab' />
                <div className='ml-2 md:text-sm md:ml-1'>{section.title}</div>
            </div>
            <div className='flex items-center justify-center text-gray-900 text-md w-10 md:w-8 gap-1'>
                <IoReload
                    onClick={handleReset}
                    className='cursor-pointer' />
                <MdOutlineDelete
                    onClick={handleDelete}
                    className='cursor-pointer' />
            </div>
        </button>
    )
}

export default SectionCards