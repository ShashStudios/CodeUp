import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



const Navigation = () => {
  return (
    <div className="flex justify-center bg-base-300 p-10 top-0">
        <div className="navbar w-[45%] bg-base-100 rounded-lg flex items-center px-2 py-1">
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
            <div className="dropdown dropdown-end">
            <label className="btn btn-circle swap swap-rotate">
              {/* Hidden checkbox controls the state */}
              <input type="checkbox" />
  
              {/* Hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
  
              {/* Close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512">
                <polygon
                  points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-5">
              <li><Link href="/sign-in">Sign In</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
            {/* <button className="btn btn-ghost btn-circle flex items-center">
                <FaGithub className="h-8 w-8 text-gray-200" />
                
                
            </button> */}
            
            </div>
            
        </div>
    </div>

  )
}

export default Navigation