import React, { useContext } from 'react'
import "@wcj/dark-mode";
import { EditorContext } from '../contexts/EditorContext';

const Navbar = () => {
    const { value, setValue, completeText } = useContext(EditorContext);

    const handleDownload = (e)=>{
        e.preventDefault()
        
        const element = document.createElement('a')
        const file = new Blob([...value] , {
            type:'markdown;charset=utf-8'
        });
        element.href = URL.createObjectURL(file);
        element.download = 'README.md';
        document.body.appendChild(element);
        element.click();
        e.target.blur();
    }

    return (
        <div className='w-full px-4 md:px-8 lg:px-16 py-3 bg-[#4dbfdc] dark:bg-[#274d56] flex items-center justify-between'>
            <div className='flex gap-2 items-center justify-center text-[#313b72]'>
                <img className='w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem]' src='/notes.png' alt="img" />
                <div className='text-base lg:text-3xl md:text-2xl font-bold'>Mark<span className='text-[#7ee081]'>it</span>down</div>
            </div>
            <div>
                <dark-mode light="Light" dark="Dark"
                    permanent={true}
              ></dark-mode>
            <div 
            onClick={(e)=>handleDownload(e)}
            className="cursor-pointer group relative inline-block focus:outline-none focus:ring ml-4">
                <span
                    className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                ></span>

                <span
                    className="relative inline-block border-2 border-current px-2 py-1 md:px-4 lg:px-8 md:py-3 text-sm font-semibold uppercase tracking-widest"
                >
                    Download
                </span>
            </div>
        </div>
    </div >
  )
}

export default Navbar