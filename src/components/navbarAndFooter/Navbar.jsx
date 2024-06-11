import React, { useContext } from 'react';
import imgLogo from '../../img/hocdaLogo.png';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import './nav.css'
import { ToggleTheme } from '../../App';
import { persistor } from '../../store/store';

function Navbar() {
    const navigate = useNavigate();

    const { handleSidebar} = useContext(ToggleTheme);

    return (
        <nav className='w-full flex justify-between items-center px-12 h-24 sticky border-b-2 shadow-md lg:px-8 lg:h-20 md:px-5 z-10'>
            <NavLink to='/' className="logo flex items-center h-full">
                <img className='w-20 h-14 lg:w-16 lg:h-12' src={imgLogo} alt="" />
            </NavLink>
            <div className="contList text-slate-900 w-fit static h-full flex flex-row items-center gap-x-8 lg:w-2/3 lg:h-full lg:fixed lg:top-0 lg:left-0 lg:bg-blue-800 lg:flex-col lg:justify-start lg:hidden">
                <ul className="listPages gap-y-3 flex flex-row gap-x-7 items-center h-full font-semibold lg:flex-col lg:gap-y-4 lg:text-slate-100 lg:p-4 lg:gap-x-0 lg:w-full ">
                    <li className='leading-0 h-full lg:h-0 lg:leading-9'>
                        <NavLink to='/' className='h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110 lg:h-0 lg:lead'>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className='h-full lg:h-0 lg:leading-9'>
                        <NavLink to='/about' className='h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110 lg:h-0'>
                            <span>About us</span>
                        </NavLink>
                    </li>
                    <li className='h-full lg:h-0 lg:leading-9'>
                        <NavLink to='/service' className='h-full flex items-center hover:text-blue-800 hover:border-b-2 hover:border-b-blue-800 duration-700 hover:scale-110 lg:h-0'>
                            <span>Services</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="applyBtn">
                    <button onClick={handleLogout} className='px-6 w-[fit-content] h-12 bg-blue-800 text-slate-100 font-semibold rounded-lg'><Link to='https://calendly.com/hocdavi7/consultation'>Book Appointment</Link></button>
                </div>
            </div>
            <div className="burApply hidden gap-x-4 items-center h-full lg:flex">
                <div className="apply">
                    <button onClick={handleLogout} className='px-6 w-[fit-content] h-10 text-sm bg-blue-800 text-slate-100 font-semibold rounded-lg'><Link to='https://calendly.com/hocdavi7/consultation'>Book Appointment</Link></button>
                </div>
                <div onClick={handleSidebar} className="burger items-center justify-center w-8 h-8 rounded-lg bg-blue-800 text-slate-100 p-1 text-lg hidden lg:flex">
                <GiHamburgerMenu />
            </div>
            </div>
        </nav>
    )
}

export default Navbar