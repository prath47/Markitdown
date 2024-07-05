import React from 'react'
import Navbar from '../Components/Navbar'
import { IoReload } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

const EditorPage = () => {
  return (
    <div className='w-full h-[90%]'>
      <Navbar />

      <div className='md:grid md:p-2 h-full w-full gap-2 md:grid-cols-10'>
        {/* //sections */}
        <div className='hidden md:block w-full md:col-span-2 h-full outline p-2 rounded-md'>
          <div className='flex items-center justify-between'>
            <div className='w-[70%]'>Section</div>
            <div className='flex items-center justify-between w-[20%]'>
              <div><IoReload /></div>
              <div>Reset</div>
            </div>
          </div>
          {/* //what is added till now */}
          <div className='p-1'>
            <div className='text-[0.8rem]'>Click on a section below to edit the contents</div>

            {/* card */}
            
          </div>
        </div>

        <div className='w-full block md:col-span-4 h-full bg-green-50'></div>
        <div className='w-full block md:col-span-4 h-full bg-yellow-50'></div>
      </div>
    </div>
  )
}

export default EditorPage