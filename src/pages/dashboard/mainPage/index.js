import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMsg } from '../../../store/message';
import { BiMessageDetail, BiLogOut } from 'react-icons/bi';
import './style.css';
import { logUserOut } from '../../../store/user';
import { persistor } from '../../../store/store';

function DisplayDashboard({ openMenu, handleSideMenu }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Checking for token
    const token = useSelector((state) => state.user.admin.token);
    const user = useSelector((state) => state.user.admin.user);

    const [userFName, setUserFname] = useState('');
    const [userLName, setUserLname] = useState('');

    useEffect(() => {
        if (token === null || !token) {
            navigate('/admin');
        }
        else{
            setUserFname(user.firstName);
            setUserLname(user.lastName);
        }
    }, [token, navigate]);

    useEffect(() => {
        dispatch(fetchMsg());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logUserOut());
        navigate('/');
    }

    return (
        <div className="displayBoard">
            <div onClick={handleSideMenu} className={openMenu ? "sideMenuCont active" : "sideMenuCont"}></div>
            <div className={openMenu ? 'sideMenu active' : 'sideMenu'}>
                <div className="mainMenu">
                    <NavLink onClick={handleSideMenu} to={""} end>
                        <div className="sideIcon">
                            <AiOutlineDashboard />
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink onClick={handleSideMenu} to='messages'>
                        <div className="sideIcon">
                            <BiMessageDetail />
                        </div>
                        <span>Messages</span>
                    </NavLink>
                </div>

                <div className="account">
                    <div className="acctHolder">
                        <FaUserCircle />
                        <h3>{userFName} {userLName}</h3>
                    </div>
                    <div className="acctSettings">
                        <div className='logout' onClick={handleLogout}>
                            <div className="acctIcon">
                                <BiLogOut />
                            </div>
                            <span>Log out</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default DisplayDashboard;