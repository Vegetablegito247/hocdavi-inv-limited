import React from 'react';
import imgLogo from '../../img/hocdaLogo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='w-full flex justify-between items-center px-12 h-24 sticky border-b-2 shadow-md'>
            <div className="logo flex items-center h-full">
                <img className=' w-20 h-14' src={imgLogo} alt="" />
            </div>
            <div className="contList h-full flex items-center gap-x-8">
                <ul className="listPages flex gap-x-7 items-center h-full font-semibold">
                    <li className='h-full '>
                        <NavLink className='h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110'>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className='h-full'>
                        <NavLink className='h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110'>
                            <span>About us</span>
                        </NavLink>
                    </li>
                    <li className='h-full'>
                        <NavLink className='h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110'>
                            <span>Services</span>
                        </NavLink>
                    </li>
                    <li className='h-full'>
                        <NavLink className='h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110'>
                            <span>Partners</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="applyBtn">
                    <button className=' w-32 h-12 bg-blue-800 text-slate-100 font-semibold rounded-lg'>Apply Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar