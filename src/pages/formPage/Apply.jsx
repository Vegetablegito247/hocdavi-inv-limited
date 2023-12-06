import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Heads from '../../components/utilities/Heads';
import './apply.css';
import { Outlet } from 'react-router-dom';

function Apply() {
        // scroll to top of page after each navigation
        useEffect(() => {
            scroll.scrollToTop({
                duration: 1000,
                smooth: 'easeInOutQuint',
            });
        }, [])
    return (
        <div className='applyFrm'>
            <Heads head='Start Your Application' />
            <div className="contForm mt-16 px-16 lg:p-8 lg:mt-10 md:p-5">
                <div className="frmBdy bg-slate-800 text-slate-100 rounded-3xl lg:rounded-xl p-5 md:p3">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Apply