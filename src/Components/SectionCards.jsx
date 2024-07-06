import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { IoReload } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { TopsectionContext } from '../contexts/TopsectionContext';

const SectionCards = ({ section, ind }) => {
    const { topsections, setTopsections } = useContext(TopsectionContext)

    useEffect(() => {
    }, [setTopsections])
    return (
        <div className='flex items-center justify-between w-full h-[48px] p-2 gap-1 border shadow rounded-md mt-2 cursor-pointer'>
            <div className='flex items-center justify-center'>
                <img src="../public/drag.svg" alt="drag" className='w-6 md:w-4 h-full cursor-grab' />
                <div className='ml-2 md:text-sm md:ml-1'>{section.title}</div>
            </div>
            <div className='flex items-center justify-center text-gray-900 text-md w-10 md:w-8 gap-1'>
                <IoReload />
                <MdOutlineDelete />
            </div>
        </div>
    )
}

export default SectionCards