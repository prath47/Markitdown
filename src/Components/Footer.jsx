import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#001f4a]">
            <div className="mx-auto max-w-screen-l px-4 py-2 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-white sm:justify-start">
                        <div className='flex justify-center items-center gap-2'>
                            <img
                                className='w-8'
                                src="/notes.png" alt="img" />
                            <div>MarkitDown</div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex gap-2 text-white'>
                            <Link to={"https://github.com/prath47"}>
                                <FaGithub />
                            </Link>
                        </div>
                        <p className="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
                            Made with lot of Lines of code by Prathmesh
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer