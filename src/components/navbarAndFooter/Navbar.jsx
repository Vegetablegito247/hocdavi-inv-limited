import React from 'react';
import imgLogo from '../../img/hocdaLogo.png';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import './nav.css'

function Navbar() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/apply');
    };
    return (
        <nav className='w-full flex justify-between items-center px-4 sm:px-12 h-20 sm:h-24 sticky border-b-2 shadow-md'>
            <div className="logo flex items-center sm:h-full">
                <img className=' w-20 h-14' src={imgLogo} alt="" />
            </div>
            <div className="contList fixed h-full width70 top-0 left-0 flex flex-col text-slate-100 bg-blue-800 sm:w-fit sm:text-slate-900 sm:bg-white sm:static sm:h-full sm:flex sm:flex-row sm:items-center sm:gap-x-8">
                <ul className="listPages pl-3 sm:pl-0 flex flex-col gap-y-3 sm:flex sm:flex-row sm:gap-x-7 sm:items-center sm:h-full font-semibold">
                    <li className='leading-9 sm:h-full sm:leading-none '>
                        <NavLink to='/' className='sm:h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110'>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className='leading-9 sm:h-full sm:leading-none'>
                        <NavLink to='/about' className='sm:h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110'>
                            <span>About us</span>
                        </NavLink>
                    </li>
                    <li className='leading-9 sm:h-full sm:leading-none'>
                        <NavLink to='/service' className='sm:h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110'>
                            <span>Services</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="applyBtn">
                    <button onClick={handleNavigate} className=' w-32 h-12 bg-blue-800 text-slate-100 font-semibold rounded-lg'>Apply Now</button>
                </div>
            </div>
            <div className="burger flex items-center justify-center w-8 h-8 rounded-lg bg-blue-800 text-slate-100 p-1 text-lg sm:hidden">
                    <GiHamburgerMenu />
                </div>
        </nav>
    )
}

export default Navbar