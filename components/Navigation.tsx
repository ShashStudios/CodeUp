import React from 'react'
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';


const Navigation = () => {
  return (
    <div className="flex justify-center bg-base-300 p-4">
        <div className="navbar w-1/2 bg-base-100 rounded-lg flex items-center px-2">
            <div className="flex items-center flex-grow">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <Image src="/fire.png" alt="Menu Icon" width={32} height={32} />
                </div>
            </div>
            </div>
            <div className="flex-grow text-center pl-20">
            <a className="btn btn-ghost normal-case text-xl text-gray-200">Code Up</a>
            </div>
            <div className="flex items-center flex-grow justify-end">
            <button className="btn btn-ghost btn-circle flex items-center">
                <FaGithub className="h-8 w-8 text-gray-200" />
                
            </button>
            </div>
        </div>
    </div>

  )
}

export default Navigation