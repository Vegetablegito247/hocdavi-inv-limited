import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './side.css';
import { IoClose } from "react-icons/io5";
import { ToggleTheme } from '../../App';

function Sidebar() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/apply')
    }

    const { openSidebar, handleSidebar } = useContext(ToggleTheme);
    
    return (
        <div className="contSide">
            <div className={openSidebar ? "cont active" : "cont"}></div>

            <div className={openSidebar ? "side active text-slate-100" : "side"}>
                <div onClick={handleSidebar} className="close">
                    <IoClose />
                </div>
                <ul className='sidebar'>
                    <li onClick={handleSidebar} className='list'>
                        <NavLink to='/'><span>Home</span></NavLink>
                    </li>
                    <li onClick={handleSidebar} className='list'>
                        <NavLink to='/about'><span>About us</span></NavLink>
                    </li>
                    <li onClick={handleSidebar} className='list'>
                        <NavLink to='/service'><span>Services</span></NavLink>
                    </li>
                </ul>
                <div onClick={handleSidebar} className="btnSide">
                    <button onClick={handleNavigate} className=' font-semibold rounded-lg'>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar