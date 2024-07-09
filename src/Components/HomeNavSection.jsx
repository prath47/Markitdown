import React from 'react'
import { Link } from 'react-router-dom'

const HomeNavSection = () => {
    return (
        <section class="bg-gray-900 text-white">
            <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[40rem] lg:items-center">
                <div class="mx-auto max-w-3xl text-center">
                    <h1
                        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Markitdown
                    </h1>

                    <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Simple and easy to use markdown editor. Create and download markdown files with ease.
                    </p>

                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <Link to={'/monaco-editor'}
                            class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        >
                            Try Now
                        </Link>

                        <Link
                            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            to="https://github.com/prath47/markitdown"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeNavSection