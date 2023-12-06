import React from 'react';
import './head.css';

function Heads({ head }) {
    return (
        <div className='heads w-full h-96 flex items-center justify-center relative overflow-hidden bg-slate-600'>
            <div className="abt-des1"></div>
            <h1 className='text-6xl font-bold text-slate-100 text-center'>{head}</h1>
            <div className="abt-des2"></div>
        </div>
    )
}

export default Heads